import React, { useState } from 'react'

const EmpHead = () => {

  // const [username, setUsername] = useState('')

  // if(data.firstName=='admin'){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }


  const logOutUser =()=>{

    localStorage.setItem("loggedInUser","")
    window.location.reload()

  }




  
  return (
    <div className=" flex bg-amber-950 items-center justify-between px-5 py-1">
      <div>
        <p className="text-2xl">Hello,</p>
        <h1 className="text-4xl font-semibold">Username👋</h1>
      </div>
      <button onClick={logOutUser} className="text-xl bg-red-500 text-white px-4 py-2 rounded-lg">
        Log Out
      </button>
    </div>
  );
}

export default EmpHead