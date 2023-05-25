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
                  <a href="https://github.com/finch-arch/BIT-Notes.git" target="_blank" rel="noreferrer" className="btn btn-secondary">
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
                  <a href="https://github.com/finch-arch/Portfolio.git" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
            <div className="card">
                <img src={Login} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                  Weather App made using ReactJS and external API . Enter your location and fetch weather
                  </p>
                  <a href="https://github.com/finch-arch/Weather-App.git" target="_blank" rel="noreferrer" className="btn btn-secondary">
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
