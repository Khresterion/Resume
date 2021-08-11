import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          Home
        </NavLink>
      </ul>
      <NavLink
        to="/skills"
        exact
        className="hover"
        activeClassName="nav-active"
      >
        Skills
      </NavLink>
      <ul>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Resume</li>
            </NavLink>
            <NavLink
              to="/project-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Shop app</li>
            </NavLink>
            <NavLink
              to="/project-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>LogOn</li>
            </NavLink>
            <NavLink
              to="/project-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>WTF !</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
