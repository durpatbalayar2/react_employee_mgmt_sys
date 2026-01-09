import React from "react";

import CreateTask from "./CreateTask";
import AllTask from "./AllTask";
import Header from "../../../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-black text-white p-5">
      <Header changeUser={props.changeUser} isAdmin/>
      <CreateTask/>
      <AllTask/>

      
    </div>
  );
};

export default AdminDashboard;
