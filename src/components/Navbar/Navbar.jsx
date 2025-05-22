"use client";
import { CodeXml, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuopen, setmenuOpen] = useState(false);

  return (
    <nav className="text-white">
      {/* First mobile navbar */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <CodeXml size={28} />
        <button onClick={() => setmenuOpen(!menuopen)}>
          {menuopen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu bar */}
      {menuopen && (
        <motion.ul
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 left-0 z-10 flex flex-col gap-y-8 p-4 bg-gray-700 w-1/2 h-full md:hidden"
        >
          <li className="">
            <a
              href="home
            "
            >
              <CodeXml size={28} />
            </a>{" "}
          </li>
          <li className="text-base font-semibold">ABOUT</li>
          <li className="text-base font-semibold">SKILL</li>
          <li className="text-base font-semibold">PROJECT</li>
          <li className="text-base font-semibold">CONTACT</li>
        </motion.ul>
      )}
      {/* Desktop view */}
      <motion.div
        initial={{ y: -50, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex justify-between w-[80%] m-auto py-6 "
      >
        <CodeXml size={34} />
        <ul className="flex  space-x-6">
          <li>
            <a href="#about" className="text-lg font-semibold">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg font-semibold">
              SKILL
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-semibold">
              PROJECT
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-semibold">
              CONTACT
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
