import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = handleLogin(email, password);

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "employee") {
      navigate("/employee");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className=" flex items-center justify-center bg-gray-950 w-full h-screen  ">
        <div className=" w-[80%] h-[50%] lg:w-[50%] lg:h-[65%]  flex flex-col items-center gap-2 bg-linear-to-b from-[#1b57849c] to-[#1e1c1cc9]  rounded-2xl shadow-[0px_2px_4px_3px_#fff]  pl-2  text-white">
          <h1 className="text-4xl font-semi-bold uppercase  py-8">Login</h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" w-full flex flex-col gap-3  px-5 py-2  "
          >
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="text-xl  outline-0 border-b-2  pb-1"
              type="text"
              value={email}
              id="email"
              placeholder="Enter your email (Admin: admin@me.com/ Employee: e1@me.com)"
            />

            <label className="text-xl font-semibold pt-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="text-xl  outline-0 border-b-2  pb-2"
              type="password"
              value={password}
              id="password"
              placeholder="Enter your password (123)"
            />
            <div className="w-full flex  justify-center">
              <button
                className="text-2xl  rounded-full mt-10 py-1.5 w-fit px-10 bg-black uppercase "
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-4">
            <Link to="/" className="  text-blue-300 text-2xl font-semibold cursor-pointer active:scale-90 ">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
