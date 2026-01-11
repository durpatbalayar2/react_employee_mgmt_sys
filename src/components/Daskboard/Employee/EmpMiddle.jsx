const EmpMiddle = ({ data }) => {
  const counts = {
    newTask: data.tasks.filter((t) => t.newTask).length,
    active: data.tasks.filter((t) => t.active).length,
    completed: data.tasks.filter((t) => t.completed).length,
    failed: data.tasks.filter((t) => t.failed).length,
  };

  return (
    <>
      <div className="h-30 lg:w-[45%] bg-red-400 rounded-2xl px-10 py-5">
        <h1 className=" text-4xl font-semibold">{counts.newTask}</h1>
        <h1 className="  text-3xl font-semibold">New Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-pink-400 rounded-2xl px-10 py-5">
        <h1 className=" text-4xl  font-semibold">{counts.completed}</h1>
        <h1 className="text-3xl font-semibold">Completed Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-green-400 rounded-2xl px-10 py-5">
        <h1 className="text-4xl  font-semibold">{counts.active}</h1>
        <h1 className="text-3xl font-semibold">Accepted Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-yellow-400 rounded-2xl px-10 py-5">
        <h1 className="text-4xl  font-semibold">{counts.failed}</h1>
        <h1 className="text-3xl font-semibold">Failed Task</h1>
      </div>
    </>
  );
};

export default EmpMiddle;
