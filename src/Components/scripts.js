import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";

function Toggle() {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const handleOverlayClick = () => {
    setIsNavBarOpen(false);
  };
  return (
    <div className="Script">
      <nav className={isNavBarOpen ? 'open' : ''}>
      <div className="logo">
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
        />
        <i className="bx bx-menu menu-icon" onClick={handleMenuClick}></i>
        <span className="logo-name">Medline</span>
        </div>
        <Sidebar />
      </nav>

      <div className="overlay" onClick={handleOverlayClick}>
        {
          <div>
          <section className="overlay"></section>
          </div>
        }
      </div>
    </div>
  );
}


export default Toggle;

