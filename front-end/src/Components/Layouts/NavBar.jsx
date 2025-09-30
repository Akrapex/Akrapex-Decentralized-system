import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "How it works", path: "/how-it-works" },
  ];

  const socials = [
    { icon: <FaFacebookF size={22} />, href: "#", color: "#1877F2" },
    { icon: <FaTwitter size={22} />, href: "#", color: "#1DA1F2" },
    { icon: <FaLinkedinIn size={22} />, href: "#", color: "#0A66C2" },
    { icon: <FaInstagram size={22} />, href: "#", color: "#E1306C" },
  ];

  return (
    <nav className="bg-primary text-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-5 py-4 md:px-10">
        {/* Logo */}
        <h1 className="font-bold font-inter text-lg">Logo</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-12 font-medium font-inter justify-center flex-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow after:transition-all after:duration-300 hover:after:w-1/2 
                ${isActive ? "after:w-1/2" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Waitlist Button (Desktop) */}
        <Link to="https://tally.so/r/mVOPVa" className="hidden md:block">
          <button className="group text-white font-medium font-inter bg-[#E5BD3E] py-2 px-5 rounded-[20px] flex items-center gap-2 transition duration-300 hover:bg-[#d4a92f]">
            <span>Join waitlist</span>
            <IoIosArrowRoundForward className="bg-white text-black rounded-full p-1 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </Link>

        {/* Rhythm Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col gap-[6px] relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-[9px]"
                : "animate-rhythm delay-[0ms]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "animate-rhythm delay-[150ms]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-[9px]"
                : "animate-rhythm delay-[300ms]"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-primary flex flex-col items-center justify-center gap-8 transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo inside dropdown (top-left) */}
        <div className="absolute top-6 left-6">
          <h1 className="font-bold font-inter text-lg">Logo</h1>
        </div>

        {navLinks.map((link, idx) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-2xl font-medium font-inter opacity-0 animate-fadeIn forwards relative 
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-yellow after:transition-all after:duration-300 hover:after:w-1/2
              ${isActive ? "after:w-1/2" : ""}`
            }
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {link.name}
          </NavLink>
        ))}

        {/* Waitlist Button (Mobile) */}
        <Link to="https://tally.so/r/mVOPVa">
          <button className="group text-white font-medium font-inter bg-[#E5BD3E] py-3 px-8 rounded-[20px] flex items-center gap-2 transition duration-300 hover:bg-[#d4a92f] mt-4">
            <span>Join waitlist</span>
            <IoIosArrowRoundForward className="bg-white text-black rounded-full p-1 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </Link>

        {/* Social Media Icons with fade-in */}
        <div className="flex gap-6 mt-10">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className="opacity-0 animate-fadeIn forwards transition transform hover:scale-125"
              style={{
                animationDelay: `${(navLinks.length * 0.15) + idx * 0.15}s`,
                color: "white",
              }}
            >
              <span className="hover:text-current" style={{ color: s.color }}>
                {s.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
          transform: translateX(-20px);
        }

        /* Rhythm (left-to-right) animation for hamburger bars */
        @keyframes rhythm {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        .animate-rhythm {
          animation: rhythm 1s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
