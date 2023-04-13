import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import "./App.scss";

import Countries from "./components/countries";
import SearchFilter from "./components/SearchFilter";
import CountryArticle from "./components/CountryArticle";
import { useGlobalContext } from "./AppContext/AppContext";
function App() {
  // const { toggle } = useGlobalContext();
  const [params, setParams] = useState(null);
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div className={`App ${toggle === true ? "" : "light-mode"}`}>
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <button
          className="toggle__btn"
          onClick={() => setToggle((prev) => !prev)}
        >
          <FaMoon className="toggle__btn--icon" />
          Dark Mode
        </button>
      </header>

      <main>
        {!params && <SearchFilter />}

        <Routes>
          <Route
            path="/"
            element={<Countries setParams={setParams} />}
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
