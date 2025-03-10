import React from "react";
import newsNestIcon from "../icons/icon-danger.png";
import { Link } from "react-router";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
            <img
              src={newsNestIcon}
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{
                  backgroundColor: "#dc3545",
                  borderColor: "#dc3545",
                }}
              />
            </div>

            <form className="d-flex" role="search">
              <input
                className={`form-control me-2 bg-${
                  props.mode === "light" ? "light" : "dark"
                } text-${props.mode === "light" ? "dark" : "light"}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchBox"
                onChange={props.onQueryChange}
              />
              {props.query === "" ? (
                <Link className="btn  btn-danger" to="/" type="submit">
                  Search
                </Link>
              ) : (
                <Link
                  className="btn  btn-danger"
                  to={`/query=${props.query}`}
                  type="submit"
                >
                  Search
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
