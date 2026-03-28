import React from 'react';

const Developer: React.FC = () => {
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
    <div className="developer-page" style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2>Despre Dezvoltator</h2>
          <div className="divider"></div>
        </div>

        <div className="developer-content" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'white', 
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img 
              src="assets/Dezvoltator/dezvoltator.png.jpeg" 
              alt="Ioniță Aurel-Mihai" 
              style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                marginBottom: '20px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)'
              }} 
            />
            <h3 style={{ fontSize: '2rem', color: '#2563eb', marginBottom: '10px' }}>
              Ioniță Aurel-Mihai
            </h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>
              Dezvoltator Web
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
              Despre Mine
            </h4>
            <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '15px' }}>
              Sunt un dezvoltator web pasionat de tehnologie și design. 
              Creez site-uri web moderne, responsive și ușor de utilizat.
            </p>
            <p style={{ color: '#4a4a4a', lineHeight: '1.7' }}>
              Am experiență în dezvoltarea de aplicații web folosind technologii moderne precum 
              React, TypeScript, CSS și multe altele.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
              Abilități
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['React', 'TypeScript', 'CSS3', 'HTML5', 'JavaScript', 'Node.js', 'Design', 'UX/UI'].map((skill) => (
                <span key={skill} style={{ 
                  background: '#2563eb', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
              Contact
            </h4>
            <p style={{ color: '#4a4a4a', lineHeight: '1.7' }}>
              Mă poți găsi pe social media:
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', justifyContent: 'center' }}>
              <a 
                href="https://instagram.com/aurelmihai.ionita" 
                target="_blank"
                style={{ 
                  background: '#2563eb', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Instagram
              </a>
              <a 
                href="https://mail.google.com/mail/u/0/?fs=1&to=aurel.ionita@gmail.com&tf=cm"
                target="_blank"
                style={{ 
                  background: 'transparent', 
                  color: '#2563eb', 
                  padding: '12px 24px', 
                  borderRadius: '8px',
                  border: '2px solid #2563eb',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Email
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-primary"
              style={{ cursor: 'pointer' }}
            >
              Înapoi Acasă
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;