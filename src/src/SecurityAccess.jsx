import React from 'react';

const SecurityAccess = () => {
  return (
    <div style={{ backgroundColor: '#F8F9FA', color: '#333', padding: '30px', borderRadius: '20px', border: '1px solid #e0e0e0', fontFamily: 'Inter, sans-serif', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: 'auto' }}>
      
      {/* Header: Brand & Security Level */}
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <p style={{ color: '#002366', fontSize: '10px', fontWeight: 'bold', letterSpacing: '3px', margin: 0 }}>PLAYA GRANDE GOLF & OCEAN CLUB</p>
        <h2 style={{ color: '#D4AF37', fontSize: '18px', fontWeight: '600', marginTop: '5px' }}>AERODROME STEALTH ACCESS</h2>
      </div>

      {/* Member Identity Card */}
      <div style={{ backgroundColor: '#002366', color: 'white', padding: '20px', borderRadius: '15px', position: 'relative', overflow: 'hidden', marginBottom: '25px' }}>
        <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '100px', height: '100px', backgroundColor: 'rgba(212,175,55,0.1)', borderRadius: '50%' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#D4AF37', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Member: Solana, D.</p>
            <p style={{ margin: 0, fontSize: '10px', color: '#D4AF37' }}>STATUS: FOUNDER CIRCLE</p>
          </div>
        </div>
      </div>

      {/* Dynamic QR Code Area */}
      <div style={{ textAlign: 'center', padding: '20px', border: '2px dashed #D4AF37', borderRadius: '15px', backgroundColor: 'white' }}>
        <div style={{ fontSize: '100px', color: '#002366', margin: '10px 0' }}>🔳</div>
        <p style={{ fontSize: '9px', color: '#888', margin: 0 }}>ENCRYPTED ACCESS CODE</p>
        <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#002366', marginTop: '5px' }}>EXPIRES IN: 00:59</p>
      </div>

      {/* Vehicle Liaison */}
      <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '9px', color: '#aaa', margin: 0 }}>ASSIGNED TRANSPORT</p>
          <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>CHEVROLET TAHOE 2026</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '9px', color: '#aaa', margin: 0 }}>CLEARANCE</p>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#2ecc71', margin: 0 }}>LEVEL 5 (VIP)</p>
        </div>
      </div>

      {/* Footer Branding */}
      <div style={{ marginTop: '30px', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ fontSize: '8px', letterSpacing: '2px' }}>DISCOVERY LAND COMPANY | SKY-BRIDGE OPS</p>
      </div>

    </div>
  );
};

export default SecurityAccess;
