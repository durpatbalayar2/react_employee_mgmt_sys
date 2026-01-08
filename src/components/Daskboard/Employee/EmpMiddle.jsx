import React from 'react'

const EmpMiddle = ({data}) => {
  return (
    <>
      <div className="h-30 w-[45%] bg-red-400 rounded-2xl  px-10 py-5 ">
        <h1 className="text-4xl font-semibold">{data.taskCounts.newTask}</h1>
        <h1 className="text-3xl font-semibold">New Task</h1>
      </div>

      <div className="h-30 w-[45%] bg-pink-400 rounded-2xl  px-10 py-5 ">
        <h1 className="text-4xl font-semibold">{data.taskCounts.completed}</h1>
        <h1 className="text-3xl font-semibold">Completed Task</h1>
      </div>
      <div className="h-30 w-[45%] bg-green-400 rounded-2xl  px-10 py-5 ">
        <h1 className="text-4xl font-semibold">{data.taskCounts.active}</h1>
        <h1 className="text-3xl font-semibold">Accepted Task</h1>
      </div>
      <div className="h-30 w-[45%] bg-yellow-400 rounded-2xl  px-10 py-5 ">
        <h1 className="text-4xl font-semibold">{data.taskCounts.failed}</h1>
        <h1 className="text-3xl font-semibold">Failed Task</h1>
      </div>
    </>
  );
}

export default EmpMiddle