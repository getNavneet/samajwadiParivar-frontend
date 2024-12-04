import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./animation.css";
import logo from "../../assets/samajwadiPartyLogo.png"
function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenuOnScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("scroll", closeMenuOnScroll);
    } else {
      window.removeEventListener("scroll", closeMenuOnScroll);
    }
    // Clean up the event listener when the component unmounts or menu closes
    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="min-h-14 sticky top-0 z-10  flex w-full items-center justify-between shadow "  style={{ backgroundColor: '#B22222' }}>
        <div className="p-2 pl-4 md:pl-12">
         <img src={logo} alt="Logo" className="w-28 md:w-28 lg:w-28 h-auto rounded-lg"  />
        </div>
        {/* /humburger menu */}
        <div className="md:hidden float-right mr-8">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`lg:mr-16 m-auto font-semibold text-lg hidden sm:block  `}
        >
          <ul className="flex px-3 space-x-7 text-green  ">
            <li>
              <NavLink
                to="/"
                className={`${
                  location.pathname === "/" && !location.hash
                    ? "text-gray-200 underline"
                    : "hover:text-gray-400 hover:underline"
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 underline"
                    : "hover:text-red-600 hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/latest"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 underline"
                    : "hover:text-red-600 hover:underline"
                }
              >
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 underline"
                    : "hover:text-red-600 hover:underline"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
      </nav>
      {isOpen && (
        <div
          className={`fixed top-14  right-4 z-30  float-right shadow-lg ${
            isOpen ? "menu-enter" : "menu-exit"
          }`}

        >
          <ul className="text-center flex flex-col space-y-4 py-4 text-gray-200">
            <li className="border-red-900 border-2 py-1"
            style={{ backgroundColor: '#B22222' }}
            >
              <NavLink
                to="/"
                className="border-red-900 px-20"
                activeClassName="text-blue-600"
                onClick={toggleMenu}
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="border-red-900 border-2 py-1" 
            style={{ backgroundColor: '#B22222' }}
            >
              <NavLink
                to="/about"
                className="border-red-900 px-20"
                activeClassName="text-blue-600"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className=" border-red-900 border-2 py-1"
            style={{ backgroundColor: '#B22222' }}
            >
            <NavLink
                to="/latest"
                className="border-gray-500 px-20"
                activeClassName="text-blue-600"
                onClick={toggleMenu}
              >
                Latest
              </NavLink>
            </li>
            <li className=" border-red-900 border-2 py-1"
            style={{ backgroundColor: '#B22222' }}
            >
            <NavLink
                to="/contact"
                className="border-gray-500 px-20"
                activeClassName="text-blue-600"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
