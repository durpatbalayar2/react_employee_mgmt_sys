const EmpMiddle = ({ data }) => {
  const tasks = data.tasks || [];

  const newTask = tasks.filter((t) => t.newTask).length;
  const active = tasks.filter((t) => t.active).length;
  const completed = tasks.filter((t) => t.completed).length;
  const failed = tasks.filter((t) => t.failed).length;

  return (
    <>
      <div className="h-30 lg:w-[45%] bg-red-400 rounded-2xl px-10 py-5">
        <h1 className=" text-4xl font-semibold">{newTask}</h1>
        <h1 className="  text-3xl font-semibold">New Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-pink-400 rounded-2xl px-10 py-5">
        <h1 className=" text-4xl  font-semibold">{completed}</h1>
        <h1 className="text-3xl font-semibold">Completed Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-green-400 rounded-2xl px-10 py-5">
        <h1 className="text-4xl  font-semibold">{active}</h1>
        <h1 className="text-3xl font-semibold">Accepted Task</h1>
      </div>

      <div className="h-30 lg:w-[45%] bg-yellow-400 rounded-2xl px-10 py-5">
        <h1 className="text-4xl  font-semibold">{failed}</h1>
        <h1 className="text-3xl font-semibold">Failed Task</h1>
      </div>
    </>
  );
};

export default EmpMiddle;
