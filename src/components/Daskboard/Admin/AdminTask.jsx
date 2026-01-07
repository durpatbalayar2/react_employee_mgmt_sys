import React from 'react'

const AdminTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="w-full flex  flex-wrap items-start justify-between  ">
        <div className="w-1/2  ">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Tittle</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="Write a task"
          />

          <h3 className="text-sm text-gray-300 mb-0.5">Data</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="date"
          />

          <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="employee name"
          />

          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="design,dev,..."
          />
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Describe your task"
          ></textarea>

          <button
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full "
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminTask