import {
  faArrowLeft,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNav = ({ type }) => {
  return (
    <div className="top-nav">
      <div>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <h2>{type}</h2>
      <div>
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </div>
  );
};

export default TopNav;
