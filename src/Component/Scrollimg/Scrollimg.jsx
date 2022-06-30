import React, { useEffect } from "react";
import style from "../Scrollimg/Scrollimg.module.scss";
export default function Scrollimg({ filmLogo, filmback1, filmback2 }) {
  window.onscroll = function () {
    let filmHeight = document.getElementById("film").offsetHeight;
    console.log(filmHeight);
    if (filmHeight + 550 > window.scrollY) {
      document.getElementById(
        "fixedImge"
      ).style.backgroundImage = `url('${filmback1}')`;
    } else {
      document.getElementById(
        "fixedImge"
      ).style.backgroundImage = `url('${filmback2}')`;
    }
    if (window.innerWidth < 992) {
      if (window.scrollY > 150) {
        document.getElementById("navbar").classList.add("navBackground");
      } else {
        document.getElementById("navbar").classList.remove("navBackground");
      }
    } else {
      document.getElementById("navbar").classList.remove("navBackground");
    }
  };
  return (
    <>
      <div className={`${style.film} `} id="film">
        <div className="container">
          <img
            src={filmLogo}
            className={` position-absolute bottom-0 end-0 `}
          />
        </div>
      </div>
      <div className={`${style.fixedImge} `} id="fixedImge"></div>
    </>
  );
}
