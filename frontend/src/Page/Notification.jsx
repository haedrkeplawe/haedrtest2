import TopNav from "../components/TopNav";
import Search from "../components/Search";
import ButtomNav from "../components/ButtomNav";
import userwomen from "../image/userwomen.jpg";
import { faChevronRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = () => {
  return (
    <div className="notification-page">
      <TopNav type={"Notification"} />
      <Search />
      <div className="boxs">
        <div className="box">
          <div className="left">
            <img src={userwomen} alt="" />
          </div>
          <div className="right">
            <h2>Appointment</h2>
            <p>please submit a requset to book an appointment</p>
            <div>
              <div>
                <h2>Justin Westervet</h2>
                <span>9:01am</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <img src={userwomen} alt="" />
          </div>
          <div className="right">
            <h2>Appointment</h2>
            <p>please submit a requset to book an appointment</p>
            <div>
              <div>
                <h2>Justin Westervet</h2>
                <span>9:01am</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <img src={userwomen} alt="" />
          </div>
          <div className="right">
            <h2>Appointment</h2>
            <p>please submit a requset to book an appointment</p>
            <div>
              <div>
                <h2>Justin Westervet</h2>
                <span>9:01am</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Notification;
