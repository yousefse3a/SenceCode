import React, { useEffect } from "react";
import style from "../Landing/Landing.module.scss";

export default function Landing({ imgbackLand, h2Text, pText }) {
  function goDown() {
    let divOffset = document.getElementById("next").offsetHeight;
    console.log(divOffset);
    window.scrollTo(0, divOffset);
  }
  useEffect(() => {
    document.getElementById(
      "Landing"
    ).style.backgroundImage = `url('${imgbackLand}')`;
  }, []);

  return (
    <>
      <div
        className={`${style.ProductionLanding} vh-100 w-100 position-relative`}
        id="Landing"
      >
        <div className=" rtl container h-50 position-absolute bottom-0 start-50 translate-middle-x w-100 d-flex row  justify-content-between align-items-center  wrap">
          <div className="col-8">
            <h2>{h2Text}</h2>
            <p>{pText}</p>
          </div>
          <div className="col-sm-2  col-12 d-flex justify-content-center">
            <i
              className={`${style.goDown} fas fa-chevron-down`}
              id="goDown"
              onClick={goDown}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
