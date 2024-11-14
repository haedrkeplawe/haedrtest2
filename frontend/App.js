import { Routes, Route, Link } from "react-router-dom";
import Login from "./Page/Login";
import Signin from "./Page/Signin";
import Profile from "./Page/Profile";
import Home from "./Page/Home";
import Test from "./Page/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
