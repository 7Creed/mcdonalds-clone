import React, { useState, useEffect } from "react";
// import FooterCard from "./FooterCard";
import { footerData } from "../../data/foot";
import FooterBottom from "../FooterBtm/FooterBottom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Data = ["school", "market", "church"];

function FooterII() {
  // const win = window.innerWidth
  // const [expand, setExpand] = useState(false);
  const [winWidth, setWinWidth] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleWindowSize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);

    // console.log(winWidth)
    if (winWidth === null) {
      handleWindowSize();
    }

    // console.log(winWidth)

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <div className="">
      <div className="lg:flex lg:justify-between px-4 py-2">
        {footerData.map((data, index) => {
          const { id, title, items } = data;
          // return <FooterCard key={id} acordionTitle={title} items={items} index={index} />;
          return (
            <div key={index} className="space-y-4 lg:w-[16.6%]">
              <div
                className={`top flex justify-between text-lg ${
                  winWidth >= 1024 ? "" : "cursor-pointer"
                }`}
                onClick={
                  winWidth >= 1024
                    ? null
                    : () => {
                        // setExpand(!expand),
                        setActiveIndex(activeIndex === index ? null : index);
                      }
                }
              >
                <h2 className="font-semibold lg:font-bold">{title}</h2>
                <div className="lg:hidden text-2xl">
                  {activeIndex === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </div>
              </div>

              {winWidth <= 1024 ? (
                activeIndex === index && (
                  <div className="space-y-4 pb-4 lg:space-y-2">
                    {items.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                )
              ) : (
                <div className="space-y-4 pb-4 lg:space-y-2">
                  {items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FooterBottom />
    </div>
  );
}

export default FooterII;
