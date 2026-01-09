import React from "react";

const AcceptTask = ({data}) => {


  return (
    <div className=" shrink-0 h-full w-95 bg-red-400 rounded-xl">
      <div className="flex items-center justify-between px-3 py-4">
        <h3 className="bg-red-600 px-5 py-1 rounded-lg text-base">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h1 className="text-2xl font-bold px-3 mt-2">{data.taskTitle}</h1>

      <p className="text-xl px-3 mt-5">{data.taskDescription}</p>

      <div className="flex justify-between mt-4 px-2">
        <button className="bg-green-500 py-1 px-2 text-sm rounded  ">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
