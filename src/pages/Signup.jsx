import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

function Signup() {
  const navigate = useNavigate();
  const [agency, setAgency] = useState("yes");

  return (
    <MobileContainer>
      <div className="page">
        <h1>
          Create your <br />
          PopX account
        </h1>

        <InputField
          label="Full Name*"
          value="Marry Doe"
        />

        <InputField
          label="Phone Number*"
          value="Marry Doe"
        />

        <InputField
          label="Email Address*"
          value="Marry Doe"
        />

        <InputField
          label="Password*"
          value="Marry Doe"
          
        />

        <InputField
          label="Company name"
          value="Marry Doe"
        />

        <div className="radio-group">
          <p>
            Are you an Agency?
            <span className="required">*</span>
          </p>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={agency === "yes"}
                onChange={(e) => setAgency(e.target.value)}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={agency === "no"}
                onChange={(e) => setAgency(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
}

export default Signup;