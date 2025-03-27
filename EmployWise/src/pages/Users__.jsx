import { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";

const userSchema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });

const Users = () => {
  const { users, page, setPage, deleteUser, editUser } = useUsers();
  const { logout } = useAuth();

  // State for editing
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({ avatar:"",email:"",first_name:"",id: "",last_name:""});

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
    setValue("avatar", user.avatar);
  };


  const handleSave = (data) => {    
    editUser(editingUser.id, data);    
    setEditingUser(null);
    reset();
  };
  

  return (
    <div className="p-6">
      <button onClick={logout} className="mb-4 p-2 bg-red-500 text-white rounded">Logout</button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {users.length > 0 ?(users.map((user, index) => (
    <div key={user.id || `user-${index}`} className="p-4 border rounded-lg shadow">
      <img src={user.avatar} alt={user.first_name} className="w-20 h-20 rounded-full mx-auto" />
      <h3 className="text-center">{user.first_name} {user.last_name}</h3>
      <p className="text-center">{user.email}</p>

      <div className="mt-2 flex gap-2 justify-center">
        <button onClick={() => handleEditClick(user)} className="p-1 bg-blue-400 text-white rounded">Edit</button>
        <button onClick={() => deleteUser(user.id)} className="p-1 bg-red-400 text-white rounded">Delete</button>
      </div>
    </div>
  ))): ("<p>No data</p>")}
</div>

<div className="flex justify-between mt-4">
  <button onClick={() => setPage(page - 1)} disabled={page === 1} className="p-2 bg-gray-300 rounded">Prev</button>
  <button onClick={() => setPage(page + 1)} className="p-2 bg-gray-300 rounded">Next</button>
</div>


      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>

            <form onSubmit={handleSubmit(handleSave)}>
              <input
                type="text"
                {...register("first_name")}
                placeholder="First Name"
                className="block w-full p-2 border rounded mb-2"
              />
              <p className="text-red-500">{errors.first_name?.message}</p>

              <input
                type="text"
                {...register("last_name")}
                placeholder="Last Name"
                className="block w-full p-2 border rounded mb-2"
              />
              <p className="text-red-500">{errors.last_name?.message}</p>

              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="block w-full p-2 border rounded mb-2"
              />
              <p className="text-red-500">{errors.email?.message}</p>

              <div className="flex justify-end mt-4">
                <button type="button" onClick={() => setEditingUser(null)} className="p-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
