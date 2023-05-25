import React from "react";
import bitapp from './Images/Projects/edit.PNG'
import portfolio from './Images/Projects/Portfolio.PNG'
import Login from './Images/Projects/Login.PNG'
export default function Projects() {
  return (
    <>
      <div className="projects" id="project">
        <div className="heading-projects">Projects</div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <img src={bitapp} className="card-img-top" alt="BIT App" />
                <div className="card-body">
                  <h5 className="card-title">BIT Notes</h5>
                  <p className="card-text">
                    Create your Account. Create, Save and delete your Notes. Performs CRUD Operations.
                  </p>
                  <a href="/" className="btn btn-secondary">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
            <div className="card" >
                <img src={portfolio} className="card-img-top" alt="Personal Site" />
                <div className="card-body">
                  <h5 className="card-title">Personal Site</h5>
                  <p className="card-text">
                    Personal Site made using ReactJS, fetches your Codeforces rating.
                  </p>
                  <a href="/" className="btn btn-secondary">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
            <div className="card">
                <img src={Login} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-secondary">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
