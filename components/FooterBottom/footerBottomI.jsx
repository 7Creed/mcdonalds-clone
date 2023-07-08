import React from "react";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagramAlt,
  BiLogoTumblr,
  BiLogoSpotify,
} from "react-icons/bi";

// import { icon } from "./FooterBottom";

const icon = [
  <BiLogoFacebook />,
  <BiLogoTwitter />,
  <BiLogoYoutube />,
  <BiLogoInstagramAlt />,
  <BiLogoTumblr />,
  <BiLogoSpotify />,
];
// console.log(icon);

function FooterBottomI({ img1, img2 }) {
  return (
    <div className="w-[100%]">
      <div className="flex text-2xl justify-center">
        {icon.map((entry, idx) => {
          return (
            <div key={idx} className="p-2 border rounded-full">
              {entry}{" "}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-[100%]">
        <Link href="/" className="">
          <img src={img1} alt="app store download" />
        </Link>
        <Link href="/" className="">
          <img src={img2} alt="google play download" />
        </Link>
      </div>
    </div>
  );
}

export default FooterBottomI;