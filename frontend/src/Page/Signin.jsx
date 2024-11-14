import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
  return (
    <div className="auth">
      <div className="welcome">
        <h2>
          welcome To My Clinic ! <br />
          Sign in
        </h2>
      </div>
      <div className="form">
        <span className="background"></span>
        <form>
          <input type="text" placeholder="Enter your full name" />
          <input type="text" placeholder="Enter your Number" />
          <div>
            <input type="password" placeholder="Enter Password" />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <Link to="#">Forget Password</Link>
        </form>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Auth;
