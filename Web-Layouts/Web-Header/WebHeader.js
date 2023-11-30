import Link from "next/link";
import { useState, useEffect } from "react";
import AccountPopover from "../../component/AccountPopover";
import { useContentContext } from "../../Hooks/ContentContext";

export default function WebHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [click, setClick] = useState(false);
  const { userInfo } = useContentContext();
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setClick(!click);
  };

  const tabClose = () => {
    setToggleMenu(!toggleMenu);
    setClick(!click);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [toggleMenu]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  console.log(userInfo, "userInfouserInfouserInfouserInfouserInfo");

  return (
    <div>
      <div className=" classicHeader d-flex">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-2 col-lg-2 d-none d-lg-block">
              <Link href="/" className="pointer">
                <img src="images/logo.png" className="res_logo_img" />
              </Link>
            </div>
            <div className="col-10 col-md-10 col-lg-8 text-start">
              <div className="d-block d-lg-none">
                <div className="pointer">
                  <img src="images/logo.png" className="res_logo_img" />
                </div>
              </div>
              <nav className="grid__item d-lg-block d-none" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center siteNav ">
                  <li>
                    <Link className="pointer" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/flights" className="pointer">
                      Flights
                    </Link>
                  </li>
                  <li>
                    <Link className="pointer" href="/">
                      Information
                    </Link>
                  </li>
                  <li>
                    <Link className="pointer" href="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-2 col-md-2 col-lg-2 text-end ">
              <div className="site-cart d-block d-lg-none">
                <button
                  className="site-header__menu z-index-1"
                  onClick={toggleNav}
                >
                  <i className={click ? "fa fa-bars" : "fa fa-bars"}></i>
                </button>
              </div>

              {isLoaded && userInfo?.first_name ? (
                <AccountPopover />
              ) : (
                <Link href="/login" className="hide_icon">
                  <button className="button">Log In / Register</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-navbar-menu ${toggleMenu ? "open" : ""}`}>
        {(toggleMenu || screenWidth > 500) && (
          <>
            <div className={`closemobileMenu ${toggleMenu ? "open" : ""}`}>
              <i className="icon fa fa-times" onClick={tabClose}></i>
            </div>
            <ul id="MobileNav" className="mobile-nav">
              <li>
                <Link className="pointer" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/flights" className="pointer">
                  Flights
                </Link>
              </li>
              <li>
                <Link className="pointer" href="/">
                  Information
                </Link>
              </li>
              <li>
                <Link className="pointer" href="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="pointer">
                  Log In / Register
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
