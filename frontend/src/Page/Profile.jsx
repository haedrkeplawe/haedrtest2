import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ButtomNav from "../components/ButtomNav";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userWhite from "../image/userWhite.jpg";

const Profile = () => {
  return (
    <div className="user-page">
      <TopNav type={null} />
      <div className="my-profile">
        <h3>My Profile</h3>
        <div className="img">
          <img src={userWhite} alt="" />
        </div>
      </div>
      <div className="form">
        <span className="background"></span>
        <form>
          <input type="text" placeholder="Enter your Number" />
          <div>
            <input type="password" placeholder="Enter Password" />
            <FontAwesomeIcon icon={faPencil} className="password" />
          </div>
          <div className="photo">
            <img src={userWhite} alt="" />
            <h3>My photo</h3>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </form>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Profile;
