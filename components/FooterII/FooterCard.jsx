import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FooterCard({ acordionTitle, items }) {
  const [expand, setExpand] = useState(false);
  const [winWidth, setWinWidth] = useState(null);

  useEffect(() => {
    const handleWindowSize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize)

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);
  // console.log(winWidth);

  useEffect(() => {
    // winWidth >= 1024 ? setExpand(true) : setExpand(false)
    if(winWidth >= 1024) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  },[winWidth] )

  return (
    <div className="space-y-4 lg:w-[16.6%]">
      <div
        className={`top flex justify-between text-lg ${winWidth >= 1024 ? '' : 'cursor-pointer'}`}
        onClick={winWidth >=1024 ? null : () => setExpand(!expand)}
      >
        <h2 className="font-semibold lg:font-bold">{acordionTitle}</h2>
        <div className="lg:hidden text-2xl">
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {expand ? (
        <div className="space-y-4 pb-4 lg:space-y-2">
          {items.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FooterCard;
