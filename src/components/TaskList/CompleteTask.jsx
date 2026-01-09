import React from 'react'

const CompleteTask = () => {
  return (
    <div className=" shrink-0 h-full w-95 bg-gray-400 rounded-xl">
      <div className="flex items-center justify-between px-3 py-4">
        <h3 className="bg-red-600 px-5 py-1 rounded-lg text-base">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h1 className="text-2xl font-bold px-3 mt-2">Make a Youtube Video</h1>

      <p className="text-xl px-3 mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ab quis
        sapiente veniam molestias est?
      </p>
      <div className="mt-2 px-2">
        <button className="bg-blue-500 py-1 px-2 text-sm rounded w-full">
          Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask