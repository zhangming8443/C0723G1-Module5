import React from "react";
import { toast } from "react-toastify";
import Footer from "../home-page/Footer";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import SpinnerCustom from "../home-page/SpinnerCustom";
import NavbarCustom from "../home-page/NavbarCustom";

export default function Contract() {
  return (
    <>
      <NavbarCustom />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Contracts</h1>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <NavLink to="/contracts/create">
                    <button className="btn btn-primary text-white">
                      Add new contract
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <table className="table">
                <thead className="table-light" />
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Date of birth</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
                <thead />
                <tbody>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                  <tr>
                    <td>Brandon Green</td>
                    <td>Male</td>
                    <td>19/09/1999</td>
                    <td>brandon94@example.com</td>
                    <td>0932837312</td>
                    <td>Europe</td>
                  </tr>
                </tbody>
                <tbody />
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
