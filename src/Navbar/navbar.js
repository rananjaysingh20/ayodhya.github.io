import React, { useState } from "react";
import "../styles/navbar.css";
import NavRotator from "../assets/navbar-rotator.png";
import { routes } from "../nav-routes";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="main-container">
      <nav className="navbar-container">
        <ul className={`menu ${isOpen ? "is-open-menu" : ""}`}>
          <li className="menu-trigger" onClick={toggleMenu}>
            H
          </li>
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li className={`menu-items ${isOpen ? "is-open" : ""}`}>
                <a href={href}>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="rotating">
        <img className="rotating-image" src={NavRotator} alt="null" />
      </div>
    </div>
  );
};
