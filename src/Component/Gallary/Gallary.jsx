import React from "react";
import style from "../Gallary/Gallary.module.scss";
export default function Gallary({ images }) {
  var GlobalPath;
  function showGallary(path) {
    GlobalPath = path;
    document.getElementById("gallaryLayer").classList.add("d-block");
    document.getElementById(
      "gallaryImg"
    ).style.backgroundImage = `url('${path}')`;
  }
  function slider(i) {
    let current_index = images.indexOf(GlobalPath);
    current_index = current_index + i;
    if (current_index == images.length) {
      current_index = 0;
    }
    if (current_index < 0) {
      current_index = images.length - 1;
    }
    var path = images[current_index];
    document.getElementById(
      "gallaryImg"
    ).style.backgroundImage = `url('${path}')`;
    GlobalPath = path;
  }
  function close(e) {
    if (e.target.getAttribute("id") == "gallaryLayer") {
      end();
    }
  }
  function end() {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      document.exitFullscreen();
    }

    document.getElementById("gallaryLayer").classList.remove("d-block");
    document.getElementById("gallaryImg").classList.remove("w-100");
    document.getElementById("gallaryImg").classList.remove("h-100");
    document.getElementById("expand").classList.remove("fa-compress");
    document.getElementById("expand").classList.add("fa-expand");
    document
      .getElementById("magnifying")
      .classList.add("fa-magnifying-glass-plus");
    document
      .getElementById("magnifying")
      .classList.remove("fa-magnifying-glass-minus");
  }
  function fullOutScreen() {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      document.exitFullscreen();
    } else {
      document.getElementById("gallaryLayer").requestFullscreen();
    }
    document.getElementById("expand").classList.toggle("fa-compress");
    document.getElementById("expand").classList.toggle("fa-expand");
  }
  function zoomInOut(e) {
    document
      .getElementById("magnifying")
      .classList.toggle("fa-magnifying-glass-plus");
    document
      .getElementById("magnifying")
      .classList.toggle("fa-magnifying-glass-minus");
    document.getElementById("gallaryImg").classList.toggle("w-100");
    document.getElementById("gallaryImg").classList.toggle("h-100");
    document.getElementById("gallaryImg").classList.toggle("zoomOut");
    console.log(e.target);
  }
  document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowLeft") {
      slider(-1);
    } else if (e.code == "ArrowRight") {
      slider(1);
    } else if (e.code == "Escape") {
      end();
    }
  });
  return (
    <>
      <div className={`${style.gallary} `} id="next">
        
        <div className={`${style.gallaryLoc}`}>
          {images.map((ele, index) => {
            if (index) {
              return (
                <div
                  className="col-sm-2 col-2 p-1 position-relative"
                  key={index}
                >
                  <img
                    src={ele}
                    key={index}
                    width="100%"
                    className="rounded-3"
                  />
                  <i
                    className="fa-solid fa-up-right-and-down-left-from-center"
                    id="wideGallary"
                    onClick={() => {
                      showGallary(ele);
                    }}
                  ></i>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        className={`${style.gallaryLayer}`}
        id="gallaryLayer"
        onClick={close}
      >
        <ul className={` position-fixed top-0 end-0   `}>
          <li>
            <i className={`fa-solid fa-xmark`} onClick={end}></i>
          </li>
          <li>
            <i
              className={`fa-solid fa-expand`}
              id="expand"
              onClick={fullOutScreen}
            ></i>
          </li>
          <li>
            <i
              className={`fa-solid fa-magnifying-glass-plus`}
              id="magnifying"
              onClick={zoomInOut}
            ></i>
          </li>
        </ul>
        <i
          className={`fa-solid fa-arrow-left-long position-fixed top-50 start-0`}
          onClick={() => {
            slider(-1);
          }}
        ></i>
        <i
          className={`fa-solid fa-arrow-right-long position-fixed top-50 end-0`}
          onClick={() => {
            slider(1);
          }}
        ></i>
        <div
          className={`${style.gallaryImg} position-absolute top-50 start-50 translate-middle`}
          id="gallaryImg"
          onClick={zoomInOut}
        ></div>
      </div>
    </>
  );
}
