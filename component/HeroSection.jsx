import React from "react";

const HeroSection = () => {
  return (
    <div className="container-fluid " id="home">
      <div className="row mt-5 justify-content-center align-items-center pageWrapper">
        <div className="col-12 col-md-6 text-center text-md-start ">
          <h1>
            The Fastest Way to get <span className="text-color">Anywhere.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <a className="mt-5 ">
            <button className="button" type="button">
              Get Started{" "}
            </button>
          </a>
        </div>
        <div className="col-12 col-md-6 text-center text-md-end">
          <img
            src="images/Group 37122.png"
            className="img-fluid"
            alt="Landing"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
