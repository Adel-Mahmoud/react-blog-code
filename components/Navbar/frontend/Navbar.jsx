import { Link } from "react-router-dom";
import logo from '../../../assets/favicon.ico';
// import logo from '../../../assets/favicon.ico';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand me-2" to="/">
                        <img
                            src={logo}
                            height="16"
                            alt="Blog Logo"
                            loading="lazy"
                            style={{marginTop: '-1px',width: '30px',height: '30px'}}
                        />
                    </Link>
                    <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;