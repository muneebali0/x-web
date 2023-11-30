import React from "react";

const OurServices = () => {
  return (
    <div className="container-fluid " id="ourservices">
      <div className="row mt-5 mb-5 justify-content-center align-items-center pageWrapper">
        <div className="col-12 text-center">
          <h2>Why should you use XAir </h2>
          <h3>Don't miss out.</h3>
        </div>
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src="images/Group 37125.png"
            className="img-fluid"
            alt="Landing"
          />
        </div>
        <div className="col-12 col-md-6  text-center text-md-start mt-3 mt-md-0">
          <h3>FLY 4X MORE</h3>
          <h2>We find those to handle the cost, so you don't have to.</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <a className="mt-5 ">
            <button type="button" className="button">
              Get Started{" "}
            </button>
          </a>
        </div>
        <div className="col-12 col-md-6  text-center text-md-start  mt-4">
          <h3>GET AROUND FAST</h3>
          <h2>Save over 140 hrs each year</h2>
          <p>We know time is your most precious commodity. Don't waste it.</p>
          <div className="d-flex service-text ">
            <img
              src="images/Tick.png"
              width="23px"
              height="23px"
              className="me-3"
            />
            <p>Book taxis depending on preferred arrival times.</p>
          </div>
          <div className="d-flex service-text">
            <img
              src="images/Tick.png"
              width="23px"
              height="23px"
              className="me-3"
            />
            <p>Travel in style via private aircraft., with no queues.</p>
          </div>
          <div className="d-flex service-text">
            <img
              src="images/Tick.png"
              width="23px"
              height="23px"
              className="me-3"
            />
            <p>Visit one of 74 different airports in the UK today.</p>
          </div>
          <a className="mt-5 ">
            <button type="button" className="button">
              Get Started{" "}
            </button>
          </a>
        </div>
        <div className="col-12 col-md-6 text-center text-md-end  mt-4">
          <img
            src="images/Group 37125.png"
            className="img-fluid"
            alt="Landing"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
