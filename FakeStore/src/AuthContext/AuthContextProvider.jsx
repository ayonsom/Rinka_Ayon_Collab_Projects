import React,{Children, createContext, useState} from 'react'
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [userDetails,setUserDetails] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value = {{userDetails, setUserDetails, isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
