import React, { useState, useEffect, useRef } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import HeroSection from "../component/HeroSection";
import OurServices from "../component/OurServices";
import AboutUs from "../component/AboutUs";
import OurCustomer from "../component/OurCustomer";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import Faq from "../component/Faq";
import OurApp from "../component/OurApp";
import PaymentPlan from "../component/paymentplan";

export default function Home() {
  return (
    <>
      <WebHeader />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <PaymentPlan />
      <OurCustomer />
      <Faq />
      <OurApp />
      <WebFooter />
    </>
  );
}
