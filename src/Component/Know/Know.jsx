import React from "react";
import { Link } from "react-router-dom";
import style from "../Know/Know.module.scss";
export default function Know({ isBtn, iBtn, h3Text, pText,linkBtn }) {
  return (
    <>
      <div
        className={`${style.rc} rtl d-flex flex-row wrap justify-content-center align-items-center col-12 py-5`}
      >
        <div className="col-sm-8 col-10">
          <h3>{h3Text}</h3>
          <p>{pText}</p>
        </div>
        <div className="col-sm-2 col-10">
          {isBtn ? (
           <Link to={`${linkBtn}`} replace>
              <button type="button" className={`${style.btnContect} btn`} >
              <i className="fa-solid fa-angle-left"> {iBtn} </i>
            </button>
           </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
