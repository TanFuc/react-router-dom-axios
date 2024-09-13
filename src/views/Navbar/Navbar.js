import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import ContactPage from "../Contact/ContactPage";
import HomePage from "../Home/HomePage";

const Navbar = () => {
  return (
    <>
      <div className="min-h-screen font-bold">
        <nav className="p-4 fixed top-0 left-0 w-full z-10">
          <div className="container mx-auto flex justify-center items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-zinc-400 hover:text-black">
                Home
              </Link>
              <Link to="/about" className="text-zinc-400 hover:text-black">
                About
              </Link>
              <Link to="/services" className="text-zinc-400 hover:text-black">
                Services
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-black">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navbar;
