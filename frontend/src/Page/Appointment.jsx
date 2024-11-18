import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtomNav from "../components/ButtomNav";

const Appointment = () => {
  const { Lang } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="registers-page">
      <TopNav type={Lang !== "ar" ? "Appointment" : "المواعيد"} />
      <div className="container">
        <div className="boxs">
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
          <div className="box">
            <div>
              <h4>{Lang !== "ar" ? "Date" : "الموعد"}: </h4>
              <p>18/11/2024 05:00 PM</p>
            </div>
            <div>
              <h4>{Lang !== "ar" ? "Status" : "الحاله"}: </h4>
              <p>{Lang !== "ar" ? "Ok" : "مقبول"}</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
        </div>
        {open && (
          <div className="popp">
            <div className="create">
              <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(!open)} />
              <div>
                <h5>{Lang !== "ar" ? "Enter date: " : ":ادخل التاريخ"}</h5>
                <input type="date" name="" id="" />
              </div>
              <div>
                <h5>{Lang !== "ar" ? "Enter time: " : ":ادخل الوقت"}</h5>
                <input type="time" name="" id="" />
              </div>
              <button>{Lang !== "ar" ? "Create" : "اضافه"}</button>
            </div>
          </div>
        )}
        {!open && (
          <FontAwesomeIcon icon={faPlus} onClick={() => setOpen(!open)} />
        )}
      </div>
      <ButtomNav />
    </div>
  );
};

export default Appointment;
