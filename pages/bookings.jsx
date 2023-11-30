import React, { useEffect, useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import { useSnackbar } from "notistack";
import moment from "moment/moment";
import { CircularProgress } from "@mui/material";
import RecordNotFound from "../component/RecordNotFound";
import { _booking_list } from "../DAL/paymen";

const MemberBookings = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [bookingsList, setBookingsList] = useState([]);

  const get_bookings_list = async () => {
    const result = await _booking_list();
    if (result.code === 200) {
      setBookingsList(result.flight_booking_list);
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get_bookings_list();
  }, []);

  if (isLoading) {
    return (
      <div className="circular-progress">
        <CircularProgress color="primary" />
      </div>
    );
  }

  console.log(bookingsList, "bookingsListbookingsListbookingsList");

  return (
    <>
      <WebHeader />
      <div className="bg-color pt-5 pb-5" id="flights">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h4 className="text-center ">Bookings List</h4>
            </div>
            <div className="col-12">
              <div className="serch-input ">
                <div className="row justify-content-center">
                  {bookingsList.length > 0 ? (
                    bookingsList.map((flight) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-4 p-2 d-flex" key={flight._id}>
                          <div className="card w-100">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="text-start flight-detail">
                                  <h1>Departure</h1>
                                  <h2>
                                    {flight.flight_id?.departure_airport?.title}
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.departure_airport
                                        ?.address_1
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.departure_airport
                                        ?.city_name
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.departure_airport
                                        ?.state_name
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.departure_airport
                                        ?.country_name
                                    }
                                  </h2>
                                </div>
                                <div className="text-end margin-text flight-detail">
                                  <h1>Return</h1>
                                  <h2>
                                    {flight.flight_id?.return_airport?.title}
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.return_airport
                                        ?.address_1
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.return_airport
                                        ?.city_name
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.return_airport
                                        ?.state_name
                                    }
                                  </h2>
                                  <h2>
                                    {
                                      flight.flight_id?.return_airport
                                        ?.country_name
                                    }
                                  </h2>
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex mt-3">
                                <div className="text-start">
                                  <p>Flight Time</p>
                                  <h2 className="mb-2">
                                    {moment(
                                      flight.flight_id.departure_date
                                    ).format("DD-MM-YYYY")}
                                  </h2>
                                  <h2>
                                    {moment(
                                      flight.flight_id.departure_date
                                    ).format("hh:mm A")}
                                  </h2>
                                </div>
                                <div className="text-end margin-text">
                                  <p>Booked Seats</p>
                                  <h2>{flight.seats_booked}</h2>
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex mt-3">
                                <div className="text-start">
                                  <p>Payable Amount</p>
                                  <h2>{`From £${flight.per_passenger_cost} per person`}</h2>
                                </div>
                                <div className="text-end margin-text">
                                  <p>Amount</p>
                                  <h2>£ {flight.total_cost}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="mt-5">
                      <RecordNotFound title="Bookings not found" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WebFooter />
    </>
  );
};

export default MemberBookings;
