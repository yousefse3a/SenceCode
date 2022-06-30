import React from "react";
import style from "../Home/Home.module.scss";
import filmLogo from "./svgexport-6.svg";
import Logo from "../Home/logo.svg";
import LogoWord from "../Home/logoWrite.svg";
import filmback2 from "../Home/img/images_gallery-53@800.jfif";
import filmback1 from "../Home/img/images_gallery-55@800.webp";
import Gallary from "../Gallary/Gallary";
import Scrollimg from "../Scrollimg/Scrollimg";
import Know from "../Know/Know";
export default function Home() {
  function goDown() {
    let divOffset = document.getElementById("next").offsetHeight;
    console.log(divOffset);
    window.scrollTo(0, divOffset);
  }
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../Home/img", false, /\.(png|jpe?g|svg|webp|jfif)$/)
  );
  return (
    <>
      <div
        className={`${style.ProductionLanding} vh-100 w-100 position-relative`}
      >
        <div
          className={`container w-100 position-absolute bottom-0 start-50 translate-middle-x  d-flex flex-row align-items-center justify-content-center wrap`}
        >
          <div className="col-9 d-flex flex-row wrap justify-content-start align-items-center ">
            <div className="col-sm-2 col-12 d-flex  justify-content-center">
              <img src={Logo} className="col-sm-12 col-8 " />
            </div>
            <div className="col-sm-4 col-12 d-flex flex-column align-items-center wrap">
              <img src={LogoWord} className="col-sm-12 col-8 " />
              <p>Creative Media</p>
            </div>
          </div>
          <div className="col-sm-1 col-12 d-flex justify-content-center">
            <i
              className={`${style.goDown} fas fa-chevron-down`}
              id="goDown"
              onClick={goDown}
            ></i>
          </div>
        </div>
      </div>
      <div className={`${style.proSene} rtl d-flex flex-row  w-100 py-4`}>
        <div className={`${style.proSenePara} col-sm-7 col-12 h-100 `}>
          <h2>سينسز</h2>
          <p>
            شركة سعودية متخصصة في الصناعة الإعلامية، تقدم الحلول المتكاملة
            لمتطلبات الإنتاج الإعلامي. تعمل على الريادة والتميز في أعمالها من
            خلال التزامها بالجودة وفق المعايير الاحترافية المهنية الدقيقة، ومن
            خلال اعتمادها على المحتوى المبتكر والصناعة الإبداعية المختلفة التي
            تجعلها اختيارًا دائمًا لشركائها.
          </p>
          <p>
            تفخر سينسز باحتضانها المستمر لإبداع المنتجين والمخرجين الشباب من
            خلال تأجير استديوهاتها المهيأة بأعلى الإمكانات الإنتاجية، ومن خلال
            تقديم خدماتها الفنية الكاملة لدعمهم في بيئة احترافية تصل بأعمالهم
            للمحافل العالمية.
          </p>
        </div>
      </div>
      <Know
        isBtn={true}
        iBtn={"المزيد عن الانتاج"}
        linkBtn={"/Production"}
        pText={`اعتمدنا على فريق عمل مبتكر، ومعدات حديثة، ونموذج عمل مثالي يبدأ
        بالفكرة والكتابة الإبداعية.`}
        h3Text={"ترتكز صناعتنا الإنتاجية على الإبداع  "}
      ></Know>
      <Scrollimg filmLogo={filmLogo} filmback2={filmback2} filmback1={filmback1}></Scrollimg>
      <Know
        isBtn={true}
        iBtn={"المزيد عن الاستديوهات"}
        linkBtn={"/Studio"}
        pText={"يعكس اهتمامك بالاحترافية والجودة التي تسهم في نجاحاتك"}
        h3Text={"اختيارك لاستديوهات سينسز"}
      ></Know>
      <Gallary images={images}>
        <div
          className={`${style.rc} rtl d-flex flex-row wrap justify-content-center align-items-center col-12 mt-5 py-5`}
        >
          <div className="col-sm-8 col-10">
            <h3>اختيارك لاستديوهات سينسز</h3>
            <p>يعكس اهتمامك بالاحترافية والجودة التي تسهم في نجاحاتك.</p>
          </div>
          <div className="col-sm-2 col-10">
            <button type="button" className={`${style.btnContect} btn`}>
              <i className="fa-solid fa-angle-left">المزيد عن الاستديوهات</i>
            </button>
          </div>
        </div>
      </Gallary>
    </>
  );
}
