import React from "react";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <>
      <div className="intro" id="home" >
        <div className="n1">Hello , I'm Vishal Kumar Mahto</div>
        <div className="n2">
          <Typewriter
            options={{
              strings: ["Programmer", "Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
  
    </>
  );
}
