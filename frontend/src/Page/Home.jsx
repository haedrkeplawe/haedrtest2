import ButtomNav from "../components/ButtomNav";
import TopNav from "../components/TopNav";
import Teeth from "../image/teeth.jpg";
import Tools from "../image/tools.jpg";
import Userwomen from "../image/userwomen.jpg";
import Search from "../components/Search";

const Home = () => {
  const lang = "ar";
  return (
    <div className="home-page">
      <TopNav type={lang !== "ar" ? "Home" : "الرئيسية"} />
      <Search />
      <div className="container">
        <div className="types">
          <span className="background"></span>
          <div>
            <img src={Teeth} alt="" />
            <h5>{lang !== "ar" ? "Registers" : "سجلاتي"}</h5>
          </div>
          <div>
            <img src={Teeth} alt="" />
            <h5>{lang !== "ar" ? "Appointement" : "مواعيدي"}</h5>
          </div>
          <div>
            <img src={Tools} alt="" />
            <h5> {lang !== "ar" ? "Material" : "مواد"}</h5>
          </div>
          <div>
            <img src={Userwomen} alt="" />
            <h5>{lang !== "ar" ? "Employees" : "موظفيين"}</h5>
          </div>
        </div>
      </div>
      <ButtomNav />
    </div>
  );
};

export default Home;
