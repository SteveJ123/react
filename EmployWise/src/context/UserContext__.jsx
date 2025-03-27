import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();
    setUsers(data.data);
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    toast.success("User updated successfully!");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success("User deleted successfully!");
  };

  return (
    <UserContext.Provider value={{ users, page, setPage, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
