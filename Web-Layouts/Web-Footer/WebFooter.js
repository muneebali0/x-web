export default function WebFooter() {
  return (
    <footer className="footer-bg ">
      <div className="container-fuild pageWrapper mb-3">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mt-5 ">
            <a href="/">
              <img src="images/logo.png" className="img-fuild  mb-3" />
            </a>
            <br />
            <span>XAir Technologies</span>
            <br />
            <span className="d-flex icon-footer">
              <i class="fa-brands fa-facebook me-3 mt-4 pointer"></i>
              <i class="fa-brands fa-twitter me-3 mt-4 pointer"></i>
              <i class="fa-brands fa-linkedin me-3 mt-4 pointer"></i>
              <i class="fa-brands fa-instagram me-3 mt-4 pointer"></i>
            </span>
          </div>
          <div className="col-12 col-md-2 mt-5 ">
            <h4 className="font-bold mb-3 foot-p-text">Solutions</h4>
            <p className="pointer">Cost Sharing</p>
            <p className="pointer">Ride Hailing App</p>
            <p className="pointer">Taxi Partnerships</p>
          </div>
          <div className="col-12 col-md-3 mt-5 ">
            <h4 className="font-bold mb-3 foot-p-text">Company</h4>
            <p className="pointer">About</p>
            <p className="pointer">Partners</p>
            <p className="pointer">Careers</p>
            <p className="pointer">Press & Media</p>
          </div>
          <div className="col-12 col-md-4  mt-5 ">
            <h5 className="font-bold">Subscribe to our newsletter</h5>
            <div className="position-relative mb-3 mt-3">
              <input type="email" placeholder="Enter you email" />
              <a>
                <button className="_f-button button">Subscribe Now</button>
              </a>
            </div>
            <h6>
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-3 mb-3 text-center">
        <h6>© 2023 XAir Technologies. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}
