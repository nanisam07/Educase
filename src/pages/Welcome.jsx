import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="welcome">
        <div>
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div>
          <button
            className="primary-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}

export default Welcome;