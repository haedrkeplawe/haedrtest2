import { faEye, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Auth = () => {
  const { Lang } = useContext(MainContext);
  return (
    <div className="auth">
      <div className="welcome">
        {Lang !== "ar" ? (
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
              Lang !== "ar" ? "Enter your full name" : "ادخل اسمك بالكامل"
            }
          />
          <input
            type="text"
            placeholder={Lang !== "ar" ? "Enter your Number" : "ادخل رقمك"}
          />
          <div>
            <input
              type="password"
              placeholder={Lang !== "ar" ? "Enter Password" : "ادخل كلمه السر"}
            />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div>
            <input
              type="password"
              placeholder={
                Lang !== "ar" ? "Confirm password" : "تاكيد كلمه السر"
              }
            />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <input type="text" placeholder={Lang !== "ar" ? "Gander" : "النوع"} />
          <input type="number" placeholder={Lang !== "ar" ? "Age" : "العمر"} />
          <div>
            <input
              type="text"
              placeholder={Lang !== "ar" ? "Addres" : "المكان"}
            />
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </form>
        <button>{Lang !== "ar" ? "Log in" : "انشاء حساب"}</button>
      </div>
    </div>
  );
};

export default Auth;
