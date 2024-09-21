import axios from "axios";
import {useNavigate, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {loginUser,auth}=useContext(AuthContext)
  const {isloading,setisloading}=useState(false)
  // const navigate=useNavigate()
  console.log(auth)

  const handelSubmit=(e)=>{
    e.preventDefault()
    AllData()
  }

  const AllData=()=>{
    const UserData={
      email,
      password
    }
    useEffect(()=>{
      setisloading(true)
      axios.post("https://reqres.in/api/login",UserData)
      .then((res)=>{
        setisloading(false)
        loginUser(res.data.token)
        // navigate("/dashboard")
      })
      .catch((err)=>console.log(err))
    },[])
    
  }

  return isloading ? <Loader />:(
    <div>
      <form data-testid="login-form" onSubmit={(e)=>handelSubmit(e)}>
        <div>
          <label>
            Email 
            <input  onChange={(e)=>setemail(e.target.value)} data-testid="email-input" o type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e)=>setpassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <h6>eve.holt@reqres.in</h6>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
