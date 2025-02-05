import { useState } from "react";
import { HamburgerMenuFooter } from "./HamburgerMenuFooter";
import { HamburgerMenuList } from "./HamburgerMenuList";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className=" text-black flex justify-between items-center">
        <button onClick={toggleMenu} className="block text-black focus:outline-none md:hidden ">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar navigation */}
      <nav className={`fixed top-0 right-0 h-full w-80 bg-white text-black transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <button className="absolute top-5 right-8 text-black focus:outline-none z-50" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <HamburgerMenuList />

        <div className="mx-8 mt-12">
          <div className="flex flex-start items-center gap-3 pb-3">
            <img src="./src/assets/logo-svg/jordan.svg" alt="Jordan Logo" className="w-7 h-6" />
            <p className="text-lg font-semibold">Jordan</p>
          </div>
          <div className="flex flex-start items-center gap-3 ">
            <img src="./src/assets/logo-svg/converse.svg" alt="Converse Logo" className="w-7 h-6" />
            <p className="text-lg font-semibold">Converse</p>
          </div>
        </div>

        <div className="max-w-[350px] px-8 mt-20">
          <h1 className="text-xl text-gray-500 font-semibold mb-2nod">
            Become a Nike Member for the best products, inspiration and stories in sport. <span className="text-black">Learn More</span>
          </h1>
          <button className="bg-black text-white px-5 py-1.5 mt-5 rounded-full font-semibold mr-2">Join Us</button>
          <button className="border border-gray-400 bg-white text-black px-5 py-1.5 mt-5 rounded-full font-semibold">Sign In</button>
        </div>

        <HamburgerMenuFooter />
      </nav>
    </div>
  );
};
