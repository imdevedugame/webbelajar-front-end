import React, { useState } from "react";

// Trigger Button Component
function TriggerButton({ isOpen, onClick }) {
  return (
    <div className="block sm:hidden">
      <button
        type="button"
        className={isOpen ? "text-white" : "text-black"}
        onClick={onClick}
      >
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
      className={`bg-black/70 text-white sm:bg-transparent sm:text-black absolute z-10 sm:static h-[90dvh] sm:h-full inset-x-0 bottom-0 transition-all duration-300 ease-in-out sm:opacity-100 pointer-events-auto ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <ul className="flex flex-col sm:flex-row h-full text-center text-lg justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
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
      className={`${
        isOpen ? "bg-black/70 text-white" : "bg-transparent text-black"
      } font-serif container mx-auto h-[10dvh] p-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-in-out `}
    >
      {/* Brand/Logo */}
      <div>
        <h1 className="font-bold text-2xl">DU</h1>
      </div>

      {/* Trigger Button */}
      <TriggerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {/* Menu */}
      <Menu isOpen={isOpen} />
    </nav>
  );
}
