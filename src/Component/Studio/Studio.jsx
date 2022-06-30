import React from "react";
import style from "../Studio/Studio.module.scss";
import filmLogo from "./svgexport-6.svg";
import imgBackLogo from "../Studio/img/images_gallery-56@1600.webp";
import imgbackLand from "../Studio/images_gallery-55@2400.webp";
import filmback1 from "../Studio/img/images_gallery-15@2400.jfif";
import filmback2 from "../Studio/img/images_gallery-14@2400.jfif";
import whiteStudio from "../Studio/img/images_gallery-3@2400.jfif";
import cromaStudio from "../Studio/img/images_gallery-58@800.jfif";
import siktomStudio from "../Studio/images_gallery-11@2400.jfif";
import Gallary from "../Gallary/Gallary";
import Scrollimg from "../Scrollimg/Scrollimg";
import Paragraph from "../Paragraph/Paragraph";
import Landing from "../Landing/Landing";
import Know from "../Know/Know";

export default function Studio() {
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../Studio/img", false, /\.(png|jpe?g|svg|webp|jfif)$/)
  );
  return (
    <>
      <Landing
        imgbackLand={imgbackLand}
        h2Text={"الاستوديوهات"}
        pText={
          "استديوهات سينسز تقع في مساحة 1300م²، تتوفر فيها الإضاءات وتقنيات التصوير وغرفة الملابس والمكياج والكنترول ومنطقة الاستراحة."
        }
      ></Landing>
      <Paragraph
        h2Text={"استوديوهات سينسز"}
        p1Text={
          "نمتلك استديوهات فائقة الجودة، تقع في مساحة 1300 متر مربع، تتوفر فيها الإضاءات وكافة تقنيات التصوير، إضافة إلى غرفة الملابس وغرفة المكياج وغرفة الكنترول ومنطقة الاستراحة وغرفة الاجتماعات والمكاتب."
        }
        p2Text={
          "اختيارك لاستديوهات سينسز يعكس اهتمامك بالاحترافية والجودة التي تسهم في نجاحاتك."
        }
        imgPath={imgBackLogo}
      ></Paragraph>
      <Scrollimg
        filmLogo={filmLogo}
        filmback2={filmback2}
        filmback1={filmback1}
      ></Scrollimg>
       <Know
        isBtn={false}
        h3Text={"اختيارك لاستديوهات سينسز "}
        pText={`يعكس اهتمامك بالاحترافية والجودة التي تسهم في نجاحاتك.
      `}
      ></Know>
      <Gallary images={images}></Gallary>
      <Know
        isBtn={false}
        h3Text={"اصنع الاستوديو"}
        pText={`الخاص بمشروعك على مساحة 1300 متر مربع.`}
      ></Know>
      <div className={`${style.studios} `}>
        <div className="container  h-100">
          <div
            className={`${style.studioTypes} rtl d-flex flex-row justify-content-center align-items-center`}
          >
            <h3 className="col-11">انواع الاستديوهات</h3>
            <div className="col-sm-3 col-10">
              <div className=" w-100 position-relative " datatype="cardImg">
                <img src={whiteStudio} width="100%" />
                <h4 className="position-absolute bottom-0 start-50 translate-middle-x col-10 ">
                  استوديو ابيض
                </h4>
              </div>
              <div
                className="cardInfo d-flex flex-row col-10"
                datatype="cardInfo"
              >
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-expand">عرض 24م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-dumbbell">ارتفاع 7.20م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-angles-down">عمق 11م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-brands fa-angellist">زوايتينن</i>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-10">
              <div className=" w-100 position-relative " datatype="cardImg">
                <img src={cromaStudio} width="100%" />
                <h4 className="position-absolute bottom-0 start-50 translate-middle-x col-10 ">
                  استوديو كروما
                </h4>
              </div>
              <div
                className="cardInfo d-flex flex-row col-10"
                datatype="cardInfo"
              >
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-expand">عرض 24م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-dumbbell">ارتفاع 7.20م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-angles-down">عمق 11م</i>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-10">
              <div className=" w-100 position-relative " datatype="cardImg">
                <img src={siktomStudio} width="100%" />
                <h4 className="position-absolute bottom-0 start-50 translate-middle-x col-10 ">
                  استوديو سيتكوم
                </h4>
              </div>
              <div
                className="cardInfo d-flex flex-row col-10"
                datatype="cardInfo"
              >
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-expand">عرض 24م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-dumbbell">ارتفاع 7.20م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-solid fa-angles-down">عمق 11م</i>
                </div>
                <div className={`${style.divIcon}`}>
                  <i className="fa-brands fa-angellist">زوايتينن</i>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${style.studioFollower} rtl d-flex flex-row justify-content-center align-items-center`}
          >
            <h3 className="col-11">مرافق الاستديوهات</h3>
            <div className="col-11  row justify-content-center align-items-center gy-3 my-3">
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-socks position-relative"></i>
                <p className="m-0 px-4">غرفة الملابس</p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-face-grin-wink position-relative"></i>
                <p className="m-0 px-4">غرفة الميكاج</p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-restroom position-relative"></i>
                <p className="m-0 px-4"> دورات مياه</p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-couch position-relative"></i>
                <p className="m-0 px-4">استراحة </p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-bolt position-relative"></i>
                <p className="m-0 px-4">كهرباء تحمل عالي </p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-fan position-relative"></i>
                <p className="m-0 px-4">تكيف مركزي </p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-star position-relative"></i>
                <p className="m-0 px-4"> VIP استراحة </p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-chair position-relative"></i>
                <p className="m-0 px-4">مكتب </p>
              </div>
              <div className="col-sm-4 col-12 d-flex flex-row align-items-center ">
                <i className="fa-solid fa-people-group position-relative"></i>
                <p className="m-0 px-4">غرفة الاجتماعات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
