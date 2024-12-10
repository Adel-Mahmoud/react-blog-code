import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";
import { LoadingProvider } from "./contexts/LoadingContext";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <LoadingProvider>
        <Loading/>
        <ToastContainer />
        <Router basename="/[react-blog]">
          <AppRoutes />
        </Router>
      </LoadingProvider>
    </>
  )
}

export default App
