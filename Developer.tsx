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
              Sunt elev la <a href="https://cnsm.ro" target="_blank" style={{ textDecoration: 'none' }}>Colegiul Național "Ștefan cel Mare"</a> din Targu Neamț în clasa a 11-a și îmi place programarea și tot ce ține de domeniul IT.
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
              <span style={{ background: '#61dafb', color: '#282c34', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>⚛️ React</span>
              <span style={{ background: '#3178c6', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🔷 TypeScript</span>
              <span style={{ background: '#264de4', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🎨 CSS3</span>
              <span style={{ background: '#e34c26', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🌐 HTML5</span>
              <span style={{ background: '#f7df1e', color: '#282c34', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>📜 JavaScript</span>
              <span style={{ background: '#339933', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🟢 Node.js</span>
              <span style={{ background: '#ff61f6', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🎯 Design</span>
              <span style={{ background: '#7c3aed', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🎓 UX/UI</span>
              <span style={{ background: '#4a5568', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🔧 Debugging</span>
              <span style={{ background: '#2d3748', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}> Și multe altele</span>
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
              Contact
            </h4>
            <p style={{ color: '#4a4a4a', lineHeight: '1.7' }}>
              Mă poți găsi pe:
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://ionitaaurelmihai.vercel.app/" 
                target="_blank"
                style={{ 
                  background: '#2563eb', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                🌐 Website Personal
              </a>
              <a 
                href="https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/" 
                target="_blank"
                style={{ 
                  background: '#0077b5', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/iam269" 
                target="_blank"
                style={{ 
                  background: '#333', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                💻 GitHub
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