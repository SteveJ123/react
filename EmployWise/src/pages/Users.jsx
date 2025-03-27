import { useState, useMemo } from "react";
import { useUsers } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Users = () => {
  const { users, page, setPage, totalPages, deleteUser, editUser, isLoading, isError } = useUsers();
  const { logout } = useAuth();
  const [editingUser, setEditingUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleEditClick = (user) => {
    setEditingUser(user);
    setValue("first_name", user.first_name);
    setValue("last_name", user.last_name);
    setValue("email", user.email);
    setValue("id", user.id);
    setValue("avatar", user.avatar);
  };

  const handleSave = (data) => {
    editUser({ id: editingUser.id, updatedUser: data });
    setEditingUser(null);
    reset();
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  if (isLoading) return <p className="text-center">Loading users...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching users.</p>;

  return (
    <div className="p-6">
      <button onClick={logout} className="mb-4 p-2 bg-red-500 text-white rounded">Logout</button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow">
              <img src={user.avatar} alt={user.first_name} className="w-20 h-20 rounded-full mx-auto" />
              <h3 className="text-center">{user.first_name} {user.last_name}</h3>
              <p className="text-center">{user.email}</p>

              <div className="mt-2 flex gap-2 justify-center">
                <button onClick={() => handleEditClick(user)} className="p-1 bg-blue-400 text-white rounded">Edit</button>
                <button onClick={() => deleteUser(user.id)} className="p-1 bg-red-400 text-white rounded">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No users found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-4">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1} 
          className={`p-2 rounded ${page === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        >
          Prev
        </button>
        <span className="p-2">Page {page} of {totalPages}</span>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages} 
          className={`p-2 rounded ${page === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
