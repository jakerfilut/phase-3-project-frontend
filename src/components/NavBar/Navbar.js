import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTools } from "react-icons/fa";

function Navbar() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 50 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <a className="navbar-logo" href="#home">
            <FaTools />
            Hardware Store
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a className="nav-links" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-links">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a href="#cart" className="nav-links">
                Cart | 0 items <AiOutlineShoppingCart size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
