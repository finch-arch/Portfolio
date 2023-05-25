import React from "react";
import abt from "./Images/dp.jpg";
export default function About() {
 
 return (
    <>
      <div className="about" id="about">
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <section className="about-me">
          <img src={abt} alt="" />
          <div className="content">
            <p className="animation" >
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
