import React, { useState } from "react";
import FooterCard from "./FooterCard";
import { footerData } from "../../data/foot";
import FooterBottom from "../FooterBottom/FooterBottom";

// const Data = ["school", "market", "church"];

function FooterII() {
  return (
    <div className="">
      <div className="lg:flex lg:justify-between px-4 py-2">
        {footerData.map((data) => {
          const { id, title, items } = data;
          return (
            <FooterCard key={id} acordionTitle={title} items={items} />
          )
        })}
      </div>
      <FooterBottom />
    </div>
  );
}

export default FooterII;
