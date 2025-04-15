import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import logo from "../banners/llogo.png"
import dlogo from "../banners/dlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Courses', path: '/courses' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={theme === 'dark' 
                ? dlogo 
                : logo} 
              alt="NexGenEdutech Logo" 
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}

            {/* Academics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-2 focus:outline-none transition-colors duration-200"
              >
                <span>Academics</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                >
                  <Link to="/academic-projects" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Academic Projects</Link>
                  <Link to="/internships/short-term" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Short-Term Internships</Link>
                  <Link to="/internships/long-term" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Long-Term Internships</Link>
                  <Link to="/workshops" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Workshops</Link>
                </motion.div>
              )}
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2" 
              onClick={() => navigate("/contact")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              {navItems.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.path} 
                  className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md" 
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md"
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <Link to="/academic-projects" className="block py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Academic Projects</Link>
                    <Link to="/internships/short-term" className="block py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Short-Term Internships</Link>
                    <Link to="/internships/long-term" className="block py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Long-Term Internships</Link>
                    <Link to="/workshops" className="block py-2 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">Workshops</Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;