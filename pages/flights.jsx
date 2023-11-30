import React, { useEffect, useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import Calendar from "react-calendar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { _flights_list_for_website } from "../DAL/flights";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import RecordNotFound from "../component/RecordNotFound";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { _book_flight, _confirm_booking } from "../DAL/paymen";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Flights = () => {
  const [filterDate, setFilterDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const [flightsList, setFlightsList] = useState([]);
  const [selectedObject, setSelectedObject] = useState({});
  const elements = useElements();

  const handleClickOpen = (flight) => {
    if (!localStorage.getItem("token")) {
      enqueueSnackbar("Login before booking", { variant: "error" });
      return;
    }
    setSelectedObject(flight);
    setOpen(true);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSelectedObject((values) => ({ ...values, [name]: value }));
  };

  const handleClose = () => {
    setSelectedObject({});
    setOpen(false);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const get_flights_list = async () => {
    setIsLoading(true);
    let postData = {
      date: moment(filterDate).format("YYYY-MM-DD"),
    };
    const result = await _flights_list_for_website(postData);
    if (result.code === 200) {
      setFlightsList(result.flight_list);
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  const confirmCardPayment = async (data) => {
    console.log(data, "datadatadatadatadatadata");
    setIsLoading(true);
    let postData = {
      booking_id: data.flight._id,
    };
    const result = await _confirm_booking(postData);
    if (result.code === 200) {
      enqueueSnackbar(result.message, { variant: "success" });
      setIsLoadingCard(false);
      handleClose();
      get_flights_list();
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const handleSecureCard = (data, cardElement, postData) => {
    enqueueSnackbar("Processing card...", {
      variant: "info",
    });

    stripe
      .confirmCardPayment(data.client_secret, {
        payment_method: {
          card: cardElement,
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
        if (result.error) {
          setIsLoadingCard(false);
          enqueueSnackbar(result.error.message, { variant: "error" });
          return;
        }

        confirmCardPayment(data);
      })
      .catch((err) => {
        enqueueSnackbar(err.message, { variant: "error" });
        setIsLoadingCard(false);
      });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsLoadingCard(true);
    if (elements == null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    stripe.createToken(cardElement).then(async function (result) {
      // Handle result.error or result.token
      if (result.error) {
        setIsLoadingCard(false);
        enqueueSnackbar(result.error.message, { variant: "error" });
      } else {
        setIsLoadingCard(true);
        let postData = {
          flight_id: selectedObject._id,
          seats_booked: selectedObject.seats_booked,
        };
        const result = await _book_flight(postData);
        if (result.code === 200) {
          console.log(result, "_book_flight_book_flight");
          handleSecureCard(result, cardElement, postData);
        } else {
          enqueueSnackbar(result.message, { variant: "error" });
          setIsLoadingCard(false);
        }
      }
    });
  };

  console.log(filterDate, "filterDatefilterDate");
  console.log(flightsList, "flightsListflightsList");

  useEffect(() => {
    get_flights_list();
  }, [filterDate]);

  return (
    <>
      <WebHeader />
      <div className="bg-color pt-5 pb-5" id="flights">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <h2>Filters</h2>
              <hr />
              <div className="mt-3 mb-3">
                <Calendar
                  onChange={setFilterDate}
                  value={filterDate}
                  minDate={new Date()}
                />
              </div>
              <h5>Passengers</h5>
              <p>Maximum amount 4</p>
              <div className="counter">
                <div className="counter_buttons">
                  <button className="counter_button" onClick={decrement}>
                    -
                  </button>
                  <h5 className="count">{count}</h5>
                  <button className="counter_button" onClick={increment}>
                    +
                  </button>
                </div>
              </div>
              <hr />
              <div className="mt-3">
                <h5>Price</h5>
                <p>Maximum price per passenger</p>
                <div className="serch-input  input-icon2">
                  <input type="number" placeholder="Select price" />
                  <i>£</i>
                </div>
              </div>
              <div className=" mt-3 mb-3">
                <button onClick={handleClickOpen} className="button w-100">
                  Filter
                </button>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="serch-input ">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="mb-3"
                />

                {isLoading ? (
                  <div className="circular-progress">
                    <CircularProgress color="primary" />
                  </div>
                ) : (
                  <div className="row justify-content-center">
                    {flightsList.length > 0 ? (
                      flightsList.map((flight) => {
                        return (
                          <div className="col-12 col-md-6 p-2 d-flex" key={flight._id}>
                            <div className="card w-100">
                              <div className="card-body">
                                <div className="d-flex">
                                  <div className="text-start flight-detail">
                                    <h1>Departure</h1>
                                    <h2>{flight.departure_airport?.title}</h2>
                                    <h2>
                                      {flight.departure_airport?.address_1}
                                    </h2>
                                    <h2>
                                      {flight.departure_airport?.city_name}
                                    </h2>
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
                                    <h2>
                                      {flight.return_airport?.country_name}
                                    </h2>
                                  </div>
                                </div>
                                <hr />
                                <div className="d-flex mt-3">
                                  <div className="text-start">
                                    <p>Flight Time</p>
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
                                <div className=" text-center mb-3">
                                  <button
                                    onClick={() => {
                                      handleClickOpen(flight);
                                    }}
                                    className="button w-50 "
                                  >
                                    Book Now
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WebFooter />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h4>Flight Details</h4>
        </BootstrapDialogTitle>
        <DialogContent>
          <div className="">
            <div className="d-flex">
              <div className="text-start">
                <h4>Departure</h4>
                <p>{selectedObject.departure_airport?.title}</p>
              </div>
              <div className="text-end margin-text">
                <h4>Return</h4>
                <p>{selectedObject.return_airport?.title}</p>
              </div>
            </div>
          </div>
          <form className="row" onSubmit={handleBooking}>
            <div className="col-12 col-md-6 mt-3">
              <label className="mb-1">Flight Date</label>
              <input
                type="date"
                value={moment(selectedObject.departure_date).format(
                  "YYYY-MM-DD"
                )}
                disabled
              />
            </div>
            <div className="col-12 col-md-6  mt-3">
              <label className="mb-1">Flight Time</label>
              <input
                type="time"
                value={moment(selectedObject.departure_date).format("HH:mm")}
                disabled
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label className="mb-1">
                Passengers <span>*</span>
              </label>
              <input
                type="number"
                name="seats_booked"
                max={selectedObject.available_seats}
                placeholder="Passengers"
                value={selectedObject.seats_booked}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 mt-3 input-icon">
              <label className="mb-1">Total Price</label>
              <input
                disabled
                type="number"
                value={
                  +selectedObject.seats_booked *
                    +selectedObject.cost_per_seat ?? 0
                }
              />
              <i>£</i>
            </div>
            <div className="col-12 mt-3">
              <label className="mb-1">Card Details *</label>
              <div className="card-field">
                <CardElement
                  options={{
                    hidePostalCode: true,
                    style: {
                      base: {
                        padding: "20px",
                        color: "#fff",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className=" text-center mb-3 mt-3">
              <button className="button w-100 ">
                {isLoadingCard ? "Processing..." : "Book Now"}
              </button>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default Flights;
