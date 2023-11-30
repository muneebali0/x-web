import React, { useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import { useSnackbar } from "notistack";
import { _signup_customer } from "../DAL/register";
import Link from "next/link";
import { useContentContext } from "../Hooks/ContentContext";
import { useRouter } from "next/router";

export default function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const { handleUserInfo } = useContentContext();
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    user_type: "passenger",
    is_certified: true,
    have_night_rating: true,
    certificate_image: {},
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    console.log(value, "valuevaluevaluevaluevalue");
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("first_name", inputs.first_name);
    formData.append("last_name", inputs.last_name);
    formData.append("password", inputs.password);
    formData.append("email", inputs.email);
    formData.append("phone_number", inputs.phone_number);
    formData.append("date_of_birth", inputs.date_of_birth);
    formData.append("user_type", inputs.user_type);
    if (inputs.user_type == "pilot") {
      formData.append("is_certified", inputs.is_certified);
      formData.append("have_night_rating", inputs.have_night_rating);
      if (inputs.is_certified == true) {
        console.log(inputs.is_certified, "inputs.is_certified");
        formData.append("certificate_image", inputs.certificate_image);
      }
      if (inputs.have_night_rating == true) {
        console.log(inputs.have_night_rating, "inputs.have_night_rating");
        formData.append("night_rating_file", inputs.night_rating_file);
      }
    }

    const result = await _signup_customer(formData);
    if (result.code === 200) {
      handleUserInfo(result.user);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_info", JSON.stringify(result.user));
      enqueueSnackbar(result.message, { variant: "success" });
      router.push("/flights");
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedOption, setSelectedOption] = useState("false");
  const [selectedOption1, setSelectedOption1] = useState("no");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChangeSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  console.log(inputs, "inputsinputsinputsinputsinputs");

  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 ">
              <h4 className="text-center ">Register</h4>
            </div>
            <div className="col-10 mx-auto">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    autoComplete="off"
                    value={inputs.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    autoComplete="off"
                    value={inputs.last_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="number"
                    name="phone_number"
                    placeholder="Phone Number *"
                    required
                    autoComplete="off"
                    value={inputs.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    Date of Birth <span>*</span>
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of Birth +"
                    required
                    autoComplete="off"
                    value={inputs.date_of_birth}
                    onChange={handleChange}
                  />
                </div>

                {/* {selectedValue === "a" && (
                  <div className="col-12 col-md-6 mt-3">
                    <label className="mb-1">
                      AirPorts List <span>*</span>
                    </label>
                    <select
                      value={selectedOption}
                      onChange={handleChangeSelect}
                      required
                    >
                      <option value="true">text</option>
                      <option value="false" selected>
                        text
                      </option>
                    </select>
                  </div>
                )} */}
                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    autoComplete="off"
                    required
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label className="mb-1">
                    Password <span>*</span>
                  </label>
                  <input
                    type="Password"
                    name="password"
                    placeholder="Password *"
                    autoComplete="off"
                    required
                    value={inputs.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mt-3">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      I am a
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="user_type"
                      value={inputs.user_type}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="passenger"
                        control={
                          <Radio
                            value="passenger"
                            inputProps={{ "aria-label": "Passenger" }}
                          />
                        }
                        label="Passenger"
                        onSelect={true}
                      />
                      <FormControlLabel
                        value="pilot"
                        control={
                          <Radio
                            value="pilot"
                            inputProps={{ "aria-label": "Pilot" }}
                          />
                        }
                        label="Pilot"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {inputs.user_type === "pilot" && (
                  <>
                    <div className="col-12 col-md-6 mt-3">
                      <label className="mb-1">
                        Do you have a piolat license <span>*</span>
                      </label>
                      <select
                        value={inputs.is_certified}
                        onChange={handleChange}
                        required
                        name="is_certified"
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    {(inputs.is_certified == true ||
                      inputs.is_certified == "true") && (
                      <div className={"col-12 col-md-6 mt-3"}>
                        <label htmlFor="certificate_image">
                          Piolat License
                        </label>
                        <input
                          type="file"
                          id="certificate_image"
                          name="certificate_image"
                          onChange={handleChangeFile}
                        />
                      </div>
                    )}
                    <div className="col-12 col-md-6 mt-3">
                      <label className="mb-1">
                        Do you have night rating <span>*</span>
                      </label>
                      <select
                        value={inputs.have_night_rating}
                        onChange={handleChange}
                        required
                        name="have_night_rating"
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    {(inputs.have_night_rating == true ||
                      inputs.have_night_rating == "true") && (
                      <div className={"col-12 col-md-6 mt-3"}>
                        <label htmlFor="night_rating_file">Night Rating</label>
                        <input
                          type="file"
                          id="night_rating_file"
                          name="night_rating_file"
                          onChange={handleChangeFile}
                        />
                      </div>
                    )}
                  </>
                )}
                <div className="col-12 mt-3">
                  <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="I agree with terms and conditions"
                    checked
                  />
                </div>

                <div className="col-12 mt-3">
                  <button className="button w-100" disabled={isloading}>
                    {isloading ? "Loading..." : " Register"}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-10  mt-3">
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
