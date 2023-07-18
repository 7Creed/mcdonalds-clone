import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  {
    icon: <BiLogoFacebook />,
  },
  {
    icon: <BiLogoTwitter />,
  },
  {
    icon: <BiLogoYoutube />,
  },
  {
    icon: <BiLogoInstagramAlt />,
  },
  {
    icon: <BiLogoTumblr />,
  },
  {
    icon: <BiLogoSpotify />,
  },
];
// console.log(icon);

function FooterBottomI({ img1, img2 }) {
  return (
    <div className="w-[100%] lg:flex justify-center lg:py-3">
      <div className="flex text-2xl justify-center py-5 lg:py-0 lg:px-5">
        {icon.map((entry, idx) => {
          return (
            <div key={idx} className="p-2 border rounded-full">
              {entry.icon}{" "}
            </div>
          );
        })}
      </div>
      <div className="flex justify-around lg:justify-end lg:px-5 w-[100%]">
        <Link href="/" className="">
          <Image src={img1} width="150" height='150' alt="app store download" />
        </Link>
        <Link href="/" className="">
          <Image src={img2} width="150" height='150' alt="google play download" />
        </Link>
      </div>
    </div>
  );
}

export default FooterBottomI;
