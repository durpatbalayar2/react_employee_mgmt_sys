import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=" shrink-0 h-60  w-95 bg-yellow-400 rounded-xl">
      <div className="flex items-center justify-between px-3 py-4">
        <h3 className="bg-red-600 px-5 py-1 rounded-lg text-base">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h1 className=" text-xl lg:text-2xl font-bold px-3 mt-2">{data.taskTitle}</h1>

      <p className="text-xl px-3 mt-5">{data.taskDescription}</p>
      <div className="mt-2 px-2">
        <button className="bg-red-500 py-1 px-2 mt-5 text-sm rounded w-full">
          Failed
        </button>
      </div>
    </div>
  );
}

export default FailedTask