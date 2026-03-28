import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Stan-Radu-Gabriel/';

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Stan Radu Gabriel</h3>
            <p>Membru în Consiliul Elevilor<br /><a href="https://cnsm.ro" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>Colegiul Național "Ștefan cel Mare"</a> din Targu Neamț</p>
          </div>
          <div className="footer-section">
            <h4>Link-uri Rapide</h4>
            <ul>
              <li><Link to="/">Acasă</Link></li>
              {isHomePage ? (
                <li><a onClick={() => scrollToSection('about')}>Despre Mine</a></li>
              ) : (
                <li><Link to="/">Despre Mine</Link></li>
              )}
              {isHomePage ? (
                <li><a onClick={() => scrollToSection('projects')}>Proiecte</a></li>
              ) : (
                <li><Link to="/#projects">Proiecte</Link></li>
              )}
              {isHomePage ? (
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              ) : (
                <li><Link to="/">Contact</Link></li>
              )}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Despre</h4>
            <ul>
              <li><Link to="/dezvoltator">Dezvoltator</Link></li>
              <li><Link to="/politica-confidentialitate">Politică de Confidențialitate</Link></li>
              <li><Link to="/ajutor">Ajutor</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Conectează-te cu mine</h4>
            <div className="social-links">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=raduq.stan@gmail.com&tf=cm" aria-label="Email"><img src="icons/email.png" alt="Email" /></a>
              <a href="https://www.instagram.com/raduq.st/" target="_blank" aria-label="Instagram"><img src="icons/instagram.png" alt="Instagram" /></a>
              <a href="https://www.facebook.com/profile.php?id=100068926080795&locale=ro_RO" target="_blank" aria-label="Facebook"><img src="icons/facebook.png" alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Stan Radu Gabriel. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;