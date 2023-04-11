import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import "./App.scss";

import Countries from "./components/countries";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <button className="toggle__btn">
          <FaMoon className="toggle__btn--icon" />
          Dark Mode
        </button>
      </header>

      <main>
        <SearchFilter />

        <Routes>
          <Route
            path="/"
            element={<Countries />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
