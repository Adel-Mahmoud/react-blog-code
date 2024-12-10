// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { useLocation } from "react-router-dom";
import Navbar from '../../Navbar/frontend/Navbar';
import './Header.css';

const header = () => {
  const location = useLocation();
  let page = "single"; 
  if (location.pathname === "/") {
    page = "home";
  }
  return (
    <>
      <header>
        <Navbar/>
        { page == 'home' && (
        <div
          id="introCarousel"
          className="carousel slide carousel-fade shadow-2-strong"
          data-mdb-carousel-init
        >
          <div className="carousel-indicators">
            <li
              data-mdb-target="#introCarousel"
              data-mdb-slide-to="0"
              className="active"
            ></li>
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center" data-mdb-theme="dark">
                    <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                    <h5 className="mb-4">
                      Best & free guide of responsive web design
                    </h5>
                    <a
                      className="btn btn-outline-light btn-lg m-2"
                      data-mdb-ripple-init
                      href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                      role="button"
                      rel="nofollow"
                      target="_blank"
                    >
                      Start tutorial
                    </a>
                    <a
                      className="btn btn-outline-light btn-lg m-2"
                      data-mdb-ripple-init
                      href="https://mdbootstrap.com/docs/standard/"
                      target="_blank"
                      role="button"
                    >
                      Download MDB UI KIT
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center">
                    <h2>You can place here any content</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="mask"
                style={{
                  background: "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7))"
                }}
                
              >
                <div
                  className="d-flex justify-content-center align-items-center h-100"
                  data-mdb-theme="dark"
                >
                  <div className="text-white text-center">
                    <h2>And cover it with any mask</h2>
                    <a
                      className="btn btn-outline-light btn-lg m-2"
                      data-mdb-ripple-init
                      href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
                      target="_blank"
                      role="button"
                    >
                      Learn about masks
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#introCarousel"
            role="button"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#introCarousel"
            role="button"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        )}
      </header>
    </>
  );
};

export default header;
