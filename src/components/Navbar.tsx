import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../styling/Navbar.css";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropDown(false) : setDropDown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropDown(false) : setDropDown(false);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          LOCAL ADVISORY
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              {window.innerWidth < 960 ? (
                <>Events</>
              ) : (
                <>
                  Events <FaCaretDown className="fa-caret" />
                </>
              )}
            </Link>
            {dropDown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/auth/login"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
