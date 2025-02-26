// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Calculator from "./components/calculator";
import Login from "./components/login";
import Register from "./components/register"; // Importáljuk a Register komponenst
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receptek" element={<Recipes />} />
            <Route path="/kalkulator" element={<Calculator />} />
            <Route path="/bejelentkezes" element={<Login />} />
            <Route path="/regisztracio" element={<Register />} /> {/* Hozzáadjuk az új útvonalat */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
