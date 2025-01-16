import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:py-4 py-2">
      <div className="mx-auto w-[90%] max-w-[1800px] font-poppins">
        <div className="flex justify-between gap-3 items-center">
          {/* Logo */}
          <img src={logo} alt="logo" className="xl:w-auto w-20" />

          {/* Hamburger Icon */}
          <div className="lg:hidden pt-2">
            <button onClick={toggleMenu}>
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden text-lg font-medium lg:flex items-center gap-20">
            <a href="#home">Home</a>
            <a href="#product">Products</a>
            <a href="#work">How It Works</a>
            <a href="#about">About Us</a>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <button className="whitespace-nowrap py-3 xl:px-10 px-7 text-lg bg-btnBg text-white rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        >
          <div
            className="fixed flex flex-col justify-between h-full w-[60%] bg-cardBg p-5 z-50 transition-transform transform"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-6">
              <img src={logo} alt="logo" />
              <div className="flex flex-col gap-3 font-medium text-lg text-center">
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
                <a href="#product" onClick={closeMenu}>
                  Products
                </a>
                <a href="#work" onClick={closeMenu}>
                  How It Works
                </a>
                <a href="#about" onClick={closeMenu}>
                  About Us
                </a>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="mt-auto">
              <button className="whitespace-nowrap py-3 px-7 text-lg bg-btnBg text-white rounded-md w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
