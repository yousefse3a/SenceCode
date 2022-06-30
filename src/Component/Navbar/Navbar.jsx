import React, { useState, useEffect } from "react";
import { useLocation,Link, NavLink } from "react-router-dom";
import style from "../Navbar/Navbar.module.scss";
export default function () {
  function open() {
    document.getElementById("Outer").classList.toggle("openCloseSideNav");
  }
  const location = useLocation();
  console.log(location.pathname);
  const getNavLinkClass = path => {
    return location.pathname === path
    ? " active"
    : "";
     };

  return (
    <>
      <div
        className={`${style.navbar} container top-0 start-50 translate-middle-x`}
        id="navbar"
      >
        <nav className="navbar navbar-expand-lg navbar-dark  p-0">
          <div className="container-fluid align-items-stretch">
            <Link className={`${style.navbarBrand} navbar-brand`} to="/">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.71 39.91"
                width="38"
                height="50"
              >
                <path
                  d="M3.37,32.45c-.16-.27-.31-.5-.43-.74-.38-.78-.76-1.56-1.13-2.35a.41.41,0,0,1,0-.29A87.69,87.69,0,0,0,4.22,19.8c.36-1.71.73-3.42,1.18-5.1A15.72,15.72,0,0,1,8.09,9.17a9.9,9.9,0,0,1,4.3-3.4,7.75,7.75,0,0,1,6.44.3,10.9,10.9,0,0,1,4.53,4.19,21.89,21.89,0,0,1,2.49,6,29,29,0,0,1,1,7.41,48.17,48.17,0,0,1-.7,8c-.17,1-.38,2-.58,3a.72.72,0,0,1-.18.36,15.66,15.66,0,0,1-3.06,2.68l-.21.13c.08-.31.15-.59.23-.86a65.12,65.12,0,0,0,1.38-6.75,46.9,46.9,0,0,0,.5-5.55,26.29,26.29,0,0,0-.29-5.24,21.6,21.6,0,0,0-2.64-7.71,8.86,8.86,0,0,0-2.85-3,5.91,5.91,0,0,0-3.06-1A5.14,5.14,0,0,0,13,8.33a8.31,8.31,0,0,0-3.27,3,15.07,15.07,0,0,0-2.08,5C7,19,6.48,21.6,5.88,24.2a71.64,71.64,0,0,1-2.46,8.12Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M6.55,36.32a18.76,18.76,0,0,1-1.79-1.9A.39.39,0,0,1,4.69,34a69.78,69.78,0,0,0,3-10.33c.35-1.7.69-3.41,1.09-5.1a19.52,19.52,0,0,1,1.56-4.46,7.21,7.21,0,0,1,2-2.51,5.39,5.39,0,0,1,3.07-1.19,4.36,4.36,0,0,1,3.1,1.17,8,8,0,0,1,2,2.9,17.86,17.86,0,0,1,1.19,4.32A35.46,35.46,0,0,1,22,25.27a36.51,36.51,0,0,1-.36,4,62.85,62.85,0,0,1-2.24,9.77.36.36,0,0,1-.16.2,11.15,11.15,0,0,1-2.68.58h-.12l.39-1.18A61.17,61.17,0,0,0,18.77,31a39.67,39.67,0,0,0,.65-5.85A31.26,31.26,0,0,0,19,18.7a12.19,12.19,0,0,0-1.33-4,5.92,5.92,0,0,0-.79-1.07,1.79,1.79,0,0,0-2.37-.37A3.68,3.68,0,0,0,13,14.59a13.42,13.42,0,0,0-1.33,3.09,45.33,45.33,0,0,0-1.22,5.15,66.8,66.8,0,0,1-2.39,9.25c-.47,1.36-1,2.71-1.47,4.06Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M.56,25.4c-.11-.66-.23-1.31-.32-2A25.53,25.53,0,0,1,0,19.73,25.14,25.14,0,0,1,.85,13.5,21,21,0,0,1,4.51,5.86,15.24,15.24,0,0,1,10,1.29,12.07,12.07,0,0,1,15.83,0a12.45,12.45,0,0,1,6.23,2,16.64,16.64,0,0,1,5.11,5.22,22.17,22.17,0,0,1,3,7.71,25.31,25.31,0,0,1-1.43,14.7.47.47,0,0,1-.1.16l.12-1a43.66,43.66,0,0,0,.27-5.6A37.28,37.28,0,0,0,28.75,19a24.84,24.84,0,0,0-3-9.22,15.11,15.11,0,0,0-4-4.63,11.53,11.53,0,0,0-4.64-2.18,9.51,9.51,0,0,0-6.54.77A12,12,0,0,0,6.33,7.48a19.36,19.36,0,0,0-3,6.76C3,15.59,2.76,17,2.46,18.32c-.52,2.34-1.11,4.66-1.81,7,0,.05,0,.09,0,.13Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M12,39.44a46.54,46.54,0,0,0,3-17l-.12.47c-.82,3.48-1.64,7-2.68,10.38-.55,1.79-1.15,3.56-1.85,5.3l-.1.25c-.17-.09-.35-.16-.5-.25l-1.63-1C8,37.52,8,37.46,8,37.34a70.13,70.13,0,0,0,2.79-8.83c.74-2.91,1.42-5.83,2.14-8.74.2-.82.47-1.62.74-2.43a2.25,2.25,0,0,1,.58-.91,1.44,1.44,0,0,1,2.24.23,3.85,3.85,0,0,1,.54,1.53c.16,1.06.32,2.11.42,3.18A24.81,24.81,0,0,1,17.6,24a35.87,35.87,0,0,1-.38,5.17,54.65,54.65,0,0,1-2.55,10.55.27.27,0,0,1-.33.22A12,12,0,0,1,12,39.44Z"
                  fill="#FFFFFF"
                />
              </svg>
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 106.98 20.08"
                xmlns="http://www.w3.org/2000/svg"
                width="133"
                height="25"
              >
                <path
                  d="m44.9 2.74a7.3 7.3 0 0 0 -7.31 7.26v7.37h2.27v-7.37a5 5 0 0 1 10.08 0v7.33h2.26v-7.33a7.3 7.3 0 0 0 -7.3-7.26z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="m17.75 8.91h-12.13a5 5 0 0 1 9-1.83h2.61a7.31 7.31 0 0 0 -13.92 1.83 8.47 8.47 0 0 0 -.08 1.09v.35c0 .27 0 .53.08.78h12.13a5 5 0 0 1 -9 1.83h-2.59a7.31 7.31 0 0 0 13.9-1.83 8.23 8.23 0 0 0 .08-1.13v-.31c-.02-.26-.04-.53-.08-.78z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="m27.71 2.74a7.32 7.32 0 0 0 -6.84 4.73 6.92 6.92 0 0 0 -.37 1.44 6.65 6.65 0 0 0 -.08.78v.35a6.9 6.9 0 0 0 .09 1.13 7.3 7.3 0 0 0 13.88 1.83h-2.61a5 5 0 0 1 -9-1.83h12.15a6.43 6.43 0 0 0 .08-.78c0-.12 0-.23 0-.35a7.08 7.08 0 0 0 -.09-1.13 7.3 7.3 0 0 0 -7.21-6.17zm.12 6.17h-5a4.62 4.62 0 0 1 .33-1 5 5 0 0 1 9.48 1z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="m69.3 8.91h-12.12a5 5 0 0 1 9-1.83h2.61a7.3 7.3 0 0 0 -13.92 1.83 7.08 7.08 0 0 0 -.09 1.09v.35a6.43 6.43 0 0 0 .08.78h12.14a5 5 0 0 1 -9 1.87h-2.6a7.3 7.3 0 0 0 13.9-1.83 6.9 6.9 0 0 0 .09-1.17c0-.12 0-.23 0-.35a6.65 6.65 0 0 0 -.09-.74z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="m103.75 9.69c0-.26 0-.53-.08-.78h-12.13a5 5 0 0 1 9-1.83h2.61a7.31 7.31 0 0 0 -13.9 1.83 8.47 8.47 0 0 0 -.1 1.09v.35c0 .27 0 .53.08.78h12.13a5 5 0 0 1 -9 1.83h-2.59a7.31 7.31 0 0 0 13.9-1.83 6.9 6.9 0 0 0 .09-1.13c0-.08-.01-.19-.01-.31z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="m79.27 2.74a7.3 7.3 0 0 0 -6.84 4.73 6.94 6.94 0 0 0 -.38 1.44 6.65 6.65 0 0 0 -.08.78v.35a6.9 6.9 0 0 0 .09 1.13 7.3 7.3 0 0 0 13.88 1.83h-2.6a5 5 0 0 1 -9-1.83h12.14a6.43 6.43 0 0 0 .08-.78c0-.12 0-.23 0-.35a7.08 7.08 0 0 0 -.09-1.13 7.29 7.29 0 0 0 -7.2-6.17zm.11 6.17h-5a5.28 5.28 0 0 1 .33-1 5 5 0 0 1 9.48 1z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </Link>
            <div className="d-flex align-items-center">
              <button
                onClick={open}
                className={` navbar-toggler ${style.navbarToggler} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-sliders"></i>
              </button>
            </div>
            <div className="collapse navbar-collapse align-items-stretch">
              <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                <NavLink to="Production"
                  className={`${style.navItem} ${getNavLinkClass('/Production')} nav-item  d-flex align-items-center`}
                >
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="Production"
                  >
                    الإنتاج
                  </NavLink>
                </NavLink>
                <NavLink to="Studio"
                  className={`${style.navItem} ${getNavLinkClass('/Studio')} nav-item  d-flex align-items-center`}
                >
                  <Link className="nav-link" to="Studio">
                    الاستوديوهات
                  </Link>
                </NavLink>
                <NavLink to="Contactus"
                  className={`${style.navItem} ${getNavLinkClass('/Contactus')} nav-item  d-flex align-items-center`}
                >
                  <Link className="nav-link" to="Contactus">
                    <i className="fa-solid fa-phone"></i>
                  </Link>
                </NavLink>
                <NavLink to="Home"
                  className={`${style.navItem} ${getNavLinkClass('/Home')} ${getNavLinkClass('/')} nav-item  d-flex align-items-center`}
                >
                  <Link className="nav-link" to="Home">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
