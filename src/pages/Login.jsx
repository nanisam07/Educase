import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

function Login() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="page">
        <h1>Signin to your <br></br>PopX account</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <InputField
          label="Email Address"
          placeholder="Enter email address"
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <button
          className="login-btn"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </MobileContainer>
  );
}

export default Login;