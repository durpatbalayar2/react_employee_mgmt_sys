import React from "react";
import AcceptTask from "../../TaskList/AcceptTask";
import NewTask from "../../TaskList/NewTask";
import CompleteTask from "../../TaskList/CompleteTask";
import FailedTask from "../../TaskList/FailedTask";

const EmpTaskCard = ({ data }) => {
  console.log(data.tasks);
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start flex-nowrap gap-5 w-full   h-[54%]  mt-10 pb-5  overflow-x-auto"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }

        if (elem.newTask) {
          return <NewTask key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};

export default EmpTaskCard;
