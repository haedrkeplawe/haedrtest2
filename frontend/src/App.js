import { Routes, Route, Link } from "react-router-dom";
import Login from "./Page/Login";
import Signin from "./Page/Signin";
import Profile from "./Page/Profile";
import Home from "./Page/Home";
import Test from "./Page/Test";
import Notification from "./Page/Notification";
import AboutClinc from "./components/AboutClinc";
import Registers from "./Page/Registers";
import Messages from "./Page/Messages";
import Appointment from "./Page/Appointment";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";

function App() {
  const { Lang } = useContext(MainContext);

  return (
    <div className={Lang !== "ar" ? "App" : "App ar"}>
      <Routes>
        <Route index element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/about" element={<AboutClinc />} />
        <Route path="/registers" element={<Registers />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
