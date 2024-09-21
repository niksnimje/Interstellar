import { createContext, useState } from "react";

export const AuthContext=createContext()

let authData={
    isAuth:false,
    token:null
}

function AuthContextProvider({children}) {
    
    const [auth , setauth]=useState(authData)

    const loginUser=(value)=>{
        setauth({isAuth:true,token:value})
    }

    const logoutUser=()=>{
        setauth({isAuth:false,token:null})
    }
    return(
        <>
            <AuthContext.Provider value={{loginUser,logoutUser,auth}}>{children}</AuthContext.Provider>
        </>
    )
    
}

export default AuthContextProvider;
