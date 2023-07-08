import React from "react";

import Link from "next/link";
import FooterBottomI from "./FooterBottomI";
import FooterBottomII from "./FooterBottomII";

// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// export const icon = [
//   <BiLogoFacebook />,
//   <BiLogoTwitter />,
//   <BiLogoYoutube />,
//   <BiLogoInstagramAlt />,
//   <BiLogoTumblr />,
//   <BiLogoSpotify />,
// ];

const img1 = "/img/app_store_badge.png";
const img2 = "/img/google_play_badge.png";

function FooterBottom() {
  return (
    <div className="flex flex-col justify-center items-center">
      <FooterBottomI img1={img1} img2={img2} />
      <FooterBottomII />
    </div>
  );
}

// export { icon };
export default FooterBottom;
