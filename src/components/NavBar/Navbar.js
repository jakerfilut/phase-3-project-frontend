import { React, useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTools, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cart, setDeptFilter }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo" to="/home" onClick={closeMobileMenu}>
            <FaTools />
            Hardware Store
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/home" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
                onClick={() => setDeptFilter("")}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/create"
                onClick={closeMobileMenu}
              >
                Add New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/orders"
                onClick={closeMobileMenu}
              >
                Order History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                <div className="layered">
                  <p className="cartTotal">{cart.length}</p>
                  <AiOutlineShoppingCart size={60} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
