import { useContext, useState } from "react";
import { AppContext } from '../context/app-context';
import NeoButtonBase from "./NeoButtonBase";
import Alert from "./alert";

const Login = () => {
  const ctx = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com") {
      ctx.setjwtToken("master");
      window.location.href = ("/login");
    } else {
      ctx.setAlertMessageClassname("Invalid User please contact support", "alert-danger");
    }
  }

  const handleLogout = () => {
    ctx.unSetjwtToken();
    window.location.href = ("/login");
  }

  return (
    <div >
    <Alert message={ctx.alertMessage} className={ctx.alertClassname} />
    <div className="login-container">
      <div className="login-box">
        {ctx.jwtToken === "" ?
          <>
            <h1 className="login-title">🔐 Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Usuario o Email</label>
                <input
                  type="email"
                  className="neon-input"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Contrase&ntilde;a</label>
                <input
                  type="password"
                  className="neon-input"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <NeoButtonBase type="submit" className="neon-button">Ingresar</NeoButtonBase>
            </form>
          </>
          :
          <>
            <h1 className="login-title">👾 Welcome, {ctx.jwtToken}</h1>
            <NeoButtonBase className="danger neon-button" onClick={handleLogout}>Jack Out</NeoButtonBase>
          </>
        }
      </div>
    </div>
    </div>
  );
}

export default Login;

