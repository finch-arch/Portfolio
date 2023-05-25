import React from "react";
import reactpng from './Images/Skills/react.png';
import bootsrap from './Images/Skills/bootstrap.png';
import c from './Images/Skills/c.png';
import csspng from './Images/Skills/css.png';
import expresspng from './Images/Skills/express.png';
import git from './Images/Skills/git.png';
import htmlpng from './Images/Skills/html.png';
import js from './Images/Skills/javascript.png';
import mdb from './Images/Skills/mongodb.png';
import nds from './Images/Skills/nodejs.png';


export default function Skills() {
  return (
    <>
      <div className="Skills" id="skill">
        <div className="heading-skill">
          <h1>Skills</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 ">
            <img className ="ico" src={reactpng} alt="react" />
            </div>
            <div className="col-md-3 col-6 "><img className ="ico" src={c} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={git} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={htmlpng} alt="react" /></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6 "><img className ="ico" src={csspng} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={js} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={expresspng} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={nds} alt="react" /></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6 "><img className ="ico" src={mdb} alt="react" /></div>
            <div className="col-md-3 col-6 "><img className ="ico" src={bootsrap} alt="react" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
