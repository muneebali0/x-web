import React, { useEffect, useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import GeneralCkeditor from "../component/GeneralCkeditor";
import { useSnackbar } from "notistack";
import { _add_flight } from "../DAL/flights";
import { _airports_list } from "../DAL/airports";
import { useRouter } from "next/router";

export default function AddFlight() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const [airports, setAirports] = useState([]);

  const [inputs, setInputs] = useState({
    available_seats: 0,
    cost_per_seat: 0,
    departure_airport: "",
    return_airport: "",
    note: "",
    flight_date: "",
    flight_time: "",
    status: true,
  });

  const get_airports_list = async () => {
    const result = await _airports_list();
    if (result.code === 200) {
      setAirports(result.airports);
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((old) => {
      return { ...old, [name]: value }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      available_seats: inputs.available_seats,
      cost_per_seat: inputs.cost_per_seat,
      departure_airport: inputs.departure_airport,
      return_airport: inputs.return_airport,
      note: inputs.note,
      departure_date: inputs.flight_date + " " + inputs.flight_time,
      status: true,
    };

    const result = await _add_flight(formData);
    if (result.code === 200) {
      enqueueSnackbar(result.message, { variant: "success" });
      router.push("/pilot-flights");
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get_airports_list();
  }, []);

  console.log(inputs, "inputsinputsinputsinputsinputs");

  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <form
            className="row justify-content-center align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="col-12 ">
              <h4 className="text-center ">Add Flight</h4>
            </div>
            <div className="col-12 col-md-5 mt-3">
              <label className="mb-1">
                Departure <span>*</span>
              </label>
              <select
                value={inputs.departure_airport}
                name="departure_airport"
                onChange={handleChange}
                required
              >
                <option value="" disabled  key="www">
                  Choose Departure *
                </option>
                {airports.length > 0 &&
                  airports.map((airport) => {
                    return <option value={airport._id} key={airport._id}>{airport.title}</option>;
                  })}
              </select>
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Return <span>*</span>
              </label>
              <select
                value={inputs.return_airport}
                name="return_airport"
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Choose Return *
                </option>
                {airports.length > 0 &&
                  airports.map((airport) => {
                    return <option value={airport._id} key={airport._id}>{airport.title}</option>;
                  })}
              </select>
            </div>

            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Number of Seats <span>*</span>
              </label>
              <input
                type="number"
                name="available_seats"
                value={inputs.available_seats}
                onChange={handleChange}
                placeholder="  Number Seats"
                required
              />
            </div>
            <div className="col-12 col-md-5  input-icon mt-3">
              <label className="mb-1">
                Payable Amount Per Seat <span>*</span>
              </label>
              <input
                type="number"
                name="cost_per_seat"
                value={inputs.cost_per_seat}
                onChange={handleChange}
                placeholder="Payable Amount Per Seat"
                required
              />
              <i>£</i>
            </div>
            <div className="col-12 col-md-5  input-icon mt-3">
              <label className="mb-1">
                Flight Date <span>*</span>
              </label>
              <input
                type="date"
                required
                name="flight_date"
                value={inputs.flight_date}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-5  input-icon mt-3">
              <label className="mb-1">
                Flight Time <span>*</span>
              </label>
              <input
                type="time"
                name="flight_time"
                value={inputs.flight_time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 col-md-10  mt-3">
              <label className="mb-1">Flight Note</label>
              <GeneralCkeditor
                setInputs={setInputs}
                inputs={inputs}
                name="note"
                editorHeight={320}
              />
            </div>
            <div className="col-12 col-md-10  mt-3">
              <button className="button w-100">
                {isloading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
