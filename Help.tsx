import React from 'react';

const Help: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2>Ai Nevoie de Ajutor?</h2>
          <div className="divider"></div>
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'white', 
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Cum Putem Ajuta
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Dacă ai întrebări sau ai nevoie de asistență, suntem aici să te ajutăm!
          </p>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Întrebări Frecvente
          </h4>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: '600', marginBottom: '10px' }}>Cum pot lua contact cu proprietarul site-ului?</p>
            <p style={{ color: '#4a4a4a', marginBottom: '15px' }}>
              Poți folosi formularea de contact din secțiunea Contact sau ne poți trimite un email.
            </p>
            
            <p style={{ fontWeight: '600', marginBottom: '10px' }}>Site-ul nu se încarcă corect?</p>
            <p style={{ color: '#4a4a4a', marginBottom: '15px' }}>
              Încearcă să actualizezi pagina sau să ștergi cache-ul browser-ului.
            </p>
          </div>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Contactează-ne
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Pentru alte întrebări sau probleme, ne poți contacta la:
          </p>
          <p style={{ marginBottom: '20px' }}>
            <a href="mailto:aurel.ionita@gmail.com" style={{ color: '#2563eb' }}>
              aurel.ionita@gmail.com
            </a>
          </p>

          <button 
            onClick={() => window.history.back()}
            className="btn btn-primary"
            style={{ marginTop: '20px', cursor: 'pointer' }}
          >
            Înapoi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;