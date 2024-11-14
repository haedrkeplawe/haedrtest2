import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtomNav from "../components/ButtomNav";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Teeth from "../image/teeth.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <TopNav type={"Home"} />
      <div className="search">
        <form>
          <div>
            <input type="password" placeholder="Confirm password" required />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </form>
      </div>
      <div className="types">
        <span className="background"></span>
        <div>
          <img src={Teeth} alt="" />
          <h4>Appointement</h4>
        </div>
        <div>
          <img src={Teeth} alt="" />
          <h4>Appointement</h4>
        </div>
        <div>
          <img src={Teeth} alt="" />
          <h4>Appointement</h4>
        </div>
        <div>
          <img src={Teeth} alt="" />
          <h4>Appointement</h4>
        </div>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Home;
