import React, { useState, useEffect } from 'react';

const AeroRadar = () => {
  // Simulación de aproximación en tiempo real
  const [distance, setDistance] = useState(35.4);
  const [eta, setEta] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => (prev > 0.5 ? +(prev - 0.1).toFixed(1) : 0));
      setEta(prev => (prev > 1 ? prev - 0.05 : 0));
    }, 3000); // Actualiza cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#002366', color: 'white', padding: '40px', borderRadius: '15px', borderLeft: '5px solid #D4AF37', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      
      {/* Flight Identity */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div>
          <p style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', margin: 0 }}>INBOUND JET</p>
          <h1 style={{ fontSize: '24px', fontWeight: '300', fontStyle: 'italic', margin: '5px 0' }}>N700DS | G650</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: '#aaa', fontSize: '10px', margin: 0 }}>DESTINATION</p>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>RSJ AERODROME</p>
        </div>
      </div>

      {/* Pulsing Radar Circle */}
      <div style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '30px', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', zIndex: 10 }}>
          <div style={{ fontSize: '40px', color: '#D4AF37', animation: 'pulse 2s infinite' }}>✈</div>
          <p style={{ fontSize: '12px', color: '#D4AF37', marginTop: '10px', fontFamily: 'monospace' }}>{distance} NM TO COAST</p>
        </div>
        {/* Radar Sweep Effect */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(212,175,55,0.1)', borderRadius: '50%', animation: 'ping 3s infinite' }}></div>
      </div>

      {/* Logistics Status */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
          <p style={{ color: '#aaa', fontSize: '9px', margin: 0 }}>GROUND UNIT</p>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>Tahoe Highcountry</p>
          <p style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold' }}>● STANDBY AT RUNWAY</p>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', textAlign: 'right' }}>
          <p style={{ color: '#aaa', fontSize: '9px', margin: 0 }}>EST. ARRIVAL</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#D4AF37', margin: 0 }}>{Math.floor(eta)} MIN</p>
          <p style={{ fontSize: '9px', fontStyle: 'italic', color: '#666' }}>Local: 14:15 AST</p>
        </div>
      </div>

      {/* CSS Animaciones Inline */}
      <style>{`
        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        @keyframes ping { 0% { transform: scale(0.1); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
      `}</style>
    </div>
  );
};

export default AeroRadar;
