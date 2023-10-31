import React from "react";
import "../styles.css";

function Sidebar() {
  return (

    <div className="sidebar">
    <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
    />
    <div className="logo">
        <i className="bx bx-menu menu-icon"></i>
        <span className="logo-name">Medline</span>
    </div>
    <div className="sidebar-content">
        <ul className="lists">
        <li className="list">
            <a href="/Homepage" className="nav-link">
            <i className="bx bx-home-alt icon"></i>
            <span className="link">Dashboard</span>
            </a>
        </li>
        <li class="list">
            <a href="/Archives" className="nav-link">
            <i class="bx bx-box icon"></i>
            <span className="link">Archives</span>
            </a>
        </li>
        <li class="list">
            <a href="/Homepage" className="nav-link">
            <i class="bx bx-plus-circle icon"></i>
            <span className="link">Create</span>
            </a>
        </li>
        </ul>
        <div className="bottom-content">
        <li className="list">
            <a href="/" className="nav-link logout">
            <i className="bx bx-log-out icon"></i>
            <span className="link">Logout</span>
            </a>
        </li>
        </div>
    </div>
    </div>

  );
}
export default Sidebar;
