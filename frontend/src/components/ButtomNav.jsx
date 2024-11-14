import { faBell, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtomNav = () => {
  return (
    <div className="buttom-nav">
      <div>
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="active">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
  );
};

export default ButtomNav;
