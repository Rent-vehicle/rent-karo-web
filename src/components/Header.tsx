"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Card from "./Card";
import Button from "./Button";
import { useClickOutside } from "@/hooks/useClickOutside";

interface HeaderProps {
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(userMenuRef, () => {
    setIsUserMenuOpen(false);
  });

  const navigation = [
    { name: "Browse Bikes", href: "#", current: false },
    { name: "Locations", href: "#", current: false },
    { name: "Pricing", href: "#", current: false },
    { name: "Support", href: "#", current: false },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-black">BikeRent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  item.current
                    ? "bg-black text-white"
                    : "text-black hover:text-white hover:bg-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                    </span>
                  </div>
                  <span className="text-sm text-black">{user.name || "User"}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={() => {
                        // Handle profile
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        // Handle bookings
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                    >
                      My Bookings
                    </button>
                    <button
                      onClick={() => {
                        // Handle settings
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                    >
                      Settings
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button
                      onClick={() => {
                        // Handle logout
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-sm font-medium text-black hover:text-gray-600">
                  Sign In
                </Link>
                <Button variant="primary">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-black hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-black bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    item.current
                      ? "bg-black text-white"
                      : "text-black hover:text-white hover:bg-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="pt-4 pb-3 border-t border-black">
                  <div className="flex items-center px-3 py-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-black">{user.name || "User"}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        // Handle profile
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        // Handle bookings
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                      My Bookings
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        // Handle settings
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                      Settings
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-black">
                  <div className="space-y-2">
                    <Link
                      href="/login"
                      className="block px-3 py-2 rounded-full text-base font-medium text-black hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Button variant="primary" fullWidth>
                      <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
