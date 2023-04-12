import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import "./App.scss";

import Countries from "./components/countries";
import SearchFilter from "./components/SearchFilter";
import CountryArticle from "./components/CountryArticle";

function App() {
  const [params, setParams] = useState(null);

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
        {!params && <SearchFilter />}

        <Routes>
          <Route
            path="/"
            element={<Countries setParams={setParams}/>}
          />
          <Route
            path="/:name"
            element={<CountryArticle setParams={setParams} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
