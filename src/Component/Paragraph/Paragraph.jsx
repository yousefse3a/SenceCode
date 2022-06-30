import React, { useEffect } from "react";
import style from "../Paragraph/Paragraph.module.scss";
import logo from "../Production/svgexport-4.svg";
export default function Paragraph({ h2Text, p1Text, p2Text, imgPath }) {
  useEffect(() => {
    document.getElementById("logo").style.backgroundImage = `url('${imgPath}')`;
  }, []);
  return (
    <>
      <div className={`${style.proSene} rtl d-flex flex-row  col-12`}>
        <div
          className={`${style.proSenePara} col-sm-7 col-12 h-100 d-flex flex-column justify-content-center align-items-start`}
        >
          <h2>{h2Text}</h2>
          <p>{p1Text}</p>
          <p>{p2Text}</p>
        </div>
        <div
          className={`${style.proSeneBack} col-sm-5 col-0 h-100 d-flex justify-content-center`}
          id="logo"
        >
          <img src={logo} width="100%" />
        </div>
      </div>
    </>
  );
}
