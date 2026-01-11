import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Daskboard/Admin/AdminDashboard";
import EmployeeDashboard from "./components/Daskboard/Employee/EmployeeDashboard";

import { AuthContext } from "./context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext);



  useEffect(()=>{

    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)

      setLoggedInUserData(userData.data)
    }


  },[])



const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    return "admin";
  }

  if (authData) {
    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return "employee";
    }
  }

  alert("Invalid Credentials");
  return null;
};


  return (

   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"element={<About/>}/>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />

      <Route
        path="/admin"
        element={
          user === "admin" ? (
            <AdminDashboard changeUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/employee"
        element={
          user === "employee" ? (
            <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default App;
