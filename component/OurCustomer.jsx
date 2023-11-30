import React from "react";
import Slider from "react-slick";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";

const OurCustomer = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-color ">
      <div className="container-fuild pb-5 ">
        <div className="row pageWrapper pt-3 pb-5">
          <div className="col-12 pt-5">
            <h2>Testimonials</h2>
          </div>
          <Slider {...settings}>
            <div className="p-3">
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src="images/Ellipse 407.png" className="ing-fuild" />
                    </Avatar>
                  }
                  title="Sisaac"
                  subheader="CEO, XAir Technologies"
                />
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="p-3">
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src="images/Ellipse 407.png" className="ing-fuild" />
                    </Avatar>
                  }
                  title="Sisaac"
                  subheader="CEO, XAir Technologies"
                />
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="p-3">
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src="images/Ellipse 407.png" className="ing-fuild" />
                    </Avatar>
                  }
                  title="Sisaac"
                  subheader="CEO, XAir Technologies"
                />
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="p-3">
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src="images/Ellipse 407.png" className="ing-fuild" />
                    </Avatar>
                  }
                  title="Sisaac"
                  subheader="CEO, XAir Technologies"
                />
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </p>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurCustomer;
