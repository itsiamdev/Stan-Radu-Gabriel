import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const isHomePage = location.pathname === '/' || location.pathname === '/Stan-Radu-Gabriel/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          Stan Radu Gabriel
        </Link>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/">Acasă</Link>
          {isHomePage ? (
            <a onClick={() => scrollToSection('about')}>Despre Mine</a>
          ) : (
            <Link to="/">Despre Mine</Link>
          )}
          {isHomePage ? (
            <a onClick={() => scrollToSection('projects')}>Proiecte</a>
          ) : (
            <Link to="/#projects">Proiecte</Link>
          )}
          {isHomePage ? (
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          ) : (
            <Link to="/">Contact</Link>
          )}
          <a href="https://ionitaaurelmihai.vercel.app" target="_blank">Dezvoltator</a>
        </div>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;