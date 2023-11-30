import React, { useEffect, useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import { useRouter } from "next/router";
import { _pilot_flights_delete, _pilot_flights_list } from "../DAL/flights";
import { useSnackbar } from "notistack";
import moment from "moment/moment";
import ConfirmationPopup from "../component/ConfirmationPopup";
import { CircularProgress } from "@mui/material";
import RecordNotFound from "../component/RecordNotFound";

const PilotFlights = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(false);
  const [flightsList, setFlightsList] = useState([]);
  const [selectedObject, setSelectedObject] = useState({});

  const handleAddFlight = () => {
    router.push("/add-flight");
  };

  const handleEditFlight = (flight) => {
    router.push(`/edit-flight/${flight._id}`);
  };

  const handleAgreeDelete = (data) => {
    setSelectedObject(data);
    setOpenDelete(true);
  };

  const get_pilot_flights_list = async () => {
    const result = await _pilot_flights_list();
    if (result.code === 200) {
      setFlightsList(result.flight_list);
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setOpenDelete(false);
    const result = await _pilot_flights_delete(selectedObject._id);
    if (result.code === 200) {
      setFlightsList((old) =>
        old.filter((report) => report._id !== selectedObject._id)
      );
      enqueueSnackbar(result.message, { variant: "success" });
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
    }
  };

  useEffect(() => {
    get_pilot_flights_list();
  }, []);

  if (isLoading) {
    return (
      <div className="circular-progress">
        <CircularProgress color="primary" />
      </div>
    );
  }

  console.log(selectedObject, "selectedObjectselectedObject");
  console.log(flightsList, "flightsListflightsListflightsList");

  return (
    <>
      <WebHeader />
      <div className="bg-color pt-5 pb-5" id="flights">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="serch-input ">
                <div className="row justify-content-center">
                  <div className=" text-end mb-3">
                    <button onClick={handleAddFlight} className="button">
                      Add Flight
                    </button>
                  </div>
                  <div className="col-12 ">
                    <h4 className="text-center ">Flights List</h4>
                  </div>
                  {flightsList.length > 0 ? (
                    flightsList.map((flight) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-4 p-2 d-flex" key={flight._id}>
                          <div className="card w-100">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="text-start flight-detail">
                                  <h1>Departure</h1>
                                  <h2>{flight.departure_airport?.title}</h2>
                                  <h2>{flight.departure_airport?.address_1}</h2>
                                  <h2>{flight.departure_airport?.city_name}</h2>
                                  <h2>
                                    {flight.departure_airport?.state_name}
                                  </h2>
                                  <h2>
                                    {flight.departure_airport?.country_name}
                                  </h2>
                                </div>
                                <div className="text-end margin-text flight-detail">
                                  <h1>Return</h1>
                                  <h2>{flight.return_airport?.title}</h2>
                                  <h2>{flight.return_airport?.address_1}</h2>
                                  <h2>{flight.return_airport?.city_name}</h2>
                                  <h2>{flight.return_airport?.state_name}</h2>
                                  <h2>{flight.return_airport?.country_name}</h2>
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex mt-3">
                                <div className="text-start">
                                  <p>Flight Date Time</p>
                                  <h2 className="mb-2">
                                    {moment(flight.departure_date).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </h2>
                                  <h2>
                                    {moment(flight.departure_date).format(
                                      "hh:mm A"
                                    )}
                                  </h2>
                                </div>
                                <div className="text-end margin-text">
                                  <p>Available seat</p>
                                  <h2>{flight.available_seats}</h2>
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex mt-3">
                                <div className="text-start">
                                  <p>Payable Amount</p>
                                  <h2>{`From £${flight.cost_per_seat} per person`}</h2>
                                </div>
                                <div className="text-end margin-text">
                                  <p>Amount</p>
                                  <h2>
                                    £{" "}
                                    {flight.cost_per_seat *
                                      flight.available_seats}
                                  </h2>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between my-2">
                                <button
                                  onClick={() => {
                                    handleEditFlight(flight);
                                  }}
                                  className="button px-3 py-2"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    handleAgreeDelete(flight);
                                  }}
                                  className="button px-3 py-2"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="mt-5">
                      <RecordNotFound title="Flights not found" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WebFooter />
      <ConfirmationPopup
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        title={"Are you sure you want to delete this flight?"}
        handleAgree={handleDelete}
      />
    </>
  );
};

export default PilotFlights;
