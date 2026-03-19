import React, { useState } from 'react';
import AeroRadar from './AeroRadar';
import SecurityAccess from './SecurityAccess';
import LogisticsControl from './LogisticsControl';

const App = () => {
  const [activeTab, setActiveTab] = useState('radar');

  const navStyle = {
    padding: '12px 20px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: '12px',
    letterSpacing: '2px',
    borderBottom: '2px solid transparent',
    transition: '0.3s'
  };

  const activeNavStyle = {
    ...navStyle,
    borderBottom: '2px solid #D4AF37',
    backgroundColor: 'rgba(212,175,55,0.1)'
  };

  return (
    <div style={{ backgroundColor: '#001a4d', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Brand Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: '200', margin: 0 }}>SKY-BRIDGE</h1>
        <p style={{ color: '#D4AF37', fontSize: '10px', letterSpacing: '4px', margin: '5px 0' }}>OPERATIONAL INTELLIGENCE SUITE</p>
      </div>

      {/* Navigation Switcher */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '5px' }}>
        <button onClick={() => setActiveTab('radar')} style={activeTab === 'radar' ? activeNavStyle : navStyle}>RADAR</button>
        <button onClick={() => setActiveTab('security')} style={activeTab === 'security' ? activeNavStyle : navStyle}>SECURITY</button>
        <button onClick={() => setActiveTab('logistics')} style={activeTab === 'logistics' ? activeNavStyle : navStyle}>LOGISTICS</button>
      </div>

      {/* Dynamic Viewport */}
      <div style={{ width: '100%', maxWidth: '650px', display: 'flex', justifyContent: 'center', animation: 'fadeIn 0.5s ease' }}>
        {activeTab === 'radar' && <AeroRadar />}
        {activeTab === 'security' && <SecurityAccess />}
        {activeTab === 'logistics' && <LogisticsControl />}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Operational Footer */}
      <div style={{ marginTop: 'auto', paddingTop: '40px', color: 'rgba(255,255,255,0.2)', fontSize: '9px', textAlign: 'center' }}>
        PLAYA GRANDE GOLF & OCEAN CLUB | DEVELOPED BY SR. SOLANA | RSJ-AZ 2026
      </div>
    </div>
  );
};

export default App;
