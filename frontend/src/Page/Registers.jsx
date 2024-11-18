import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import ButtomNav from "../components/ButtomNav";

const Registers = () => {
  const { Lang } = useContext(MainContext);
  const [isNote, setisNote] = useState(true);
  return (
    <div className="registers-page">
      <TopNav type={Lang !== "ar" ? "Registers" : "السجلات"} />
      <Search />
      <div className="head">
        <button
          className={isNote ? "acitve" : ""}
          onClick={() => setisNote(true)}
        >
          {Lang !== "ar" ? "notes" : "ملاحظات"}
        </button>
        <button
          className={!isNote ? "acitve" : ""}
          onClick={() => setisNote(false)}
        >
          {Lang !== "ar" ? "registers" : "سجلات"}
        </button>
      </div>
      <div className="container">
        {!isNote && (
          <div className="boxs">
            <div className="box">
              <div>
                <h4>{Lang !== "ar" ? "notes" : "ملاحظة"}: </h4>
                <p>{Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <div>
                <h4>{Lang !== "ar" ? "Payment" : "مريض"}: </h4>
                <p>{Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <div>
                <h4>{Lang !== "ar" ? "Date" : "تاريخ"}: </h4>
                <p>{Lang !== "ar" ? "any thing" : "اي شي"}</p>
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
                <h4> {Lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {Lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {Lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {Lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
            <div className="box">
              <div>
                <h4> {Lang !== "ar" ? "notes" : "ملاحظات"}: </h4>
                <p> {Lang !== "ar" ? "any thing" : "اي شي"}</p>
              </div>
              <span>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        )}
      </div>
      <ButtomNav />
    </div>
  );
};

export default Registers;
