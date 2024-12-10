import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-6 gx-5 mb-4">
            <div
              className="bg-image hover-overlay shadow-2-strong"
              data-mdb-ripple-init
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/slides/031.jpg"
                style={{width:'100%',height:'100vh'}}
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </div>

          <div className="col-md-6 gx-5 mb-4">
            <h4>
              <strong>About</strong>
            </h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias, unde optio
              accusantium soluta, iusto molestiae adipisci et?
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
