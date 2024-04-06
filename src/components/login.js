import { useContext, useState } from "react";
import { AppContext } from '../context/app-context';
import Alert from "./alert";

const Login = () => {

    const ctx = useContext(AppContext);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email === "admin@gmail.com") {
          ctx.setjwtToken("master")
          window.location.href = ("/login");
      } else {
        ctx.setAlertMessageClassname("Invalid User please contact support", "alert-danger")
    }
  } 
    const handleLogout = () => {
      ctx.unSetjwtToken();
      window.location.href = ("/login");
  }

    return( 
    <div className="content container">
    <Alert message={ctx.alertMessage} className={ctx.alertClassname} /> 
    <div className="row">
    <div className="col-md-6 offset-md-3">
        {ctx.jwtToken === "" ? 
        <>
        <h1 className="mt-3 text-white bs-light bs-light-text-emphasis">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=> setEmail(event.target.value)} />
            <div id="emailHelp" className="form-text text-success" >We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=> setPassword(event.target.value)} />
          </div>
          <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-success">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
        : 
          <>
          <h1 className="mt-3 text-white bs-light bs-light-text-emphasis">  Welcome {ctx.jwtToken}</h1>
          <label className="btn btn-danger" onClick={() => handleLogout()} > Log out </label>
          </>
          }
        </div>
    </div>
    </div>
    )
}

export default Login;
