import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDate,
      category: taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, taskObj],
          taskCounts: {
            active: emp.taskCounts.active,
            newTask: emp.taskCounts.newTask + 1,
            completed: emp.taskCounts.completed,
            failed: emp.taskCounts.failed,
          },
        };
      }
      return emp;
    });

    setUserData({ employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskDescription("");
    setTaskCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap justify-between"
      >
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 border mb-4 bg-transparent"
            type="text"
          />

          <h3 className="text-sm text-gray-300">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 border mb-4 bg-transparent"
            type="date"
          />

          <h3 className="text-sm text-gray-300">Assign To</h3>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 border mb-4 bg-transparent"
            type="text"
            placeholder="Employee First Name"
          />

          <h3 className="text-sm text-gray-300">Category</h3>
          <input
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 border mb-4 bg-transparent"
            type="text"
          />
        </div>

        <div className="w-2/5">
          <h3 className="text-sm text-gray-300">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 border bg-transparent"
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 py-3 mt-4 w-full rounded"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
