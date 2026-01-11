import React from "react";
import AcceptTask from "../../TaskList/AcceptTask";
import NewTask from "../../TaskList/NewTask";
import CompleteTask from "../../TaskList/CompleteTask";
import FailedTask from "../../TaskList/FailedTask";

const EmpTaskCard = ({ data, onUpdateTask, onRemoveTask }) => {
  return (
    <div
      id="tasklist"
      className="  flex items-center justify-start flex-nowrap gap-5 w-full   h-[54%]  mt-10 pb-5  overflow-x-auto"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={index}
              data={elem}
              onUpdateTask={onUpdateTask}
              idx={index}
            />
          );
        }

        if (elem.newTask) {
          return (
            <NewTask
              key={index}
              data={elem}
              onUpdateTask={onUpdateTask}
              idx={index}
            />
          );
        }
        if (elem.completed) {
          return (
            <CompleteTask
              key={index}
              data={elem}
              onRemoveTask={onRemoveTask}
              idx={index}
            />
          );
        }
        if (elem.failed) {
          return (
            <FailedTask
              key={index}
              data={elem}
              onRemoveTask={onRemoveTask}
              idx={index}
            />
          );
        }
      })}
    </div>
  );
};

export default EmpTaskCard;
