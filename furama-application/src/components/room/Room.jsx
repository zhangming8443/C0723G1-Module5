import React from "react";
import { toast } from "react-toastify";
import Header from "../home-page/Header";
import Footer from "../home-page/Footer";
import NavbarCustom from "../home-page/NavbarCustom";
import { useNavigate, NavLink, useParams } from "react-router-dom";

export default function Room() {
  return (
    <>
      <Header />
      <NavbarCustom />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Rooms</h1>
              </div>
            </div>

            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <NavLink to="/rooms/create">
                    <button className="btn btn-primary text-white">
                      Add new room
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room1"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Sell
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Appartment
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room2"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Rent
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Villa
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room3"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Sell
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Office
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room4"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Rent
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Building
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room5"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Sell
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Home
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room16"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Rent
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Shop
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room7"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Sell
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Home
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href>
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
                          alt="room8"
                        />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        For Sell
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Home
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">$12,345</h5>
                      <a className="d-block h5 mb-2" href>
                        Golden Urban House For Sell
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        1000 Sqft
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
