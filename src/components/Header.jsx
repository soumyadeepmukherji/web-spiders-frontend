import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import gsap from 'gsap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Web Spiders Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Contact + ERP + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Email */}
          <div className="flex items-center space-x-1 text-gray-700">
            <MdEmail size={20} />
            <span className="hidden md:inline">contact@dalycollege.org</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-1 text-gray-700">
            <MdPhone size={20} />
            <span className="hidden md:inline">91 (0731) 2719000</span>
          </div>

          {/* ERP Login */}
          <button className="flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
            <FiLogIn className="mr-1" />
            ERP Login
          </button>

          {/* Hamburger */}
          <button
            className="block text-gray-700"
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
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/testimonial" className="hover:text-blue-600">Testimonial</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
