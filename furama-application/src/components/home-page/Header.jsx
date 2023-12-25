import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">
              Easiest way to find your
              <span className="text-primary"> vacation room</span>
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <a href className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item" style={{ height: 800 }}>
                <img
                  alt="nav1"
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "assets/img/maldives.jpeg"}
                />
              </div>
              <div className="owl-carousel-item" style={{ height: 800 }}>
                <img
                  alt="nav2"
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "assets/img/maldives2.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
