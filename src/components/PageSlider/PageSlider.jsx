import React, { useState } from "react";
import "./PageSlider.css";
import { ways } from "./data";
import prevButton from "./Left.svg";
import nextButton from "./Right.svg";

export default function PageSlider() {
  const [count, setCount] = useState(0);
  const waysLength = ways.length;

  function moveSlides(flag) {
    if (flag === 0) {
      setCount((prevCount) => (prevCount + 1) % waysLength);
    } else {
      setCount((prevCount) => (prevCount - 1 + waysLength) % waysLength);
    }
  }

  return (
    <>
      <article className="slider">
        <div className="sliderText">
          <h2 className="sliderTitle"> Типы баз данных</h2>
          <p className="sliderSubTitle">
            Чаще всего базы данных классифицируют в зависимости от того, как в
            них структурирована информация и как с ней взаимодействовать. 
            <br></br> Вот некоторые из них:
          </p>
          <div className="">
            <h3 className="slideName">{ways[count].title}</h3>
            <p className="slideText">{ways[count].description}</p>
          </div>
        </div>
        <div className="sliderInformaton">
          <div>
            <img className="slidePhoto" src={ways[count].photo} alt="" />
          </div>
        </div>
      </article>

      <button className="buttonSlider" onClick={() => moveSlides(1)}>
        <img src={prevButton} alt="" />
      </button>
      <button className="buttonSlider" onClick={() => moveSlides(0)}>
        <img src={nextButton} alt="" />
      </button>
    </>
  );
}
