import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <Router> 
      <Toaster position="top-center" />
    <AuthProvider>
    <UserProvider>
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
    
    </UserProvider>
  </AuthProvider>
  </Router> 
  );
};

export default App;