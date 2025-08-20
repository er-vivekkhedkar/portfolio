"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title:"Experience",
    path:"#experience",

  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
 
  return (
    <nav className=" fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100 ">
     
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-9 py-2">
        <Link
          href={"/"}
          className="flex items-center gap-3 text-2xl md:text-4xl text-white font-semibold"
        >
          <div className="rounded-full  w-[40px] h-[40px] md:w-[60px] md:h-[60px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Vivek logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={50}
              height={50}
            />
          </div>
          Vivekk
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
