import {
  faArrowLeft,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TopNav = ({ type }) => {
  return (
    <div className="top-nav">
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
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </div>
  );
};

export default TopNav;
