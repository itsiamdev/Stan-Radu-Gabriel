import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Developer from './Developer';
import Location from './Location';
import Privacy from './Privacy';
import Help from './Help';

// Component that handles scroll and global styles on route change
const RouteChangeHandler: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add smooth scrolling to anchor links
    const setupAnchorLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
        anchor.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const targetId = (anchor as HTMLAnchorElement).getAttribute('href')?.substring(1);
          if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };
    setupAnchorLinks();

    // Add animation on scroll
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Wait for DOM to update then observe elements
    setTimeout(() => {
      document.querySelectorAll('.project-card, .contact-card, .about-content').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    // Add CSS for animations
    const style = document.createElement('style');
    style.id = 'animations-style';
    style.textContent = `
      .project-card, .contact-card, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }

      .project-card.animate-in, .contact-card.animate-in, .about-content.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      .navbar-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      }

      @media (min-width: 769px) {
        .navbar-menu.active {
          display: flex !important;
          flex-direction: row !important;
          position: static !important;
          background: transparent !important;
          padding: 0 !important;
          box-shadow: none !important;
        }
      }
    `;
    
    // Remove old style if exists, then add new one
    const oldStyle = document.getElementById('animations-style');
    if (oldStyle) oldStyle.remove();
    document.head.appendChild(style);

    // Add responsive navbar menu styles
    const responsiveStyle = document.createElement('style');
    responsiveStyle.id = 'responsive-style';
    responsiveStyle.textContent = `
      @media (max-width: 768px) {
        .navbar-menu {
          display: none;
        }

        .navbar-menu.active {
          display: flex;
        }
      }
    `;
    
    const oldResponsiveStyle = document.getElementById('responsive-style');
    if (oldResponsiveStyle) oldResponsiveStyle.remove();
    document.head.appendChild(responsiveStyle);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App: React.FC = () => {
  const basename = import.meta.env.PROD ? '/Stan-Radu-Gabriel/' : '/';

  return (
    <BrowserRouter basename={basename}>
      <RouteChangeHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
        <Route path="/dezvoltator" element={<><Navbar /><Developer /><Footer /></>} />
        <Route path="/unde-sunt" element={<><Navbar /><Location /><Footer /></>} />
        <Route path="/politica-confidentialitate" element={<><Navbar /><Privacy /><Footer /></>} />
        <Route path="/ajutor" element={<><Navbar /><Help /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
