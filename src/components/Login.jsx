import "./login/Login.scss";
import LoginForm from "./login/LoginForm";
import Statistics from "./login/Statistics"

function Login() {
  return (
    <div className="Login">
      <Statistics />
      <LoginForm />
    </div>
  );
}

export default Login;
