import React from "react";

const PaymentPlan = () => {
  return (
    <div className="container-fluid " id="PaymentPlan">
      <div className="row mt-5 mb-5 justify-content-center align-items-center pageWrapper">
        <div className="col-12 text-center">
          <h2>Payment Plan</h2>
          <h3>Don't miss out.</h3>
        </div>
        <div className="col-12 col-md-6 ">
          <div className="card bg-color">
            <div className="card-body">
              <h3>GET AROUND FAST</h3>
              <h2>Save over 140 hrs each year</h2>
              <p>
                We know time is your most precious commodity. Don't waste it.
              </p>
              <div className="d-flex  ">
                <img
                  src="images/Tick.png"
                  width="23px"
                  height="23px"
                  className="me-3"
                />
                <p>Book taxis depending on preferred arrival times.</p>
              </div>
              <div className="d-flex ">
                <img
                  src="images/Tick.png"
                  width="23px"
                  height="23px"
                  className="me-3"
                />
                <p>Travel in style via private aircraft., with no queues.</p>
              </div>
              <div className="d-flex ">
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
          </div>
        </div>
        <div className="col-12 col-md-6 ">
          <div className="card bg-color">
            <div className="card-body">
              <h3>GET AROUND FAST</h3>
              <h2>Save over 140 hrs each year</h2>
              <p>
                We know time is your most precious commodity. Don't waste it.
              </p>
              <div className="d-flex  ">
                <img
                  src="images/Tick.png"
                  width="23px"
                  height="23px"
                  className="me-3"
                />
                <p>Book taxis depending on preferred arrival times.</p>
              </div>
              <div className="d-flex ">
                <img
                  src="images/Tick.png"
                  width="23px"
                  height="23px"
                  className="me-3"
                />
                <p>Travel in style via private aircraft., with no queues.</p>
              </div>
              <div className="d-flex ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
