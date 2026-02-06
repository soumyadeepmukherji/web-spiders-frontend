import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import gsap from 'gsap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  // animation for menu
    useEffect(() => {
        if (menuRef.current) {
        if (isOpen) {
            gsap.fromTo(
            menuRef.current,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        } else {
            gsap.to(menuRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            });
        }
        }
    }, [isOpen]);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 transition-all duration-300 main-header ${
        isSticky
          ? "sticky shadow-md bg-white z-50"
          : "absolute bg-transparent z-30"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-0">
        {/* Logo */}
        <div className="flex items-center logo">
          <img
            src="/src/assets/logo.png"
            alt="Web Spiders Logo"
            className=" w-auto"
          />
        </div>

        {/* Contact details */}
        <div className="flex items-center space-x-4 px-4">
          {/* Email */}
          <div className="flex items-center space-x-1 text-white-500 hover:text-[#CB0B19] transition-all duration-300">
            <MdEmail size={20} />
            <span className="hidden md:inline">contact@dalycollege.org</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-1 text-white-500 hover:text-[#CB0B19] transition-all duration-300">
            <MdPhone size={20} />
            <span className="hidden md:inline">91 (0731) 2719000</span>
          </div>

          {/* ERP Login */}
          <button className="flex items-center bg-[#CB0B19] border-1 border-transparent text-white px-3 py-1 rounded hover:bg-transparent hover:border-[#fff] transition">
            <FiLogIn className="mr-1" />
            ERP Login
          </button>

          {/* Hamburger */}
          <button
            className="block text-white-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Toggle Menu */}
      <div
        ref={menuRef}
        className="overflow-hidden bg-white shadow-md"
        style={{ height: 0, opacity: 0 }}
      >
        <nav className="flex flex-col space-y-2 p-4">
          <Link to="/" className="text-black hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-black hover:text-blue-600">About</Link>
          <Link to="/testimonial" className="text-black hover:text-blue-600">Testimonial</Link>
          <Link to="/contact" className="text-black hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
