import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-6 gx-5 mb-4 d-flex justify-content-center align-items-center">
            <form style={{ width: "26rem" }}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form4Example2">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Message
                </label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary btn-block mb-4"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6 gx-5 mb-4">
            <div
              className="bg-image hover-overlay shadow-2-strong"
              data-mdb-ripple-init
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/slides/031.jpg"
                style={{ width: "100%", height: "100vh" }}
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
