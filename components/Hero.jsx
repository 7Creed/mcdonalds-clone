import Link from "next/link";
import React from "react";

// finish todo and deploy
// what does the {children} mean
const Hero = ({
  img,
  title,
  para_one,
  para_two,
  para_three,
  path,
  button_text,
}) => {
  return (
    <div className="pb-12">
      <div className="image_area py-16">
        <img src={img} alt="image" />
      </div>
      <div className="text_area">
        <h1 className="text-[1.7rem] leading-8 font-bold mb-3">{title}</h1>
        <p className="text-base mb-3">{para_one}</p>
        <p className="text-base mb-3">{para_two}</p>
        <p className="text-[0.7rem] mb-10">
          <span className="">{para_three}</span>
        </p>
        <Link
          href={path}
          className="bg-[#ffbc0d] text-[#292929] text-sm min-w-[11rem] min-h-[3rem] rounded-md py-[0.8rem] px-[2.5625rem] text-center"
        >
          {button_text}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
