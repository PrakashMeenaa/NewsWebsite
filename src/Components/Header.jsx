import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuRef = useRef();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-20" ref={menuRef}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/Home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/NewsLogo.png"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PNews
            </span>
          </a>
          <button
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 
                9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 
                24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47
                 39 L 3 39 z"
              ></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className=" absolute top-14 left-0 md:hidden sm:duration-500 w-full md:w-auto ">
              <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 bg-white  dark:bg-gray-800  dark:border-gray-700">
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white ">
                  Home
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/business"
                >
                  Business
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/entertainment"
                >
                  Entertainment
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/general"
                >
                  General
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/health"
                >
                  Health
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/science"
                >
                  Science
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/sports"
                >
                  Sports
                </Link>
                <Link
                  className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                  to="/technology"
                >
                  Technology
                </Link>
                <Link className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                to='/About'>
                  About
                </Link>
                <Link className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-200  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white "
                 to='/Contact'>
                  Contact
                </Link>
              </ul>
            </div>
          )}
          <div className=" hidden   sm:duration-500 w-full md:block md:w-auto">
            <ul className="font-medium flex p-0  border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0  bg-white  dark:bg-gray-900 dark:border-gray-700">
              <Link
                className=" nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/Home"
              >
                Home
              </Link>
              <Link
                className=" nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/business"
              >
                Business
              </Link>
              <Link
                className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/entertainment"
              >
                Entertainment
              </Link>

              <Link
                className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/health"
              >
                Health
              </Link>
              <Link
                className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/science"
              >
                Science
              </Link>
              <Link
                className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                to="/sports"
              >
                Sports
              </Link>
              <Link
                className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent sm:hidden lg:flex"
                to="/technology"
              >
                Technology
              </Link>
              <Link className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent sm:hidden lg:flex"
              to='/About'>
                About
              </Link>
              <Link className="nav-link hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent sm:hidden lg:flex"
              to='/Contact'>
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
