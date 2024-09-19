import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  token, settoken } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const UserData={
    email,
    password,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login",UserData);
      settoken(response.data.token);
      // navigate("/"); 
      navigate("/dashboard")
      console.log(token)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email 
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              data-testid="email-input" 
              type="email" 
              placeholder="email" 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
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
