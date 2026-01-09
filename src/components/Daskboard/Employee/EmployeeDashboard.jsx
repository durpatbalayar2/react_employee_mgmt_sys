
import Header from "../../../other/Header";

import EmpMiddle from "./EmpMiddle";
import EmpTaskCard from "./EmpTaskCard";

const EmployeeDashboard = (props) => {



  
  return (
    <div className="h-screen w-full text-white bg-gray-900 p-5">
      {/* Employe top */}
      <Header changeUser ={props.changeUser} data={props.data} />

      {/* Employee Middle */}

      <div className="flex gap-4 mt-5 ">
        <EmpMiddle data ={props.data} />
      </div>

      {/* Employee Down Part */}

      <EmpTaskCard data ={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
