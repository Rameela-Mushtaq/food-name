import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    document.body.classList.toggle("no-scroll", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);

    document.body.classList.remove("no-scroll");
  };


  return (
    <div className="md:py-4 py-2">
      <div className="mx-auto w-[90%] max-w-[1800px] font-poppins">
        <div className="flex justify-between gap-3 items-center">
          {/* image */}
          <img src={logo} alt="logo" className="xl:w-auto w-20 " />


          {/* icon */}
          <div className="lg:hidden pt-2">
            <button onClick={toggleMenu}>
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>

          {/* nav items */}
          <div className="hidden text-lg font-medium lg:flex items-center gap-20">
            <a href="#home">Home</a>
            <a href="#product">Products</a>
            <a href="#work">How It Works</a>
            <a href="#about">About Us</a>
          </div>

          {/* button */}
          <div className="hidden lg:flex items-center">
            <button className="whitespace-nowrap py-3 xl:px-10 px-7 text-lg bg-btnBg text-white rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/*Mobile nav */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 overflow-hidden"
          onClick={closeMenu}
        >
          <div className="fixed flex flex-col justify-between items-center h-screen w-[60%] bg-cardBg overflow-hidden p-5 z-50 transition-transform transform"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-6">
              <img src={logo} alt="logo" />
              <div className="flex flex-col gap-3 font-medium text-lg text-center">
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#product" onClick={closeMenu}>Products</a>
                <a href="#work" onClick={closeMenu}>How It Works</a>
                <a href="#about" onClick={closeMenu}>About Us</a>
              </div>
            </div>

            <button className="whitespace-nowrap py-3 px-7 text-lg bg-btnBg text-white rounded-md">
              Contact Us
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
