import React, { useState } from "react";
import audiy from "../assets/img/audiy.png";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import Menu from "../assets/img/menu.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-10 bg-[#0E0E0E] sticky top-0 z-[99999] shadow-2xl">
      <div className="w-full h-full relative">
        <div
          className={`${styles.container} flex items-center justify-between`}
        >
          <Link to="/home">
            <img src={audiy} alt="" />
          </Link>

          {/* Responsiv menu uchun burger button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white top-0 focus:outline-none lg:hidden right-5 absolute z-[9999]"
            >
              {!isMenuOpen ? (
                <img className="w-6 h-6" src={Menu} alt="" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                </svg>
              )}
            </button>
          </div>
          {/* Navbar */}
          <nav
            className={`lg:items-center ${
              isMenuOpen
                ? "block absolute lg:static top-14 lg:top-0 lg:left-0 w-full lg:w-min lg:inline-block z-[999] left-0 h-screen lg:h-max"
                : "hidden lg:inline-block"
            }`}
          >
            <div
              className={`space-x-8 flex ${
                isMenuOpen
                  ? "flex-col p-5 lg:p-0 sticky top-0 z-[9999] lg:flex-row bg-black h-screen lg:h-0 space-y-20 lg:bg-transparent lg:space-y-0"
                  : "flex-row"
              }`}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className="inline-block text-white text-sm font-semibold active:text-[#D87D4A] pl-8"
                to="/home"
              >
                HOME
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className="inline-block text-white text-sm font-semibold active:text-[#D87D4A]"
                to="/headphones"
              >
                HEADPHONES
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className="inline-block text-white text-sm font-semibold active:text-[#D87D4A]"
                to="/speakers"
              >
                SPEAKERS
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className="inline-block text-white text-sm font-semibold active:text-[#D87D4A]"
                to="/earphones"
              >
                EARPHONES
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
