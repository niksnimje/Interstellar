import { createContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [token , settoken]=useState('')
    const [isAuth , setisAuth]=useState(false)
    return(
        <>
            <AuthContext.Provider value={{token,settoken,isAuth,setisAuth}}>{children}</AuthContext.Provider>
        </>
    )
    
}

export default AuthContextProvider;
