import React, { useState } from "react";
import { IlovemyLogo } from "../../../assets";
import { NavLink } from "react-router-dom";

const NavbarMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "My Project" },
    { path: "/store", label: "My Store" },
    { path: "/contact", label: "Contact" },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClasses =
      "relative block py-2 px-3 md:p-0 transition-all duration-300 ease-in-out";

    if (isActive) {
      return `${baseClasses} text-orange-500 font-semibold`;
    } else {
      return `${baseClasses} text-heading hover:text-orange-500 hover:scale-105`;
    }
  };

  return (
    <div>
      <nav className="bg-neutral-primary fixed top-0 left-0 right-0 z-50 border-b border-default backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center space-x-3"
              onClick={closeMenu}
            >
              <img src={IlovemyLogo} className="h-10" alt="My Self" />
              <span className="text-xl text-heading font-semibold">
                Julian.w
              </span>
            </NavLink>

            {/* Desktop Menu (Center) */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex space-x-8 font-medium">
                {menuItems.map((item) => (
                  <li key={item.path} className="relative group">
                    <NavLink to={item.path} className={getNavLinkClass}>
                      {item.label}

                      {/* Orange Animated Underline */}
                      <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center rounded-md hover:bg-orange-100 transition"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 pb-4">
              <ul className="flex flex-col space-y-3 font-medium">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={getNavLinkClass}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default NavbarMain;
