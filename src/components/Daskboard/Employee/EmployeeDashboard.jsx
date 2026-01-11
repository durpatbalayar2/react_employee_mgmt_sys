import { useContext } from "react";
import Header from "../../../other/Header";
import EmpMiddle from "./EmpMiddle";
import EmpTaskCard from "./EmpTaskCard";
import { AuthContext } from "../../../context/AuthProvider";

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  const employee = userData.employees.find((emp) => emp.id === props.data.id);

  const updateTaskStatus = (taskIndex, status) => {
    const updatedEmployees = userData.employees.map(function (emp) {
      if (emp.id === props.data.id) {
        const updatedTasks = emp.tasks.map(function (task, idx) {
          if (idx === taskIndex) {
            return {
              ...task,
              newTask: false,
              active: status === "active",
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        const counts = {
          newTask: 0,
          active: 0,
          completed: 0,
          failed: 0,
        };

        updatedTasks.forEach((t) => {
          if (t.newTask) counts.newTask++;
          if (t.active) counts.active++;
          if (t.completed) counts.completed++;
          if (t.failed) counts.failed++;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: counts,
        };
      }

      return emp;
    });

    setUserData({ employees: updatedEmployees });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };


  const removeTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.id !== employee.id) return emp;

      return {
        ...emp,
        tasks: emp.tasks.filter((_, idx) => idx !== taskIndex),
      };
    });

    setUserData({ employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };


  return (
    <div className="min-h-screen w-full text-white bg-gray-900 p-5">
      <Header changeUser={props.changeUser} data={props.data} />

      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        <EmpMiddle data={employee} />
      </div>

      <EmpTaskCard
        data={employee}
        onUpdateTask={updateTaskStatus}
        onRemoveTask={removeTask}
      />
    </div>
  );
};


export default EmployeeDashboard;
