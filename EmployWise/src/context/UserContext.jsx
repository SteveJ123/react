import { createContext, useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const UserContext = createContext();

const fetchUsers = async (page) => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await res.json();
  return { users: data.data, totalPages: data.total_pages }; // Store total pages
};

export const UserProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  // Fetch users with React Query
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true,
  });

  const users = data?.users || [];
  const totalPages = data?.totalPages || 1;

  // Mutation to edit a user
  const editUserMutation = useMutation({
    mutationFn: async ({ id, updatedUser }) => {
      const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      if (!res.ok) throw new Error("Failed to update user");
      return res.json();
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["users", page], (oldData) => {
        if (!oldData) return { users: [], totalPages: 1 };
        const updatedUsers = oldData.users.map((user) =>
          user.id === Number(updatedUser.id) ? { ...user, ...updatedUser } : user
        );
        return { ...oldData, users: updatedUsers };
      });
      toast.success("User updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update user");
    },
  });


  // Mutation to delete a user
  const deleteUserMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user");
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData(["users", page], (oldData) => {
        if (!oldData) return { users: [], totalPages: 1 };
        const updatedUsers = oldData.users.filter((user) => user.id !== id);
        return { ...oldData, users: updatedUsers };
      });
      toast.success("User deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });

  return (
    <UserContext.Provider
      value={{
        users,
        page,
        setPage,
        totalPages,
        editUser: editUserMutation.mutate,
        deleteUser: deleteUserMutation.mutate,
        isLoading,
        isError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
