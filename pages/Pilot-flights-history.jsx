import React, { useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function PilotFlightHistory() {
  const [selectedValue, setSelectedValue] = useState("b");
  const [selectedOption, setSelectedOption] = useState("false");
  const [selectedOption1, setSelectedOption1] = useState("no");

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-md-10 mt-3 ">
              <h2>Upcoming Flights</h2>
              <div className="row">
                <div className="col-12 col-md-6 mt-2 p-2 poilot-profile">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="text-start">
                          <h1>Departure</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                        <div className="text-end margin-text">
                          <h1>Return</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Flight Time</p>
                          <h2>Morning</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Available seat</p>
                          <h2>04</h2>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Payable Amount</p>
                          <h2>From £50 per person</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Amount</p>
                          <h2>£ 50</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-2 p-2 poilot-profile">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="text-start">
                          <h1>Departure</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                        <div className="text-end margin-text">
                          <h1>Return</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Flight Time</p>
                          <h2>Morning</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Available seat</p>
                          <h2>04</h2>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Payable Amount</p>
                          <h2>From £50 per person</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Amount</p>
                          <h2>£ 50</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 mt-3 ">
              <h2>Flights History</h2>
              <div className="row">
                <div className="col-12 col-md-6 mt-2 p-2 poilot-profile">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="text-start">
                          <h1>Departure</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                        <div className="text-end margin-text">
                          <h1>Return</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Flight Time</p>
                          <h2>Morning</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Available seat</p>
                          <h2>04</h2>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Payable Amount</p>
                          <h2>From £50 per person</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Amount</p>
                          <h2>£ 50</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-2 p-2 poilot-profile">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="text-start">
                          <h1>Departure</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                        <div className="text-end margin-text">
                          <h1>Return</h1>
                          <h2>Denham</h2>
                          <p>Denham</p>
                          <p>Denham Aerodrome </p>
                          <p>(EGLD)</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Flight Time</p>
                          <h2>Morning</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Available seat</p>
                          <h2>04</h2>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex mt-3">
                        <div className="text-start">
                          <p>Payable Amount</p>
                          <h2>From £50 per person</h2>
                        </div>
                        <div className="text-end margin-text">
                          <p>Amount</p>
                          <h2>£ 50</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
