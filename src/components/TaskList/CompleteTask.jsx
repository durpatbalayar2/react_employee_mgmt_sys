import React from 'react'

const CompleteTask = ({ data, idx, onRemoveTask }) => {
  return (
    <div className=" shrink-0 h-60 w-95 bg-gray-400 rounded-xl">
      <div className="flex items-center justify-between px-3 py-4">
        <h3 className="bg-red-600 px-5 py-1 rounded-lg text-base">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h1 className=" text-xl lg:text-2xl font-bold px-3 mt-2">
        {data.taskTitle}
      </h1>

      <p className="text-xl px-3 ">{data.taskDescription}</p>
      <div className="mt-2 px-2 text-center">
        <button onClick={()=>onRemoveTask(idx)} className="bg-blue-500 py-1 px-2 mt-5 rounded  text-center text-[18px]">
          Task Completed ✅
        </button>
      </div>
    </div>
  );
};

export default CompleteTask