import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-65">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/4 text-center">Employee Name</h2>
        <h3 className="w-1/4 text-center">Task Category</h3>
        <h5 className="w-1/4 text-center">Active</h5>
        <h5 className="w-1/4 text-center">Completed</h5>
        <h5 className="w-1/4 text-center">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData?.employees?.map((emp, idx) => {
          const active = emp.tasks.filter((t) => t.active).length;
          const completed = emp.tasks.filter((t) => t.completed).length;
          const failed = emp.tasks.filter((t) => t.failed).length;

          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/4 text-center">{emp.firstName}</h2>
              <h3 className="w-1/4 text-center text-blue-600">
                {emp.tasks[0]?.category || "—"}
              </h3>
              <h5 className="w-1/4 text-center text-yellow-400">{active}</h5>
              <h5 className="w-1/4 text-center text-green-500">{completed}</h5>
              <h5 className="w-1/4 text-center text-red-500">{failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
