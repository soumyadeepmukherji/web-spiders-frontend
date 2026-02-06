import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-20 pb-0">
      {/* Top section with 5 lists */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>Principal's Desk</li>
            <li>Prefects and Captains</li>
            <li>Synopsis on DC</li>
            <li>Alumni / ODA</li>
            <li>Campus</li>
            <li>Facilities</li>
            <li>Location</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">History</h3>
          <ul className="space-y-2">
            <li>Evolution</li>
            <li>Founder of DC</li>
            <li>Presidents of the Board</li>
            <li>Original Donors</li>
            <li>Patrons of the College</li>
            <li>Principals at DC</li>
            <li>First Batch</li>
            <li>The College Coat of Arms</li>
            <li>Visits of Dignitaries</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Admission</h3>
          <ul className="space-y-2">
            <li>Admission Procedure</li>
            <li>E-Brochure</li>
            <li>Fee Structure</li>
            <li>Registration</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Academics</h3>
          <ul className="space-y-2">
            <li>Committee</li>
            <li>Mandatory Disclosure</li>
            <li>Transfer Certificate</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Career & College Guidance</h3>
          <ul className="space-y-2">
            <li>Career Guidance Activities</li>
            <li>ICS Career Login</li>
            <li>Placement Records</li>
            <li>Career Guidance Calendar</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          © 2025 Daly College Indore | Privacy Policy | Terms of Use | Sitemap
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
