import React from 'react'

const EmpHead = () => {
  return (
    <div className=" flex bg-amber-950 items-center justify-between px-5 py-1">
      <div>
        <p className="text-2xl">Hello,</p>
        <h1 className="text-4xl font-semibold">Durpat👋</h1>
      </div>
      <button className="text-xl bg-red-500 text-white px-4 py-2 rounded-lg">
        Log Out
      </button>
    </div>
  );
}

export default EmpHead