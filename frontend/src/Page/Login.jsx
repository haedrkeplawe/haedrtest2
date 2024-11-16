import { faEye, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Auth = () => {
  const lang = "ar";
  return (
    <div className="auth">
      <div className="welcome">
        {lang !== "ar" ? (
          <h2>
            welcome To My Clinic ! <br />
            Log in
          </h2>
        ) : (
          <h2>
            ! مرحبا بك في عيادتي <br />
            انشاء حساب
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
          <div>
            <input
              type="password"
              placeholder={
                lang !== "ar" ? "Confirm password" : "تاكيد كلمه السر"
              }
            />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <input type="text" placeholder={lang !== "ar" ? "Gander" : "النوع"} />
          <input type="number" placeholder={lang !== "ar" ? "Age" : "العمر"} />
          <div>
            <input
              type="text"
              placeholder={lang !== "ar" ? "Addres" : "المكان"}
            />
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </form>
        <button>{lang !== "ar" ? "Log in" : "انشاء حساب"}</button>
      </div>
    </div>
  );
};

export default Auth;
