import React from "react";
import abt from "./Images/dp.jpg";
import Aos from "aos";
export default function About() {
  Aos.init();
 return (
    <>
      <div className="about" id="about">
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <section className="about-me">
          <img src={abt} alt="" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" />
          <div className="content" >
            <p className="animation"  data-aos="zoom-out-up">
              Hi I'm Vishal Kumar Mahto.I'm a Third Year Undergraduate at
              Birla Institute of Technology,Mesra pursuing Production and Industrial
              Engineering.I'm born and brought up in Ranchi,I have done my
              Schooling from Army Public School,Ranchi.My Interest lies in
              Data Structures and Algorthims and Web development.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
