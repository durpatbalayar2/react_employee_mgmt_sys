import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  // console.log(userData)

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-65">
      {/* Desktop View */}
      <div className="hidden lg:flex bg-red-400 mb-2 py-2 px-4 justify-between rounded">
        <h2 className="w-1/4 text-center">Employee Name</h2>
        <h3 className="w-1/4 text-center">Task Category</h3>
        <h5 className="w-1/4 text-center">New Task </h5>
        <h5 className="w-1/4 text-center">Completed</h5>
        <h5 className="w-1/4 text-center">Failed</h5>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden bg-gray-600 p-3 rounded">
        <p className="text-center text-xl">Employee Task Details</p>
      </div>

      <div id="adminalltask" className="h-[80%] overflow-auto">
        {userData?.employees?.map((emp, idx) => {
          const newTask = emp.taskCounts.newTask;
          const name = emp.firstName;
          const category = emp.tasks[0].category;
          const taskCompleted = emp.taskCounts.completed;
          const taskFailed = emp.taskCounts.failed;

          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/4 text-center">{name}</h2>
              <h3 className="w-1/4 text-center text-blue-600">{category}</h3>
              <h5 className="w-1/4 text-center text-yellow-400">{newTask}</h5>
              <h5 className="w-1/4 text-center text-green-500">
                {taskCompleted}
              </h5>
              <h5 className="w-1/4 text-center text-red-500">{taskFailed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
