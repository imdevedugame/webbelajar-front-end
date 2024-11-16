import React, { useState } from "react";

// Trigger Button Component
function TriggerButton({ isOpen, onClick }) {
  return (
    <div className="block sm:hidden">
      <button type="button" onClick={onClick}>
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {!isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

// Menu Component
function Menu({ isOpen }) {
  return (
    <div
      className={` ${
        isOpen ? " right-0 " : "-right-[100%] "
      }absolute bg-black/50 sm:bg-white top-0 z-50 mt-[10vh] w-full sm:w-auto h-[90vh] sm:h-fit sm:mt-0 sm:static flex sm:block justify-end transition-all`}
    >
      <ul className=" bg-white w-1/4 h-full flex flex-col sm:flex-row text-center text-lg  items-center space-y-6 sm:space-y-0 sm:space-x-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

// Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={` bg-white text-black font-serif w-full fixed top-0 z-50 transition-all duration-300 ease-in-out shadow-md`}
    >
      <div className="container mx-auto h-[10vh] px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
        {/* Brand/Logo */}
        <div>
          <h1 className="font-bold text-2xl">DU</h1>
        </div>

        {/* Trigger Button */}
        <TriggerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

        {/* Menu */}
        <Menu isOpen={isOpen} />
      </div>
    </nav>
  );
}
