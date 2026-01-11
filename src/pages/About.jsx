const About = () => {
  return (
    <section className="bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
     
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="text-blue-500">Employee Management System</span>
          </h2>
          <p className="text-gray-300 w-full mx-auto">
            A role-based task management system designed to simplify how
            administrators assign tasks and how employees manage their work
            efficiently.
          </p>
        </div>

       
        <div className="grid gap-10 md:grid-cols-2 items-center">
       
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Admin Control
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The admin dashboard allows administrators to create and assign
                new tasks to employees. Admins can monitor task progress and
                maintain complete control over task management.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Employee Task Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Employees can view assigned tasks and manage their status by
                accepting tasks, marking them as completed, or reporting them as
                failed based on task progress.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Task Status Tracking
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The system clearly categorizes tasks into active, completed, and
                failed states, ensuring transparency and smooth workflow between
                admin and employees.
              </p>
            </div>
          </div>

         
          <div className="bg-linear-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Why This System?</h3>
            <ul className="space-y-3 text-gray-100">
              <li>✔ Role-based dashboards for Admin & Employee</li>
              <li>✔ Easy task creation and assignment</li>
              <li>✔ Clear task status: Accepted, Completed, Failed</li>
              <li>✔ Improved productivity and accountability</li>
              <li>✔ Simple, clean, and responsive UI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
