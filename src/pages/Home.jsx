import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Manage Employees <br />
            <span className="text-blue-500">Smarter & Faster</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            A role-based Employee Management System where admins assign tasks
            and employees manage their work by accepting, completing, or
            reporting task status efficiently.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 transition text-lg lg:text-xl px-8 py-3 rounded-full active:scale-95"
          >
            Get Started →
          </button>
        </div>

       
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Employee Management Illustration"
            className="w-70 md:w-95 lg:w-105 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
