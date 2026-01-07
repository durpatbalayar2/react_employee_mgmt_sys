import React from "react";
import EmpHead from "./EmpHead";
import EmpMiddle from "./EmpMiddle";
import EmpTaskCard from "./EmpTaskCard";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-full text-white bg-gray-900 p-5">
      {/* Employe top */}
      <EmpHead />

      {/* Employee Middle */}

      <div className="flex gap-4 mt-5 ">
        <EmpMiddle />
      </div>

      {/* Employee Down Part */}

      <EmpTaskCard />
    </div>
  );
};

export default EmployeeDashboard;
