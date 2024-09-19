import { createContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [token , settoken]=useState('')
    const [isAuth , setisAuth]=useState(false)

    const loginUser = ()=>{
        if(!isAuth){
            return token 
        }
        else{
            return children
        }
    }



    return(
        <>
            <AuthContext.Provider value={{token,settoken,isAuth,setisAuth ,loginUser }}>{children}</AuthContext.Provider>
        </>
    )
    
}

export default AuthContextProvider;
