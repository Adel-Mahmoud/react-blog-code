import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from "react-router-dom";
import Header from "../components/Header/frontend/Header";
import Footer from "../components/Footer/admin/Footer";
// import 'mdb-react-ui-kit/dist/js/mdb.min.js';

const UserLayout = ({ children }) => {
  const location = useLocation();
  let page = "single"; 
  if (location.pathname === "/") {
    page = "home";
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Blog App</title>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/8.1.0/mdb.min.css"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/8.1.0/mdb.umd.min.js"
          ></script>
        </Helmet>
      </HelmetProvider>
      { page === 'home' && <Header /> }
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
