import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Registers = () => {
  const lang = "ar";
  const [isNote, setisNote] = useState(true);
  return (
    <div className="registers-page">
      <TopNav type={lang !== "ar" ? "Registers" : "السجلات"} />
      <Search />
      <div className="head">
        <button
          className={isNote ? "acitve" : ""}
          onClick={() => setisNote(true)}
        >
          {lang !== "ar" ? "notes" : "ملاحظات"}
        </button>
        <button
          className={!isNote ? "acitve" : ""}
          onClick={() => setisNote(false)}
        >
          {lang !== "ar" ? "registers" : "سجلات"}
        </button>
      </div>
      <div className="container">
        {!isNote && (
          <div className="boxs">
            <div className="box">
              <div>
                <h4>{lang !== "ar" ? "notes" : "ملاحظة"}: </h4>
                <p>{lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <div>
                <h4>{lang !== "ar" ? "Payment" : "مريض"}: </h4>
                <p>{lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <div>
                <h4>{lang !== "ar" ? "Date" : "تاريخ"}: </h4>
                <p>{lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        )}
        {isNote && (
          <div className="boxs">
            <div className="box">
              <div>
                <h4> {lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registers;
