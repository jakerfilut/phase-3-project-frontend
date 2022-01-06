import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ items }) {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 50 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo" to="/home">
            <FaTools />
            Hardware Store
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-links" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/create">
                Add New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links">
                Cart <AiOutlineShoppingCart size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/orders">
                Order History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
