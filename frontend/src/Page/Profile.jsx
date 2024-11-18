import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ButtomNav from "../components/ButtomNav";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userWhite from "../image/userWhite.jpg";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Profile = () => {
  const { Lang } = useContext(MainContext);
  return (
    <div className="user-page">
      <TopNav type={null} />
      <div className="my-profile">
        <h3> {Lang !== "ar" ? "My Profile" : "ملفي الشخصي"}</h3>
        <div className="img">
          <img src={userWhite} alt="" />
        </div>
      </div>
      <div className="form">
        <span className="background"></span>
        <form>
          <div className="photo">
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <input
            type="text"
            placeholder={Lang !== "ar" ? "Enter your Number" : "ادخل رقمك"}
          />
          <div>
            <input
              type="password"
              placeholder={Lang !== "ar" ? "Enter Password" : "ادخل كلمه السر"}
            />
            <FontAwesomeIcon icon={faPencil} className="password" />
          </div>
          <button> {Lang !== "ar" ? "Save" : "حفظ"}</button>
        </form>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Profile;
