import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#D4AF37]/20 backdrop-blur-md shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              loading="lazy"
              alt="Abhilasha Beauty World"
              className="h-14 md:h-16 object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "text-white hover:text-[#D4AF37] transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <HashLink
              smooth
              to="/#packages"
              className="text-white hover:text-[#D4AF37] transition"
            >
              Packages
            </HashLink>

            <a
              href="https://wa.me/917499709800"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#E6C76A] text-black px-5 py-2 rounded-full transition"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#D4AF37] font-semibold" : "text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <HashLink
            smooth
            to="/#packages"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Packages
          </HashLink>

          <a
            href="https://wa.me/917499709800"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black hover:bg-[#E6C76A] px-5 py-2 rounded-full"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
