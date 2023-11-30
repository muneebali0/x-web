import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-color" id="contactus">
      <div className="container customer_card ">
        <div className="row ">
          <div className="text-center mt-2 mb-3 ">
            <div className="recent-text p_text lh-sm">
              Contact <span className="contact_text">Us</span>
            </div>
            <div className="text-center p_text mt-3">
              <p>
              Our dedicated support team is ready to assist you and provide the best IT solutions tailored to your needs. Contact us today and let's build a seamless digital experience together!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <input type="text" placeholder="Name" className="w-75 mb-5" />
            <input type="email" placeholder="E-mail" className="w-75 mb-5" />
            <textarea
              type="text"
              className="w-75 mb-4"
              row="15"
              placeholder="Message"
            />
            <div className=" form-check col-md-12">
              <label>
                <input
                  type="checkbox"
                  className="form-check-input form-check-icon"
                  required=""
                />
                <div className="mt-1">
                  <h3>I would like to receive the newsletter.</h3>
                </div>
              </label>
            </div>
            <div className="submit__button mt-4 mb-3">
              <button type="button" className="button-trigger">
                Submit
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
              width="473px"
              height="229px"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <div className="d-flex mt-4">
              <i className="fa-solid fa-location-dot icon-2"></i>
              <p className="ps-2">NYC, Australia</p>
            </div>
            <a href="tel:+92 303 9099 623" className="d-flex ">
              <i className="fa-solid fa-phone icon-2"></i>
              <p className="ps-2">+92 303 9099 623</p>
            </a>
            <a href="mailto:aamirraza@gmail.com" className="d-flex ">
              <i className="fa-regular fa-envelope icon-2"></i>
              <p className="ps-2">aamirraza@gmail.com</p>
            </a>
            <div className="d-flex mb-4  ">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook icon-2 me-2"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram icon-2 mx-2"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fa-brands fa-twitter icon-2 mx-2"></i>
              </a>
              <a href="https://dribbble.com/">
                <i className="fa-brands fa-dribbble icon-2 mx-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
