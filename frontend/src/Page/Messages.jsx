import { useState } from "react";
import TopNav from "../components/TopNav";

const Messages = () => {
  const lang = null;
  const [isNote, setisNote] = useState(true);
  return (
    <div className="messages-page">
      <TopNav type={lang !== "ar" ? "Messages" : "الرسائل"} />
      <div className="head">
        <button
          className={isNote ? "acitve" : ""}
          onClick={() => setisNote(true)}
        >
          notes
        </button>
        <button
          className={!isNote ? "acitve" : ""}
          onClick={() => setisNote(false)}
        >
          registers
        </button>
      </div>
      <div className="container">
        <div className="create">
          <h3>Craete a Message: </h3>
          <span>{isNote ? "NOTE" : "APPOINTMENT"}</span>
        </div>
      </div>
    </div>
  );
};

export default Messages;
