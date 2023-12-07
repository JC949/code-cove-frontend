import React from "react";
import Footer from "./Footer";
import "../css/NavBar.css";
import NavBar from "./NavBar";

// Component for both nav bar and footer implementation
const CommonLayout = ({ children }) => {
  return (
    <div className="common-layout">
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
