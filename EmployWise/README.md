# React User Management with Reqres API

## Overview
This project is a React application that integrates with the Reqres API to provide basic user management functionalities. It includes authentication, user listing with pagination, and options to edit and delete users. The app is built using **React**, **Vite**, **Tailwind CSS**, and **tanstack/react-query** for data fetching and caching.

## Features
### Level 1: Authentication
- Users log in using credentials (email & password).
- On successful login, a token is stored and the user is redirected to the Users List page.

### Level 2: List Users
- Fetch and display users from the API with pagination.
- Users are displayed in a structured format with their avatar, first name, and last name.

### Level 3: Edit & Delete Users
- Users can edit their details (first name, last name, and email).
- Users can be deleted from the list.
- Success and error messages are shown for operations.

---

## Tech Stack
- **React** (Vite for fast development)
- **React Context API** (for authentication & user state management)
- **React Hook Form + Yup** (for form validation)
- **TanStack Query (React Query)** (for data fetching & caching)
- **Tailwind CSS** (for styling)
- **Reqres API** (mock backend for testing)

---

## How It Works

### **Authentication using `AuthContext`**
The `AuthContext` manages user authentication status and provides login/logout functionality.

#### **Implementation**
- Uses React Context API to store authentication state.
- Calls `POST /api/login` with user credentials.
- Stores the token in local storage.
- Redirects to the users page after successful login.

#### **Example Code:**
```jsx
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      navigate("/users");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

---

### **User Management using `UserContext`**
The `UserContext` handles fetching, updating, and deleting users.

#### **Implementation**
- Fetches users using React Query.
- Uses mutations for updating and deleting users.
- Provides state management for pagination.

#### **Example Code:**
```jsx
import { createContext, useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const UserContext = createContext();

const fetchUsers = async (page) => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  return res.json();
};

export const UserProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  
  const { data, isLoading, isError } = useQuery(["users", page], () => fetchUsers(page));

  const editUserMutation = useMutation(async ({ id, updatedUser }) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User updated successfully!");
    }
  });

  const deleteUserMutation = useMutation(async (id) => {
    await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User deleted successfully!");
    }
  });

  return (
    <UserContext.Provider value={{
      users: data?.data || [],
      page,
      setPage,
      editUser: editUserMutation.mutate,
      deleteUser: deleteUserMutation.mutate,
      isLoading,
      isError
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
```

---

### **How `tanstack/react-query` is Used**
React Query is used for efficient data fetching, caching, and updating UI without excessive API calls.

#### **Fetching Users with Query**
```jsx
const { data, isLoading, isError } = useQuery(["users", page], () => fetchUsers(page));
```
- **Data is cached** to avoid unnecessary re-fetching.
- **Loading and error states** are handled smoothly.

#### **Mutations for Updating & Deleting Users**
```jsx
const editUserMutation = useMutation(async ({ id, updatedUser }) => {
  await fetch(`https://reqres.in/api/users/${id}`, { method: "PUT", body: JSON.stringify(updatedUser) });
}, {
  onSuccess: () => queryClient.invalidateQueries(["users"]);
});
```
- Mutations **send data to the server** and then invalidate cached queries to update the UI automatically.

---

## Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/reqres-user-management.git
   cd reqres-user-management
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Login Credentials**
   ```sh
   Email: eve.holt@reqres.in
   Password: cityslicka
   ```

---

## Conclusion
This project demonstrates authentication, data fetching, state management, and CRUD operations in a React app using Reqres API, `react-query`, and `React Context API`. 🚀
