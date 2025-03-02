"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 w-full">
      <Link href="/" className="block">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-yellow-400 font-extralight text-center mb-8 mt-5 text-outline">
          POKÉMON
        </h1>
      </Link>
      <div className="sm:hidden flex mb-4">
        <button onClick={toggleMenu} className="relative w-8 h-8 focus:outline-none">
          <span
            className={`block absolute h-0.5 w-full bg-yellow-400 transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 top-3.5" : "top-2"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-full bg-yellow-400 transform transition duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "top-4"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-full bg-yellow-400 transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 top-3.5" : "top-6"
            }`}
          ></span>
        </button>
      </div>
      <nav className={`${isMenuOpen ? "block" : "hidden"} sm:block`}>
        <ul className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 gap-4">
          <li>
            <Link
              href="/"
              className="text-yellow-400 hover:text-yellow-500 font-extralight text-xl sm:text-2xl md:text-3xl text-outline underline"
            >
              INÍCIO
            </Link>
          </li>
          <li>
            <Link
              href="/cartas"
              className="text-yellow-400 hover:text-yellow-500 font-extralight text-xl sm:text-2xl md:text-3xl text-outline underline"
            >
              CARTAS
            </Link>
          </li>
          <li>
            <Link
              href="/button-generator"
              className="text-yellow-400 hover:text-yellow-500 font-extralight text-xl sm:text-2xl md:text-3xl text-outline underline"
            >
              PACOTE DE CARTAS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}