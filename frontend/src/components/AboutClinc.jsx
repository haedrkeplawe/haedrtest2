import ButtomNav from "./ButtomNav";
import TopNav from "./TopNav";
import {
  faClock,
  faHeart,
  faLocationDot,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutClinc = () => {
  const lang = "ar";
  return (
    <div className="about-page">
      <TopNav />
      <div className="head">
        <h2>{lang !== "ar" ? "ABOUT CLINIC !" : "! حول العيادة"}</h2>
      </div>
      <div className="container">
        <div className="background"></div>
        <div className="box">
          <div className="info">
            <div className="img"></div>
            <div className="right">
              <div className="top">
                <FontAwesomeIcon icon={faStar} />
                <div>
                  <h4>7 {lang !== "ar" ? "Years" : "سنوات"}</h4>
                  <p> {lang !== "ar" ? "Experience" : "خبرة"}</p>
                </div>
              </div>
              <div className="buttom">
                <p>
                  <span>{lang !== "ar" ? "focus" : "انتبه"}:</span>{" "}
                  {lang !== "ar"
                    ? "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem deserunt natus cupiditate Blanditiis fugiat asper impedit?"
                    : "هنا يمكنك اضافه امر عن عيادتك مكان ساعات الخ "}
                </p>
              </div>
            </div>
          </div>
          <div className="name">
            <h2>Dr.Fady Foad Housain</h2>
          </div>
          <div className="time">
            <div>
              <FontAwesomeIcon icon={faClock} />
              <p>Sat-Th/12:00AM-7:00PM</p>
            </div>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        </div>
        <div className="social">
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <span></span>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span></span>
          </div>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span></span>
          </div>
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>
            {lang !== "ar"
              ? "Hamadania - Tshtin Project / Build 237"
              : "حمدانيه - مشروع تشتن / بناء 237"}
          </p>
        </div>
      </div>
      <ButtomNav />
    </div>
  );
};

export default AboutClinc;
