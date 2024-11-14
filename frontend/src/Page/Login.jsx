import { faEye, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Auth = () => {
  return (
    <div className="auth">
      <div className="welcome">
        <h2>
          welcome To My Clinic ! <br />
          Log in
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
          <div>
            <input type="password" placeholder="Confirm password" required />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <input type="text" placeholder="Gander" />
          <input type="number" placeholder="Age" />
          <div>
            <input type="text" placeholder="Addres" />
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </form>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Auth;
