import { createContext, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalStorage()
    const { employees } = getlocalStorage();
    setUserData({ employees});
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
