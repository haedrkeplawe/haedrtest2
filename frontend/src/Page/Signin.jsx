import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
  const lang = "ar";
  return (
    <div className="auth">
      <div className="welcome">
        {lang !== "ar" ? (
          <h2>
            welcome To My Clinic ! <br />
            Sign in
          </h2>
        ) : (
          <h2>
            ! مرحبا بك في عيادتي <br />
            سجل دخول
          </h2>
        )}
      </div>
      <div className="form">
        <span className="background"></span>
        <form>
          <input
            type="text"
            placeholder={
              lang !== "ar" ? "Enter your full name" : "ادخل اسمك بالكامل"
            }
          />
          <input
            type="text"
            placeholder={lang !== "ar" ? "Enter your Number" : "ادخل رقمك"}
          />
          <div>
            <input
              type="password"
              placeholder={lang !== "ar" ? "Enter Password" : "ادخل كلمه السر"}
            />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <Link to="#">
            {" "}
            {lang !== "ar" ? "Forget Password" : "نسيت كلمه السر"}
          </Link>
        </form>
        <button>{lang !== "ar" ? "Sign in" : "تسجيل دخول"}</button>
      </div>
    </div>
  );
};

export default Auth;
