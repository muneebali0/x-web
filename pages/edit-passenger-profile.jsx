import React, { useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function EditPassengerProfile() {
  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 ">
              <h4 className="text-center ">Edit Profile</h4>
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Last Name <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Phone Number <span>*</span>
              </label>
              <input
                type="number"
                name="email"
                placeholder=" Phone Number"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Date of birth <span>*</span>
              </label>
              <input
                type="date"
                name="email"
                placeholder=" Phone Number"
                required
              />
            </div>
            <div className="col-12 col-md-5  mt-3">
              <label className="mb-1">
                Email <span>*</span>
              </label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="col-12 col-md-5  mt-3">
              <label className="mb-1">
                Address <span>*</span>
              </label>
              <input type="text" name="email" placeholder="Address" required />
            </div>

            <div className="col-12 col-md-10  mt-3">
              <label className="mb-1">
                Password <span>*</span>
              </label>
              <input
                type="Password"
                name="Password"
                placeholder="Password"
                required
              />
            </div>
            <div className="col-12 col-md-10  mt-3">
              <a>
                <button className="button w-100"> Submit</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
