import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../theme/ThemeContext";
import { Menu, X, Sun, Moon, Leaf } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-secondary shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="text-primary mr-2" size={28} />
          <h1 className="text-xl font-bold text-primary-dark dark:text-primary">
            HelloMaggie!
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {" "}
          <nav className="flex space-x-6">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-secondary hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer"
            >
              Tentang Kami
            </ScrollLink>
            <ScrollLink
              to="team"
              smooth={true}
              duration={500}
              className="text-secondary hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer"
            >
              Tim Kami
            </ScrollLink>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-light dark:bg-secondary-light text-secondary dark:text-white transition-colors duration-300"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-light dark:bg-secondary-light text-secondary dark:text-white mr-2"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-secondary dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-secondary shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        {" "}
        <nav className="flex flex-col p-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="py-2 text-secondary hover:text-primary dark:text-white dark:hover:text-primary"
            onClick={toggleMenu}
          >
            Tentang Kami
          </ScrollLink>
          <ScrollLink
            to="team"
            smooth={true}
            duration={500}
            className="py-2 text-secondary hover:text-primary dark:text-white dark:hover:text-primary"
            onClick={toggleMenu}
          >
            Tim Kami
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
