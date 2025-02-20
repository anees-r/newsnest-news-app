import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Welcome from "./components/Welcome";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "#212529";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar
            mode={this.state.mode}
            toggleMode={this.toggleMode}
            onQueryChange={(e) => {
              this.setState({
                query: e.target.value,
              });
            }}
            query={this.state.query}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Welcome mode={this.state.mode} />
                  <Home mode={this.state.mode} />
                </>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  category="business"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  category="entertainment"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  category="health"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  category="science"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  category="sports"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  category="technology"
                  pageSize="20"
                  mode={this.state.mode}
                  title="Category - NewsNest"
                />
              }
            />
            {this.state.query !== "" && (
              <Route
                exact
                path={`/query=${this.state.query}`}
                element={
                  <News
                    category="general"
                    pageSize="20"
                    query={`&q=${this.state.query}`}
                    mode={this.state.mode}
                    title={`'${this.state.query}' - NewsNest`}
                  />
                }
              />
            )}
            {this.state.query === "" && (
              <Route
                exact
                path={"/query"}
                element={<Home mode={this.state.mode} />}
              />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
