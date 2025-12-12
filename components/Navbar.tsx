"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-4 fixed top-0 left-0 z-50 
                    backdrop-blur-xl bg-black/20 
                    border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Name */}
        <h1 className="text-lg md:text-xl font-bold tracking-wide text-white">
          Yogita I J
        </h1>

        {/* Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-medium text-white">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#techstack" label="Tech Stack" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#education" label="Education" />
          <NavLink href="#contact" label="Contact" />
        </div>

      </div>
    </nav>
  );
}

/* Reusable nav link with hover underline animation */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href}
      className="relative group transition"
    >
      {label}
      <span
        className="absolute left-0 -bottom-1 w-0 h-[2px] 
                   bg-purple-500 group-hover:w-full 
                   transition-all duration-300"
      />
    </a>
  );
}
