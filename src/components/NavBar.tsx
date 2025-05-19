import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Music } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="flex items-center">
            <div className="navbar-brand">
              <Music className="navbar-logo" />
              <span className="navbar-title">Studio Nephews</span>
            </div>
          </div>
          
          <div className="navbar-menu">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="navbar-link">Accueil</a>
              <a href="#music" className="navbar-link">Musique</a>
              <a href="#about" className="navbar-link">À Propos</a>
              <a href="#contact" className="navbar-link">Contact</a>
              <button 
                onClick={toggleDarkMode}
                className="theme-toggle"
                aria-label="Basculer le mode sombre"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-label="Basculer le menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="navbar-link block"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#music" 
              className="navbar-link block"
              onClick={() => setIsOpen(false)}
            >
              Musique
            </a>
            <a 
              href="#about" 
              className="navbar-link block"
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </a>
            <a 
              href="#contact" 
              className="navbar-link block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;