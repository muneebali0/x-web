import React from "react";

const AboutUs = () => {
  return (
    <div className="container-fluid " id="about">
      <div className="row mt-5 text-center text-md-start justify-content-center align-items-center pageWrapper">
        <div className="col-12 col-md-6">
          <h2>
            What To Get <br />
            <span className="text-color"> Excited</span> About.
          </h2>
        </div>
        <div className="col-12 col-md-6 ">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit
          </p>
        </div>
        <div className="col-12 col-md-4 mt-2">
          <div className="card ">
            <div className="card-body">
              <img src="images/Pilots.png" className="img-fuild mb-3" />
              <h5>Pilots</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-2">
          <div className="card ">
            <div className="card-body">
              <img src="images/Passengers.png" className="img-fuild mb-3" />
              <h5>Passengers</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-2">
          <div className="card ">
            <div className="card-body">
              <img src="images/Ride Hailing.png" className="img-fuild mb-3" />
              <h5>Ride Hailing App</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
