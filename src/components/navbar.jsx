import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 m-0 bg-green-800 w-full">
        <nav className="flex justify-between items-center relative p-4 pl-20">
          {/* Logo */}
          <div className="w-20 py-5 text-green-800 font-bold text-3xl">
            <Link to="/" className="duration-300">
              <span className="text-white duration-300">Tápanyag</span>tudatos.
            </Link>
          </div>

          {/* Asztali menü */}
          <ul className="hidden lg:flex items-center space-x-6 pr-20 text-2xl">
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 ease-in duration-300"
              >
                Főoldal
              </Link>
            </li>
            <li>
              <Link
                to="/receptek"
                className="hover:text-emerald-500 ease-in duration-300"
              >
                Receptek
              </Link>
            </li>
            <li>
              <Link
                to="/kalkulator"
                className="hover:text-emerald-500 ease-in duration-300"
              >
                Kalkulátor
              </Link>
            </li>
            <li>
              <Link
                to="/bejelentkezes"
                className="bg-white text-green-800 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Bejelentkezés
              </Link>
            </li>
          </ul>

          {/* Mobil nézet - Hamburger ikon */}
          <div
            id="hamburger"
            className="lg:hidden cursor-pointer text-2xl z-50 relative"
            onClick={handleMenuToggle}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </div>

          {/* Mobil menü */}
          <div
            id="menu"
            className={`${
              menuOpen ? "fixed" : "hidden"
            } top-0 left-0 w-full h-full bg-green-800 flex flex-col justify-center items-center space-y-6 z-40`}
          >
            <ul className="text-white text-xl">
              <li className="py-10">
                <Link
                  to="/"
                  className="hover:text-emerald-500 ease-in duration-300"
                  onClick={handleMenuToggle}
                >
                  Főoldal
                </Link>
              </li>
              <li className="py-10">
                <Link
                  to="/receptek"
                  className="hover:text-emerald-500 ease-in duration-300"
                  onClick={handleMenuToggle}
                >
                  Receptek
                </Link>
              </li>
              <li className="py-10">
                <Link
                  to="/kalkulator"
                  className="hover:text-emerald-500 ease-in duration-300"
                  onClick={handleMenuToggle}
                >
                  Kalkulátor
                </Link>
              </li>
              <li className="py-10">
                <Link
                  to="/bejelentkezes"
                  className="hover:text-emerald-500 ease-in duration-300"
                  onClick={handleMenuToggle}
                >
                  Bejelentkezés
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
