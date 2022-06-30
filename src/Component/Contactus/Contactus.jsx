import Joi from "joi";
import React, { useEffect, useState } from "react";
import style from "../Contactus/Contactus.module.scss";
import Landing from "../Landing/Landing";
import imgbackLand from "../Contactus/images_gallery-11@2400.jfif";
export default function Contactus() {
  const [Message, setMessage] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    number: Joi.number().required(),
    message: Joi.required(),
  });
  let message = { ...Message };
  const [isLoading, setisLoading] = useState(false);
  function getMessage(e) {
    message[e.target.name] = e.target.value;
    setMessage(message);
  }
  function addcl(e, classname) {
    let parent = e.target.parentNode;
    parent.classList.add(`${style[classname]}`);
  }
  function remcl(e, classname) {
    let parent = e.target.parentNode;
    parent.classList.remove(`${style[classname]}`);
  }
  function check(e, corr) {
    if (corr) {
      remcl(e, "wrongDiv");
      addcl(e, "corretDiv");
    } else {
      if (e.target.value == "") {
        remcl(e, "wrongDiv");
        remcl(e, "corretDiv");
        remcl(e, "focusDiv");
        addcl(e, "wrongBlur");
      } else {
        addcl(e, "wrongDiv");
      }
    }
  }
  function checkTest(e) {
    let checkTest;
    let corr = true;
    switch (e.target.id) {
      case "email":
        checkTest =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        corr = checkTest.test(e.target.value);
        break;
      case "name":
        checkTest = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        e.target.value =
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        corr = checkTest.test(e.target.value);
        break;
      case "message":
      case "number":
        if (e.target.value === "") {
          corr = false;
        }
        break;
      case "country":
        console.log(e.target.value);
        break;
    }
    check(e, corr);
  }
  useEffect(() => {
    let inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      // input.addEventListener("animationstart", function () {
      //   console.log("Animation started");
      // });
      input.addEventListener("change", function (e) {
        getMessage(e);
      });
      input.addEventListener("focus", function (e) {
        addcl(e, "focusDiv");
      });
      input.addEventListener("blur", function (e) {
        remcl(e, "focusDiv");
      });
      input.addEventListener("keyup", function (e) {
        checkTest(e);
      });
    });
  }, []);
  function hide(ele) {
    ele.style.opacity = "0";
    ele.style.zIndex = "-11";
  }
  function show(ele) {
    ele.style.opacity = "1";
    ele.style.zIndex = "88888";
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(Message);
    let { error } = schema.validate(Message, { abortEarly: false });
    console.log(error);
    if (error) {
      let errorDiv = document.getElementById("hideError").parentNode;
      show(errorDiv);
      setTimeout(() => {
        hide(errorDiv);
      }, 3000);
    } else {
      setisLoading(true);
      let succesDiv = document.getElementById("hideSucces").parentNode;
      setTimeout(() => {
        show(succesDiv);
        setTimeout(() => {
          hide(succesDiv);
        }, 3000);
        document.getElementById("formDiv").style.display = "none";
        document.getElementById("divSended").style.display = "block";
      }, 3000);
    }
  }
  function switchDiv() {
    setisLoading(false);
    document.getElementById("formDiv").style.display = "block";
    document.getElementById("divSended").style.display = "none";
    let inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.value = "";
      message[input.name] = input.value;
      setMessage(message);
    });
  }
  return (
    <>
      <Landing
        imgbackLand={imgbackLand}
        h2Text={"تواصل معنا"}
        pText={
          "يسعد فريق سينسز بتواصلك، ويعتز باختيارك الأمثل له، ويضمن لك الجودة التي تبحث عنها."
        }
      ></Landing>
      <div
        className={`${style.Contact} d-flex flex-row  justify-content-center rtl py-3`}
        id={"next"}
      >
        <div
          className={`col-sm-5 col-12 align-items-center  d-flex flex-column align-items-sm-end justify-content-start `}
        >
          <h2 className="col-10">اطرح استفساراتك</h2>
          <div className={`${style.divSended} col-10 rtl`} id="divSended">
            <div className=" m-5">
              <h4>شكراً، رسالتك وصلت.</h4>
              <p>
                سنقوم بالتواصل معك بأقرب فرصة. كما يمكنك التواصل معنا مباشرة من
                خلال وسائل التواصل الأخرى.
              </p>
              <div onClick={switchDiv}>عندك اسفسار اخر ؟</div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className={` col-10 rtl  flex-column  align-items-start`}
            id="formDiv"
          >
            <div className={`${style.divInfo} rtl`}>
              <h5>الاسم</h5>
              <i className="fa-solid fa-t"></i>
              <input
                type="name"
                className="input rtl"
                name="name"
                id="name"
                style={{
                  textTransform: "capitalize",
                }}
              />
            </div>
            <div className={`${style.divInfo} rtl`}>
              <h5>الايميل</h5>
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                className="input rtl"
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
            <div className={`${style.divInfo} rtl`}>
              <h5>الرقم</h5>
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                className="input rtl"
                name="number"
                id="number"
              />
            </div>
            <div className={`${style.divTextInfo} rtl`}>
              <h5>الرسالة</h5>
              <textarea
                className="input rtl"
                rows={8}
                name="message"
                id="message"
              ></textarea>
            </div>
            <button className={`${style.btnSend}`} type="submit">
              {isLoading ? (
                <i
                  className={`${style.spin} fa-solid fa-spinner fa-spin position-absolute top-50 start-50 translate-middle`}
                  naem="spin"
                ></i>
              ) : (
                <i className="fa-solid fa-paper-plane " naem="plane">
                  ارسال
                </i>
              )}
            </button>
          </form>
        </div>

        <div
          className={`col-sm-1 col-0 d-flex justify-content-center align-items-center `}
        >
          <div className={style.betweenBar}></div>
        </div>
        <div
          className={`col-sm-5 col-12 align-items-center d-flex flex-column align-items-sm-start justify-content-start`}
        >
          <h2 className="col-10">تجدنا هنا</h2>
          <div
            className={` col-10 rtl d-flex flex-column  align-items-start input-div`}
          >
            <div
              className={` ${style.findUS} col-sm-10 col-12 rtl d-flex flex-column  align-items-end input-div `}
            >
              <a
                className={` col-12 d-flex flex-row justify-content-center`}
                href="tel:966-55-002-0522"
              >
                <div
                  className={`${style.logo} col-4 fa-solid fa-phone`}
                  style={{
                    border: "rgb(221, 107, 32) 1px solid",
                    color: "rgb(221, 107, 32)",
                  }}
                ></div>
                <div className={`${style.linkLogo} col-8 p-1`}>
                  <h6 className="py-1">الحجوزات و الاستفسارات</h6>
                  <h5 className="py-1">
                    <a href="tel:966-55-002-0522">
                      &nbsp;966&nbsp;55&nbsp;002&nbsp;0522&nbsp;+
                    </a>
                  </h5>
                </div>
              </a>
              <hr className="col-9 bg-light " />
              <a
                className={` col-12 d-flex flex-row justify-content-center`}
                href="https://twitter.com/senses_sa/"
                target="_blank"
              >
                <div
                  className={`${style.logo} col-4 fa-brands fa-twitter`}
                  style={{
                    border: "rgb(56, 161, 243) 1px solid",
                    color: "rgb(56, 161, 243)",
                  }}
                ></div>
                <div className={`${style.linkLogo} col-8 p-1`}>
                  <h6 className="py-1">Twitter</h6>
                  <h5 className="py-1">Senses_sa@</h5>
                </div>
              </a>
              <a
                className={` col-12 d-flex flex-row justify-content-center`}
                href="https://www.instagram.com/senses_sa/"
                target="_blank"
              >
                <div
                  className={`${style.logo} col-4 fa-brands fa-instagram`}
                  style={{
                    border: "rgb(193, 53, 132) 1px solid",
                    color: "rgb(193, 53, 132)",
                  }}
                ></div>
                <div className={`${style.linkLogo} col-8 p-1`}>
                  <h6 className="py-1">instagram</h6>
                  <h5 className="py-1">Senses_sa@</h5>
                </div>
              </a>

              <hr className="col-9 bg-light " />
              <a
                className={` col-12 d-flex flex-row justify-content-center`}
                href="https://www.google.com/maps/place/Senses+Creative+Media/@24.6061945,46.816491,15z/data=!4m5!3m4!1s0x0:0xbb0444727594080b!8m2!3d24.6061945!4d46.816491?shorturl=1"
                target="_blank"
              >
                <div
                  className={`${style.logo} col-4 fa-solid fa-location-dot`}
                  style={{
                    border: "#3182ce 1px solid",
                    color: "#3182ce",
                  }}
                ></div>
                <div className={`${style.linkLogo} col-8 p-1`}>
                  <h6 className="py-1"> موقعنا </h6>
                  <h5 className="py-1">الرياض , حي المناخ</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className={`${style.errorBar} col-sm-3 col-10  rtl justify-content-between align-items-center `}
      >
        <p className="col-8 ">يرجي التاكد من بيانات الحقول</p>
        <p
          className="col-3"
          id="hideError"
          onClick={(e) => {
            hide(e.target.parentNode);
          }}
        >
          اخفاء
        </p>
      </div>
      <div
        className={`${style.succesBar} col-sm-3 col-10  rtl justify-content-between align-items-center `}
      >
        <p className="col-8 ">تم الارسال </p>
        <p
          className="col-3"
          id="hideSucces"
          onClick={(e) => {
            hide(e.target.parentNode);
          }}
        >
          اخفاء
        </p>
      </div>
    </>
  );
}
