import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <Link to={"/login"}>login</Link> <br />
      <Link to={"/signin"}>signin</Link> <br />
      <Link to={"/profile"}>profile</Link> <br />
      <Link to={"/home"}>home</Link> <br />
    </div>
  );
};

export default Test;
