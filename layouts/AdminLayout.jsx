import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { isSmallScreen, toggleSidebar } from "../utils/sidebarUtils";
import Navbar from "../components/Navbar/admin/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/admin/Footer";

const AdminLayout = ({ children }) => {
  useEffect(() => {
    if (isSmallScreen()) {
      toggleSidebar(); 
    }
  }, []);
  return (
    <> 
      {/* <HelmetProvider>
        <Helmet>
          <title>Cpanel Blog App</title>
          <link rel="stylesheet" href="/assets/vendor/fonts/boxicons.css" />
          <link rel="stylesheet" href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
          <script src="/assets/vendor/js/helpers.js"></script>
          <script src="/assets/js/config.js"></script>
        </Helmet>
      </HelmetProvider> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar toggleMenu={toggleSidebar}/>
          <div className="layout-page">
            <Navbar toggleMenu={toggleSidebar}/>
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                {children}
                </div>
              </div>
            <Footer />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
        <div onClick={toggleSidebar} className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
};

export default AdminLayout;
