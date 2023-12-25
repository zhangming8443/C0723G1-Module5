import { Link } from "react-router-dom";

export default function NavbarCustom() {
  return (
    <>
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <img
              src={process.env.PUBLIC_URL + "assets/img/logo-furama.png"}
              style={{ width: 180 }}
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Manager
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/rooms">
                    <a href="/#" className="dropdown-item">
                      Room
                    </a>
                  </Link>

                  <Link to="/customers">
                    <a href="/#" className="dropdown-item">
                      Customer
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Service
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/contracts">
                    <a href="/#" className="dropdown-item">
                      Contract
                    </a>
                  </Link>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            {/* <a href className="btn btn-primary px-3 d-none d-lg-flex">
              Add Property
            </a> */}
          </div>
        </nav>
      </div>
    </>
  );
}
