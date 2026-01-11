import { createContext, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utils/localStorage";
import { useEffect } from "react";
import Footer from "../other/Footer";
import Navbar from "../other/Navbar";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalStorage();
    const { employees } = getlocalStorage();
    setUserData({ employees });
  }, []);

  return (
    <div>
      <Navbar />
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
      <Footer />
    </div>
  );
};

export default AuthProvider;
