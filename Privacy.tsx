import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2>Politică de Confidențialitate</h2>
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
            Introducere
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Această politică de confidențialitate descrie modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră personale pe acest site web.
          </p>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Informații Colectate
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Nu colectăm informații personale de la utilizatorii acestui site, cu excepția celor furnicate voluntar prin intermediul formularelor de contact.
          </p>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Utilizarea Informațiilor
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Informațiile furnizate sunt utilizate exclusiv pentru a răspunde la întrebările sau solicitările dumneavoastră.
          </p>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Protecția Datelor
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7', marginBottom: '20px' }}>
            Implementăm măsuri de securitate adecvate pentru a proteja informațiile personale împotriva accesului neautorizat.
          </p>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Contact
          </h4>
          <p style={{ color: '#4a4a4a', lineHeight: '1.7' }}>
            Pentru întrebări despre politica de confidențialitate, ne puteți contacta la: 
            <a href="mailto:aurel.ionita@gmail.com" style={{ color: '#2563eb' }}> aurel.ionita@gmail.com</a>
          </p>

          <button 
            onClick={() => window.history.back()}
            className="btn btn-primary"
            style={{ marginTop: '30px', cursor: 'pointer' }}
          >
            Înapoi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;