import React, { Component } from "react";
import lightIcon from "../icons/icon-light.png";
import darkIcon from "../icons/icon-dark.png";
import { Link } from "react-router";

export class Navbar extends Component {
  // onQueryChange = (event) => {
  //   this.props.onQueryChange(event.target.value);
  //   console.log(event.target.value);
  // };
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <div className="container-fluid">
            <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
              <img
                src={this.props.mode === "light" ? lightIcon : darkIcon}
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  onClick={this.props.toggleMode}
                  style={{
                    backgroundColor: "#dc3545",
                    borderColor: "#dc3545",
                  }}
                />
              </div>

              <form className="d-flex" role="search">
                <input
                  className={`form-control me-2 bg-${
                    this.props.mode === "light" ? "light" : "dark"
                  } text-${this.props.mode === "light" ? "dark" : "light"}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="searchBox"
                  onChange={this.props.onQueryChange}
                />
                {this.props.query === "" ? (
                  <Link className="btn  btn-danger" to="/" type="submit">
                    Search
                  </Link>
                ) : (
                  <Link
                    className="btn  btn-danger"
                    to={`/query=${this.props.query}`}
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
  }
}

export default Navbar;
