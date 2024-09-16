import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {token,settoken}=useContext(AuthContext)
  

  const handelSubmit=(e)=>{
    e.preventDefault()
    const UserData={
      email,
      password
    }
    useEffect(()=>{
      axios.post("https://reqres.in/api/login",UserData)
      .then((res)=>settoken(res.data.token))
      .catch((err)=>console.log(err))
    },[])
    

  }


  return (
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
