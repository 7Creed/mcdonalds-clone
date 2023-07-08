import React from "react";
import Hero from "../Hero";
import { arrayObj } from "../../data/data";

function MainPage() {
  return (
    <div className="w-full">
      {arrayObj.map((each) => {
        return (
          <Hero
            key={each.id}
            title={each.title}
            img={each.image}
            para_one={each?.para_one}
            para_two={each?.para_two}
            para_three={each?.para_three}
            path={each.path}
            button_text={each.button_text}
          />
        );
      })}
    </div>
  );
}

export default MainPage;
