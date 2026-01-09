import React, { useState } from "react";

const Header = ({changeUser,data,isAdmin}) => {
  
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser('')
  };

  return (
    <div className=" flex bg-amber-950 items-center justify-between px-5 py-1">
      <div>
        <p className="text-2xl">Hello,</p>
        <h1 className="text-4xl font-semibold">
          
          {isAdmin ? "Admin" : data?.firstName} 👋
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className="text-xl bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
