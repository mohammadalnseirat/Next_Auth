"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import AuthButton from "./AuthButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (isMenuOpen && sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    //! Add event listener to the document
    document.addEventListener("mousedown", handleClickOutSide);

    //! Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl font-extrabold group cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
            Auth
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600 transition-all duration-300">
            App
          </span>
        </Link>

        {/* Mobile Menu Button and Sign In */}
        <div className="md:hidden flex items-center gap-4">
          <div className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-md text-gray-700 hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
            <AuthButton />
          </div>
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <Link
              href={"/"}
              className="hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <FaHome />
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <FaInfoCircle />
              About
            </Link>
            {/* Add Sign In Button and User Button */}
            <AuthButton />
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div
          ref={sideBarRef}
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-blue-300 to-purple-400 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex mt-20 flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md p-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <ul className="space-y-4 text-center w-full px-4">
              <li>
                <Link
                  href={"/"}
                  className="py-2 text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 w-full hover:bg-blue-200 rounded-md p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaHome />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="py-2 text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 w-full hover:bg-blue-200 rounded-md p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaInfoCircle />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
