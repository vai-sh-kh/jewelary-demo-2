"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navigation() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Collection" },
    { href: "/products", label: "Products" },
    { href: "/gifts", label: "Gifts" },
  ];

  return (
    <nav className="w-full py-4 px-4 sm:py-6 sm:px-8 flex justify-between items-center max-w-7xl mx-auto">
      <Link
        href="/"
        className="text-xl sm:text-2xl font-display font-bold tracking-tight"
      >
        Jewelley
      </Link>
      <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-primary dark:hover:text-white transition-colors duration-300 pb-1"
            >
              <span className="relative z-10 inline-block">{link.label}</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ease-in-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5">
        <button className="md:hidden text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={() => setIsSearchOpen(true)}
          className="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button className="relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <Link
          href="#"
          className="bg-primary hover:bg-primary-hover text-white px-4 py-2 sm:px-6 sm:py-2 rounded-sm text-xs sm:text-sm font-medium transition-colors min-h-[44px] flex items-center justify-center"
        >
          Login
        </Link>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
