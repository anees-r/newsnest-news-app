import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Welcome from "./components/Welcome";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "#f8f9fa";
    }
  };

  const setNewProgress = (prog) => {
    setProgress(prog);
  };

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          color="#dc3545"
          progress={progress}
          onLoaderFinished={() => {}}
        />
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          onQueryChange={(e) => {
            setQuery(e.target.value);
          }}
          query={query}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Welcome mode={mode} />
                <Home mode={mode} setNewProgress={setNewProgress} />
              </>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setNewProgress={setNewProgress}
                key="business"
                category="business"
                pageSize="12"
                mode={mode}
                title="Business - NewsNest"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setNewProgress={setNewProgress}
                key="entertainment"
                category="entertainment"
                pageSize="12"
                mode={mode}
                title="Entertainment - NewsNest"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setNewProgress={setNewProgress}
                key="health"
                category="health"
                pageSize="12"
                mode={mode}
                title="Health - NewsNest"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setNewProgress={setNewProgress}
                key="science"
                category="science"
                pageSize="12"
                mode={mode}
                title="Science - NewsNest"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setNewProgress={setNewProgress}
                key="sports"
                category="sports"
                pageSize="12"
                mode={mode}
                title="Sports - NewsNest"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setNewProgress={setNewProgress}
                key="technology"
                category="technology"
                pageSize="12"
                mode={mode}
                title="Technology - NewsNest"
              />
            }
          />
          {query !== "" && (
            <Route
              exact
              path={`/query=${query}`}
              element={
                <News
                  setNewProgress={setNewProgress}
                  key={`&q=${query}`}
                  category="general"
                  pageSize="12"
                  query={`&q=${query}`}
                  mode={mode}
                  title={`'${query}' - NewsNest`}
                />
              }
            />
          )}
          {query === "" && (
            <Route exact path={"/query"} element={<Home mode={mode} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
