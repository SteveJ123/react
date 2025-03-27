import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

const Login = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();

  const onSubmit = (data) => {    
    const {email, password} = data
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-[40%] h-[45%]">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="block w-full p-2 border rounded mb-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="block w-full p-2 border rounded mb-2"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
    </div>
  );
};

export default Login;
