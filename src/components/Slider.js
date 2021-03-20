import React from "react";
import { Slideshow, Slide } from "./Slideshow";
import Images from "./Images";

const Slider = () => {
  return (
    <>
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
            <img src={Images.add4} alt="alt" />
        </Slide>
        <Slide>
            <img src={Images.add5} alt="alt" />
        </Slide>
      </Slideshow>
    </>
  );
};

export default Slider;
