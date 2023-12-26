import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Navbar from "./NavbarCustom";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Search Keyword"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Popular Types</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/bed.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Superior</h6>
                  <span>10 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/hotel.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Deluxe</h6>
                  <span>10 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/suite.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Suite</h6>
                  <span>5 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/bed3.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Junior Suite</h6>
                  <span>50 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/bedroom.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Executive</h6>
                  <span>3 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/double-bed.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Premier</h6>
                  <span>3 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/bed2.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>King</h6>
                  <span>1 rooms</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href
              >
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/img/twin-beds.png"}
                      style={{ width: 45, height: 45 }}
                      alt="Icon"
                    />
                  </div>
                  <h6>Twin bed room</h6>
                  <span>5 rooms</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={process.env.PUBLIC_URL + "assets/img/maldives3.jpeg"}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">#1 Place To Find The Perfect Relaxation</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Tempor erat elitr rebum at clita
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Aliqu diam amet diam et eos
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-primary py-3 px-5 mt-3" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Popular rooms</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                          alt=""
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "assets/img/maldives-room1.jpeg"
                          }
                          style={{ width: 600, height: 400 }}
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
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <a className="btn btn-primary py-3 px-5" href>
                    Browse More Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
