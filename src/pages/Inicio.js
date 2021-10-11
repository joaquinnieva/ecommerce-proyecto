import React from "react";
import "../components/styles/Inicio.css";
import { Slide, Slideshow } from "../components/Slideshow";
import Images from "../components/Images";

function Inicio() {
  return (
    <div className="cont-page">
      <Slideshow controles={true}>
        <Slide>
          <img src={Images.add1} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add2} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add3} alt="alt" />
        </Slide>
      </Slideshow>
      <Slideshow controles={true}>
        <Slide>
          <img src={Images.add2} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add2} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add3} alt="alt" />
        </Slide>
      </Slideshow>
      <Slideshow controles={true}>
        <Slide>
          <img src={Images.add3} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add2} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add3} alt="alt" />
        </Slide>
      </Slideshow>
      <Slideshow controles={true}>
        <Slide>
          <img src={Images.add4} alt="alt" />
        </Slide>
        <Slide>
          <img src={Images.add5} alt="alt" />
        </Slide>
      </Slideshow>
    </div>
  );
}

export default Inicio;
