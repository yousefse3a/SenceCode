import React from "react";
import imgbackLand from "../Production/images_gallery-33@2400.jpg";
import imgBackLogo from "../Production/img/images_gallery-19@1600.jfif";
import filmLogo from "./svgexport-6.svg";
import filmback2 from "../Production/img/images_gallery-21@800.webp";
import filmback1 from "../Production/img/images_gallery-32@2400.jfif";
import Gallary from "../Gallary/Gallary";
import Scrollimg from "../Scrollimg/Scrollimg";
import Paragraph from "../Paragraph/Paragraph";
import Landing from "../Landing/Landing";
import Know from "../Know/Know";
export default function Production() {
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../Production/img", false, /\.(png|jpe?g|svg|webp|jfif)$/)
  );
  return (
    <>
      <Landing
        imgbackLand={imgbackLand}
        h2Text={"الإنتاج"}
        pText={
          "اعتمدنا على فريق عمل مبتكر ومعدات حديثة ونموذج عمل مثالي يبدأ بالفكرة والكتابة الإبداعية مروراً بالعمليات الفنية والإخراج المتقن."
        }
      ></Landing>
      <Paragraph
        h2Text={"إنتاج سينسز"}
        p1Text={
          "ترتكز صناعتنا الإنتاجية على الإبداع والقوة لتؤثر المواد المختلفة في الجمهور كما يرغب شركاء سينسز."
        }
        p2Text={
          "لهذا اعتمدنا على فريق عمل مبتكر، ومعدات حديثة، ونموذج عمل مثالي يبدأ بالفكرة والكتابة الإبداعية، مرورًا بالعمليات الفنية والإخراج المتقن بصورته النهائية، مما يعزز ثقة عملائنا وشركائنا بحرفيتنا الفائقة."
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
        h3Text={"ترتكز صناعتنا الإنتاجية على الإبداع،"}
        pText={`اعتمدنا على فريق عمل مبتكر، ومعدات حديثة، ونموذج عمل مثالي يبدأ بالفكرة والكتابة الإبداعية.
      `}
      ></Know>
      <Gallary images={images}></Gallary>
      <Know
        isBtn={false}
        h3Text={" بحرفيتنا الفائقة،"}
        pText={`نعزز ثقة عملائنا وشركائنا.`}
      ></Know>
    </>
  );
}
