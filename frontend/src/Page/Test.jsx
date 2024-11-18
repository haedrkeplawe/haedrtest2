import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <Link to={"/login"}>login</Link> <br />
      <Link to={"/signin"}>signin</Link> <br />
      <Link to={"/profile"}>profile</Link> <br />
      <Link to={"/home"}>home</Link> <br />
      <Link to={"/notification"}>Notification</Link> <br />
      <Link to={"/about"}>About</Link> <br />
      <Link to={"/registers"}>registers</Link> <br />
      <Link to={"/messages"}>Messages</Link> <br />
    </div>
  );
};

export default Test;
