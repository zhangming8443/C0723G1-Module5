import Footer from "../home-page/Footer";
import NavbarCustom from "../home-page/NavbarCustom";
export default function AddNewService() {
  return (
    <>
      <NavbarCustom />
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Update room</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-12">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="roomName"
                          placeholder="Room Name"
                        />
                        <label htmlFor="roomName">Room Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select id="roomType" className="form-control">
                          <option>Select Type</option>
                          <option>Superior</option>
                          <option>Deluxe</option>
                          <option>Suite</option>
                          <option>Junior Suite</option>
                          <option>Executive</option>
                          <option>Premier</option>
                          <option>King</option>
                          <option>Twin bed room</option>
                        </select>
                        <label htmlFor="roomType">Room Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="area"
                          placeholder="Area"
                        />
                        <label htmlFor="area">Area</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          placeholder="Price"
                        />
                        <label htmlFor="price">Price</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="description"
                          style={{ height: 150 }}
                          defaultValue={""}
                        />
                        <label htmlFor="description">Description</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
