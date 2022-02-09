//NAVBAR COMPONENT

//IMPORTING
import React from 'react';
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import logo from './img/logo.png';

//NAVBAR
const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="z-50 w-full bg-white navbar-expand-lg bg-white fixed animated">
        <div className="w-full md:flex items-center justify-between px-8 md:px-12 border-b border-gray-200">
          <div className="flex justify-between items-center  lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              <img src={logo} alt="logo" />
            </a>
            <Burger className="lg:hidden px-3 py-3 text-gray-900 text-xs bg-blue-500" onClick={() => setNavbarOpen(!navbarOpen)} />
          </div>
          <div
            className={
              "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-4 w-full md:auto float-right md:my-0">
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-blue-600 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-blue-600 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#about"
                >
                  Sobre nós
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700  rounded no-underline hover:bg-blue-600 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#services"
                >
                  Serviços
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-blue-600 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#contact"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
