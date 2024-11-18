import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import ButtomNav from "../components/ButtomNav";

const Messages = () => {
  const { Lang } = useContext(MainContext);
  // const [isNote, setisNote] = useState(true);
  return (
    <div className="messages-page">
      <TopNav type={Lang !== "ar" ? "Messages" : "الرسائل"} />
      <div className="head">
        {/* <button className={""}>notes</button> */}
        {/* <button
          className={!isNote ? "acitve" : ""}
          onClick={() => setisNote(false)}
        >
          registers
        </button> */}
      </div>
      <div className="container">
        <div className="create">
          <h3>Craete a Message: </h3>
          <span>NOTE</span>
        </div>
        <form>
          <>
            {/* <div className="select">
              <h3>Select Image (optinal): </h3>
              <input type="file" id="img" />
              <label htmlFor="img">
                <img src={example} alt="" />
              </label>
            </div> */}
          </>
          <div>
            <input
              type="password"
              placeholder={Lang !== "ar" ? "Enter messages..." : "ادخل الرسالة"}
            />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </form>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Messages;
