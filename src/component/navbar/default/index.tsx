import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/cv", label: "Curriculum Vitae" },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
      isActive 
        ? "text-primary font-bold border-b border-primary" 
        : "text-accent hover:text-primary"
    }`;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled || isMenuOpen ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <NavLink to="/home" className="z-[110]">
            <span className="text-lg md:text-xl font-serif tracking-tighter text-primary whitespace-nowrap">
              Julian Witjaksono
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={getNavLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-800 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary z-[110] p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Simplified Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-white border-b border-slate-100 pt-20 pb-8 px-6 md:hidden shadow-lg"
            >
              <ul className="flex flex-col space-y-5">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink 
                      to={item.path} 
                      className="text-sm uppercase tracking-widest text-primary font-medium block"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <a 
                    href="#contact" 
                    className="block w-full text-center py-3 bg-primary text-white text-[10px] uppercase tracking-widest font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavbarMain;
