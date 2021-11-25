import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Logo from "./digimon_logo.png";
import Digicards from "./pages/Digicards";
import Digisearch from "./pages/Digisearch";
import Cardsdetails from "./pages/Cardsdetails";
import Searchdetails from "./pages/Searchdetails";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="containerhead">
          <img src={Logo} alt="Logo" height={65} width={156} />
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/digicards" element={<Digicards />}></Route>
          <Route path="/search" element={<Digisearch />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/Cardsdetails/:name/:itemcardnumber"
            element={<Cardsdetails />}
          ></Route>
          <Route
            path="/Searchdetails/:name/:itemcardnumber"
            element={<Searchdetails />}
          ></Route>
        </Routes>
      </div>
      <footer className="footer">
        <div className="containernav">
          <NavLink to="/home" className="iconwrapper">
            Home
          </NavLink>
          <NavLink to="/digicards" className="iconwrapper">
            DigiCards
          </NavLink>
          <NavLink to="/search" className="iconwrapper">
            DigiSearch
          </NavLink>
          <NavLink to="/about" className="iconwrapper">
            About
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
