
import EmpHead from "./EmpHead";
import EmpMiddle from "./EmpMiddle";
import EmpTaskCard from "./EmpTaskCard";

const EmployeeDashboard = ({data}) => {



  
  return (
    <div className="h-screen w-full text-white bg-gray-900 p-5">
      {/* Employe top */}
      <EmpHead data={data} />

      {/* Employee Middle */}

      <div className="flex gap-4 mt-5 ">
        <EmpMiddle data ={data} />
      </div>

      {/* Employee Down Part */}

      <EmpTaskCard data ={data} />
    </div>
  );
};

export default EmployeeDashboard;
