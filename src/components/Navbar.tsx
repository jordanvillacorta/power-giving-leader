import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-[#4A0E4E] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-[#FFD700]" />
            <span className="ml-2 text-xl font-serif">Power-Giving Leader</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#663399] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#663399] transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/courses"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#663399] transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/publications"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#663399] transition-colors"
              >
                Publications
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-[#663399] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#663399] transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#663399] transition-colors"
                onClick={toggleMenu}
              >
                About Me
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#663399] transition-colors"
                onClick={toggleMenu}
              >
                Courses
              </Link>
              <Link
                to="/publications"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#663399] transition-colors"
                onClick={toggleMenu}
              >
                Publications
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}