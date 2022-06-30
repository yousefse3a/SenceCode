import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../Sidenav/Sidenav.module.scss";
export default function Mynav() {
  function close(e) {
    if (e.target.getAttribute("id") == "Outer") {
      e.target.classList.toggle("openCloseSideNav");
    }
  }
  return (
    <>
      <div
        onClick={close}
        className={` ${style.fliped} ${style.Outer} w-100 vh-100 row justify-content-end openCloseSideNav`}
        id="Outer"
      >
        <div
          className={`${style.SideBackColor} 
           col-10 py-5 h-100 d-flex row overFlowY `}  id={style.scrollBar}
        >
          <div className={style.fliped}>
            <NavLink to="/"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 side-item `}
            >
              <svg
                width="100px"
                viewBox="0 0 30.71 39.91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path d="m15.04 22.17v-.01z"></path>
                  <path d="m19.39 26.03 2.4 2.13z"></path>
                  <path d="m17.6 24.43-2.56-2.27z"></path>
                  <path d="m26.07 31.96-2.32-2.06v.01l2.32 2.06z"></path>
                </g>
                <path
                  d="m4.21 19.79c-.08.36-.15.71-.23 1.06l-.3 1.37c-.27 1.21-.56 2.4-.89 3.6-.08.28-.17.56-.25.84l-.33 1.1v.07c-.14.46-.28.92-.43 1.37l3.22-1.72c.1-.32.19-.64.29-1 .32-1.16.59-2.29.85-3.44.15-.63.29-1.27.43-1.91.05-.27.11-.54.17-.81s.07-.32.1-.48l-2.49-.7c-.05.24-.1.44-.14.65z"
                  fill="#811a42"
                ></path>
                <path
                  d="m12.46 21.85a3.38 3.38 0 0 0 -.08.34v.15c-.11.46-.22.94-.34 1.43l3-1.61-2.49-.7z"
                  fill="#811a42"
                ></path>
                <path
                  d="m10.15 24.47c.09-.44.18-.87.26-1.3s.18-1 .3-1.53c0-.21.09-.43.14-.65l-2.49-.7c-.07.34-.15.69-.22 1.05s-.18.89-.27 1.35c0 .31-.12.62-.18.92-.19.93-.4 1.85-.64 2.78l3-1.6c.05-.11.08-.22.1-.32z"
                  fill="#811a42"
                ></path>
                <path
                  d="m0 20v.42s0 .38 0 .57a25.06 25.06 0 0 0 .56 4.48c.07-.22.14-.44.2-.66.32-1.07.61-2.16.89-3.25.08-.31.16-.61.23-.92.17-.66.32-1.32.47-2l-2.27-.64c-.08.63-.08 1.3-.08 2z"
                  fill="#811a42"
                ></path>
                <path
                  d="m16.26 13.12.14.08a3.21 3.21 0 0 1 .88.86 2.48 2.48 0 0 1 .19.26c.11.18.22.36.33.57a12 12 0 0 1 1 2.78l2-2.4a11.9 11.9 0 0 0 -.57-1.35c-.07-.15-.15-.3-.23-.45l-.31-.47a6.56 6.56 0 0 0 -1.51-1.69l-.3-.21a4.25 4.25 0 0 0 -.46-.27 4.3 4.3 0 0 0 -1.18-.39l-.24 2.56a1.35 1.35 0 0 1 .26.12z"
                  fill="#009f84"
                ></path>
                <path
                  d="m24.8 4.22a14.11 14.11 0 0 0 -6.24-3.78h-.07a11.61 11.61 0 0 0 -1.2-.26l-.29 2.7a2.46 2.46 0 0 1 .4.12h.14l.2.06a12.75 12.75 0 0 1 5.19 3l.08.07a15.69 15.69 0 0 1 2.61 3.31l1.68-2a19.11 19.11 0 0 0 -2.5-3.22z"
                  fill="#009f84"
                ></path>
                <path
                  d="m17.28 19.48c-.29-2.17-.67-3.21-1.61-3.43l-.67 6.11z"
                  fill="#009f84"
                ></path>
                <path
                  d="m23.86 11.11a13.55 13.55 0 0 0 -2.45-3.27l-.1-.09a9.69 9.69 0 0 0 -4.31-2.34h-.25l-.27 2.57a7 7 0 0 1 2.94 1.61l.15.13.07.06a10.3 10.3 0 0 1 1.84 2.44c.12.21.24.43.36.67l.17.36c.06.12.12.24.17.37l1.82-2.23z"
                  fill="#009f84"
                ></path>
                <path
                  d="m17.51 21.64v-.05l-.06-.6c-.06-.56-.11-1.06-.17-1.51l-2.28 2.68z"
                  fill="#4ab9b2"
                ></path>
                <path
                  d="m30.4 16c-.06-.37-.12-.73-.2-1.09a22.75 22.75 0 0 0 -1.34-4.4 20.56 20.56 0 0 0 -1.56-3l-1.68 2c.14.22.28.46.41.69s.37.72.54 1.09l.06.12a24.16 24.16 0 0 1 1.55 4.48v.11c.09.41.18.82.26 1.23q.2 1 .33 2.07l1.89-.4a24.81 24.81 0 0 0 -.26-2.9z"
                  fill="#4ab9b2"
                ></path>
                <path
                  d="m26.46 19.07c0-.19-.07-.37-.1-.55-.07-.37-.14-.73-.22-1.08 0-.19-.09-.38-.13-.56a23.64 23.64 0 0 0 -1.59-4.65l-.11-.23c-.1-.21-.2-.42-.3-.61l-1.82 2.18a22 22 0 0 1 1.43 4.43c.08.35.15.72.22 1.1 0 .12.05.24.07.37s.05.35.07.53 0 .16 0 .24l2.53-.54z"
                  fill="#4ab9b2"
                ></path>
                <path
                  d="m19.21 20.15c0 .35.08.72.11 1.1l2.56-.54c0-.05 0-.1 0-.16-.05-.55-.11-1.08-.19-1.59a20 20 0 0 0 -.89-3.69l-2 2.4a22.59 22.59 0 0 1 .41 2.48z"
                  fill="#4ab9b2"
                ></path>
                <path
                  d="m12.18 16.29c0-.08.07-.17.11-.25l.1-.24c0-.11.1-.23.16-.34a6.36 6.36 0 0 1 .92-1.46 3.74 3.74 0 0 1 .42-.39 3 3 0 0 1 .72-.43 2.16 2.16 0 0 1 .89-.22 1.33 1.33 0 0 1 .5.04l.26-2.59a4.74 4.74 0 0 0 -.75-.06 5.05 5.05 0 0 0 -.67.06 5.2 5.2 0 0 0 -1.7.61l-.18.11-.19.12a2.71 2.71 0 0 0 -.35.24 5.59 5.59 0 0 0 -1 .92l-.28.36c-.16.22-.31.45-.46.7s-.26.46-.38.71l1.63 2.82c.07-.27.16-.49.25-.71z"
                  fill="#3c5f7a"
                ></path>
                <path
                  d="m15.67 16.05-.28-.05a1.46 1.46 0 0 0 -.64.11 1.6 1.6 0 0 0 -.74.65 5.92 5.92 0 0 0 -.68 1.61c-.06.2-.12.41-.18.64l1.85 3.15z"
                  fill="#3c5f7a"
                ></path>
                <path
                  d="m16.68 5.34a7.75 7.75 0 0 0 -3 0c-.22 0-.44.1-.66.17a7.55 7.55 0 0 0 -1.44.6l-.2.11a10.53 10.53 0 0 0 -1 .65 11.13 11.13 0 0 0 -2.22 2.2c-.15.19-.29.38-.43.58l-.08.12 1.49 2.49.26-.46c.13-.21.25-.41.39-.61l.22-.32c.18-.24.36-.47.55-.69a8.56 8.56 0 0 1 1.5-1.35l.28-.18.37-.22a6.11 6.11 0 0 1 .58-.27 4 4 0 0 1 .44-.16 5 5 0 0 1 1.53-.24 4.53 4.53 0 0 1 .52 0 3.54 3.54 0 0 1 .47.07h.24l.27-2.57z"
                  fill="#3c5f7a"
                ></path>
                <path
                  d="m15.36 0a12.33 12.33 0 0 0 -5.36 1.26 15.6 15.6 0 0 0 -5 4l1.28 2.26.12-.18a12.56 12.56 0 0 1 2.6-2.65 11 11 0 0 1 1.16-.76l.46-.25.11-.06a8.58 8.58 0 0 1 3.27-.91h.61a14.28 14.28 0 0 1 2.22.15h.21l.24-2.7a11.14 11.14 0 0 0 -1.92-.16z"
                  fill="#3c5f7a"
                ></path>
                <path
                  d="m11.32 19c.18-.69.38-1.37.61-2l-1.65-2.8c-.08.15-.15.29-.22.45l-.27.65-.1.24c-.1.26-.19.53-.28.81a36.86 36.86 0 0 0 -1.05 3.94l2.49.7c.15-.65.29-1.34.47-1.99z"
                  fill="#50153f"
                ></path>
                <path
                  d="m4.67 5.63a13.88 13.88 0 0 0 -.83 1.14 21.2 21.2 0 0 0 -2.54 5.16 1.34 1.34 0 0 0 -.07.18l-.23.83c-.19.68-.36 1.37-.49 2.06l-.21 1c0 .17 0 .33-.07.5q-.09.75-.15 1.5l2.3.64c.16-.71.32-1.42.46-2.13.07-.33.14-.65.2-1 .12-.63.26-1.24.43-1.83.07-.27.14-.53.23-.79l.06-.2a19.85 19.85 0 0 1 2-4.46c.13-.2.26-.4.4-.6a.76.76 0 0 1 .08-.11l-1.3-2.23z"
                  fill="#50153f"
                ></path>
                <path
                  d="m5.84 13.34c0 .11-.09.23-.13.35s-.14.4-.2.6c-.13.43-.26.87-.37 1.32-.07.28-.12.55-.19.83l-.61 2.73 2.49.7c.24-1.11.5-2.3.78-3.49a.85.85 0 0 0 0-.17c.1-.4.21-.8.33-1.18 0-.13.09-.26.13-.39s.13-.36.2-.54a15.18 15.18 0 0 1 .82-1.82l-1.45-2.49a16.4 16.4 0 0 0 -1.8 3.55z"
                  fill="#50153f"
                ></path>
                <path
                  d="m12.55 21.46 2.49.7-1.89-3.16c-.15.71-.38 1.54-.6 2.46z"
                  fill="#50153f"
                ></path>
                <path
                  d="m17.6 24.43v-.36c0-.14 0-.29 0-.42 0-.73 0-1.41-.1-2l-2.5.51z"
                  fill="#f9b30a"
                ></path>
                <path
                  d="m26.66 27.46c.11-1.29.16-2.55.15-3.75v-.44a28.19 28.19 0 0 0 -.26-3.55l-2.55.54a29 29 0 0 1 .2 3.76v.76c0 1.23-.13 2.53-.29 3.9 0 .4-.1.81-.16 1.22l2.32 2.1c.27-1.58.46-3.09.59-4.54z"
                  fill="#f9b30a"
                ></path>
                <path
                  d="m29 26.86c-.07 1-.18 2-.31 3a24.19 24.19 0 0 0 1.93-7.73c.06-.72.1-1.45.1-2.19 0-.38 0-.76 0-1.13l-1.89.4c.14 1.12.23 2.24.26 3.37a1.09 1.09 0 0 1 0 .18c0 1.22 0 2.43-.05 3.62z"
                  fill="#f9b30a"
                ></path>
                <path
                  d="m19.4 22.35v.56 1.39s0 .73 0 1.12v.61l2.4 2.13c.1-.88.17-1.71.2-2.48 0-.35 0-.69 0-1v-.38c0-1 0-2-.1-3 0-.21 0-.42-.05-.62l-2.56.54c.06.38.09.78.11 1.13z"
                  fill="#f9b30a"
                ></path>
                <path
                  d="m23.75 29.91c-.08.61-.18 1.23-.29 1.86 0 .14-.05.28-.07.42-.33 1.84-.76 3.76-1.3 5.73a15.79 15.79 0 0 0 3.4-3c.14-.62.26-1.23.38-1.84.07-.37.14-.75.2-1.12z"
                  fill="#e95640"
                ></path>
                <path
                  d="m16.52 33.06.12-.57c0-.13.06-.25.08-.38a1.84 1.84 0 0 0 .05-.25c.13-.69.25-1.36.35-2 .07-.48.13-.95.19-1.42 0-.29.07-.57.1-.85q.07-.82.12-1.59c0-.53.06-1 .07-1.54l-2.6-2.3v1.84 1.53.17c0 .33 0 .67-.07 1v.34c0 .43-.1.88-.15 1.34v.25.24c0 .18-.05.37-.08.56-.17 1.17-.4 2.41-.69 3.68a49 49 0 0 1 -2.01 6.34 11.83 11.83 0 0 0 2.58.46 52.53 52.53 0 0 0 1.94-6.85z"
                  fill="#e95640"
                ></path>
                <path
                  d="m19.34 26.77c-.07.81-.17 1.68-.3 2.59-.05.37-.11.75-.18 1.13 0 .16-.05.32-.08.48-.23 1.3-.53 2.68-.9 4.13v.08l-.06.23c-.38 1.43-.82 2.93-1.35 4.47a12 12 0 0 0 2.91-.63c.07-.21.13-.42.19-.63a64.62 64.62 0 0 0 1.76-7.21c0-.25.09-.5.13-.74l.15-1c.08-.54.15-1 .2-1.56l-2.42-2.11c-.01.27-.03.52-.05.77z"
                  fill="#e95640"
                ></path>
                <path
                  d="m6.54 36.32c.51-1.28 1-2.58 1.42-3.87h.04v-.24c.22-.66.44-1.32.63-2a.49.49 0 0 0 0-.11c.17-.59.34-1.17.5-1.76.11-.4.21-.8.31-1.19.2-.8.39-1.59.56-2.38l-3 1.6c-.08.34-.17.68-.26 1s-.13.48-.2.72c-.2.73-.42 1.45-.64 2.18s-.51 1.73-.82 2.63l-.48 1.31a17.78 17.78 0 0 0 1.94 2.11z"
                  fill="#b22b6a"
                ></path>
                <path d="m15.04 22.16v.01z" fill="#b22b6a"></path>
                <path
                  d="m1.75 29.21a20.74 20.74 0 0 0 1.62 3.23c.43-1.18.83-2.37 1.21-3.59.09-.29.17-.58.26-.86l.16-.41v-.1l-3.25 1.72z"
                  fill="#b22b6a"
                ></path>
                <path
                  d="m11.88 24.28v.15c0 .18-.1.38-.15.58-.15.65-.32 1.32-.49 2-.12.49-.24 1-.37 1.49v.09.06c-.28 1.11-.59 2.24-.94 3.39q-.22.78-.48 1.56c-.2.61-.4 1.22-.62 1.84l-.15.43c-.15.4-.29.8-.45 1.2-.05.14-.11.28-.17.42a14.26 14.26 0 0 0 2.26 1.31c.11-.27.22-.54.32-.81.52-1.35 1-2.67 1.38-4s.83-2.75 1.18-4.07c.11-.41.22-.82.32-1.23.17-.66.34-1.31.49-1.95.05-.19.09-.37.14-.55l.09-.37c.06-.27.13-.55.2-.82l.11-.49.45-2.35-3 1.61z"
                  fill="#b22b6a"
                ></path>
              </svg>
            </NavLink>
            <NavLink to="/Home"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 side-item`}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i className="fa-solid fa-house col-1"></i>
                <h4 className="col-10 d-flex justify-content-end">الرئيسية</h4>
              </a>
            </NavLink>
            <NavLink to="Contactus"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 side-item `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i className="fa-solid fa-phone col-1"></i>
                <h4 className="col-10 d-flex justify-content-end">
                  تواصل معنا
                </h4>
              </a>
            </NavLink>
            <hr className="col-10 bg-light " />
            <div
              className={`${style.title} w-100 d-flex justify-content-end align-items-center`}
            >
              <div className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <p className="col-1">الخدمات</p>
              </div>
            </div>
            <NavLink to="Studio"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 side-item`}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-center justify-content-between">
                <i className="fa-solid fa-microphone col-1"></i>
                <div className="col-10 d-flex flex-column align-items-end">
                  <h4>الاستوديوهات</h4>
                  <p className="">Studios</p>
                </div>
              </a>
            </NavLink>
            <NavLink to="Production"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 side-item `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-center justify-content-between">
                <i className="fa-solid fa-camera col-1"></i>
                <div className="col-10 d-flex flex-column align-items-end">
                  <h4>الإنتاج</h4>
                  <p>Production</p>
                </div>
              </a>
            </NavLink>
            <hr className="col-10 bg-light " />
            <a href="https://twitter.com/senses_sa/" target="_blank"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i
                  className="fa-brands fa-twitter col-1"
                  style={{ color: "rgb(56, 161, 243)" }}
                ></i>
                <h4 className="col-10 d-flex justify-content-end">
                  تابعنا على تويتر
                </h4>
              </a>
            </a>
            <a
            href="https://www.instagram.com/senses_sa/"
            target="_blank"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i
                  className="fa-brands fa-instagram col-1"
                  style={{ color: "rgb(193, 53, 132)" }}
                ></i>
                <h4 className="col-10 d-flex justify-content-end">
                  تابعنا على انستقرام
                </h4>
              </a>
            </a>
            <a
             href="https://www.google.com/maps/place/Senses+Creative+Media/@24.6061945,46.816491,15z/data=!4m5!3m4!1s0x0:0xbb0444727594080b!8m2!3d24.6061945!4d46.816491?shorturl=1"
             target="_blank"
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i
                  className="fa-solid fa-location-dot col-1"
                  style={{ color: "#3182ce" }}
                ></i>
                <h4 className="col-10 d-flex justify-content-end">
                  موقعنا على الخريطة
                </h4>
              </a>
            </a>
            <hr className="col-10 bg-light " />
            <div
              className={`${style.logo} w-100 d-flex justify-content-end align-items-center mb-4 `}
            >
              <a className="d-flex w-100 flex-row-reverse align-items-baseline justify-content-between">
                <i className="fa-brands fa-stripe-s col-1"></i>
                <h4 className="col-10 d-flex justify-content-end">
                  POWERED BY SE3A
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
