import {
  faArrowLeft,
  faEllipsisVertical,
  faGlobe,
  faInfo,
  faPlus,
  faRightFromBracket,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import { useContext, useState } from "react";

const TopNav = ({ type }) => {
  const { Lang, setLang } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="top-nav">
      <div className={isOpen ? "background isOpen" : "background close"}></div>
      <div>
        <Link to={"/home"}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <h2>{type}</h2>
      <div>
        <Link to={"/messages"}>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div className={isOpen ? "dots isOpen" : "dots close"}>
        <div className="close">
          <FontAwesomeIcon
            icon={faX}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div className="info">
          <div className="img"></div>
          <h2>Mostafa Qwider</h2>
        </div>
        <div className="lest">
          <Link to={"/about"}>
            <p>{Lang !== "ar" ? "about Clinec" : "حول العيادة"}</p>
            <FontAwesomeIcon icon={faInfo} />
          </Link>
          <div onClick={() => setLang(Lang !== "ar" ? "ar" : "en")}>
            <p>{Lang !== "ar" ? "Lang" : "اللغة"}</p>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div>
            <p>{Lang !== "ar" ? "Logout" : "تسجيل الخروج"}</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
