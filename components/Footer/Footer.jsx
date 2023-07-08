import React, { useState } from "react";
import { footData } from "../../data/foot";

function Footer() {
  const [expandModal, setExpandModal] = useState(false);

  const expand = (e, idN) => {
    if (+e.target.dataset.id === idN) {
      console.log("true");
      setExpandModal(!expandModal);
    }
    console.log(e.target);
    console.log(idN);
    console.log(e.target.dataset.id);
    // console.log('king')
  };

  // Looking at this problem, how can I learn to tackle this subsequently on mi own???

  return (
    <div className="bg-red-60">
      {footData.map((data, idx) => {
        const { id, items } = data;
        return (
          <div key={id}>
            <div
              className="flex justify-between bg-slate-300"
              data-id={idx + 1}
              onClick={(e) => {
                expand(e, id);
              }}
            >
              <div className="text-lg">{items[0]}</div>
              <div>+</div>
            </div>

              <footCard footData={footData} />

          </div>
        );
      })}

      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
    </div>
  );
}

export default Footer;


export const footCard = function () {
  {
    expandModal && (
      <div className="flex flex-col">
        {items.slice(1).map((item, idx) => (
          <p key={idx + 1}>{item}</p>
        ))}
      </div>
    );
  }
};
