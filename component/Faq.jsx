import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="container-fluid " id="faq">
      <div className="row mt-5 mb-5 pageWrapper">
        <div className="col-12 text-center">
          <h3>FAQ</h3>
          <h2>Frequently asked questions </h2>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">What is a cost sharing platform?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">How do I get set up?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">How do these flights work?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">Do you have a ride hailing app?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">Who can apply?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="pt-2">I have further questions?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A cost sharing platform is a home to Pilots and Passengers who
                wish to share the cost of flight. This means the direct costs of
                flight will be divided across the passengers.Meaning everyone
                can fly cost effectively.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
