import React from 'react';
import { useNavigate } from 'react-router-dom';

const Location: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2>Unde Mă Găsești</h2>
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
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Mă poți găsi pe rețelele sociale sau prin email.
          </p>
          
          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Rețele Sociale
          </h4>
          <ul style={{ marginBottom: '20px', listStyle: 'none' }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://instagram.com/aurelmihai.ionita" target="_blank" style={{ color: '#2563eb' }}>
                Instagram: @aurelmihai.ionita
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="https://www.facebook.com/profile.php?id=100068926080795" target="_blank" style={{ color: '#2563eb' }}>
                Facebook
              </a>
            </li>
          </ul>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Email
          </h4>
          <p style={{ marginBottom: '20px' }}>
            <a href="mailto:aurel.ionita@gmail.com" style={{ color: '#2563eb' }}>
              aurel.ionita@gmail.com
            </a>
          </p>

          <button 
            onClick={() => navigate(-1)}
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

export default Location;