
import { createContext, useState } from 'react'
import { getlocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {

           const { employees, admin } = getlocalStorage();
           setUserData({ employees, admin });
    
    }, [])
    

 
    

   
  return (
    <div>
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider