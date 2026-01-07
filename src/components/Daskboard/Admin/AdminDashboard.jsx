import React from "react";
import EmpHead from "../Employee/EmpHead";
import AdminTask from "./AdminTask";
import AllTask from "./AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-black text-white p-10">
      <EmpHead />
      <AdminTask/>
      <AllTask/>

      
    </div>
  );
};

export default AdminDashboard;
