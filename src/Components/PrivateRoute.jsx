import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink } from "react-router-dom";

function PrivateRoute(children) {
    const {isAuth,setisAuth}=useContext(AuthContext)
    if(!isAuth){
        return <NavLink to={'/login'} />
    }
    else
    {
        return children
    }
}

export default PrivateRoute;
