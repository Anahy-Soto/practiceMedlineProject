import React from "react";
import '../styles.css';

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
                <a href="/index.html" className="nav-link">
                <i className="bx bx-home-alt icon"></i>
                <span className="link">Dashboard</span>
                </a>
            </li>
            <li class="list">
                <a href="/Archives.html" className="nav-link">
                    <i class="bx bx-box icon"></i>
                    <span className="link">Archives</span>
                </a>
                </li>
            </ul>
            <div className="lists">
            <li className="list">
                <a href="/" className="nav-link settings">
                <i className="bx bx-cog icon"></i>
                <span className="link">Settings</span>
                </a>
            </li>
            <li className="list">
                <a href="/" className="nav-link logout">
                <i className="bx bx-log-out icon"></i>
                <span className="link">Logout</span>
                </a>
            </li>
            </div>
        </div>
        <section className="overlay"></section>;
        </div>
  );
};
export default Sidebar;
