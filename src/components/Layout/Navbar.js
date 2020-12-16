import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import icon from "../../Images/icon.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center" }}
        className="icon"
      >
        <Navbar.Brand className="nav-title">
          <img src={icon} alt="" className="nav-icon" /> COVID-19 Live Updates
        </Navbar.Brand>
      </Link>
      <Nav
        style={{
          fontSize: "20px",
        }}
      >
        <Link
          to="symptoms"
          style={{ color: "gray", margin: "0 15px" }}
          className="link"
        >
          Symptoms
        </Link>
        <Link
          to="/about"
          style={{ color: "gray", margin: "0 15px" }}
          className="link"
        >
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
