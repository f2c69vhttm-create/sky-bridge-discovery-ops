import React from 'react';

const LogisticsControl = () => {
  const flightSchedule = [
    { id: 'DS-700', member: 'Solana, D.', time: '14:15', status: 'Inbound', transport: 'Tahoe Highcountry' },
    { id: 'DLC-44', member: 'Founder A.', time: '16:30', status: 'On Ground', transport: 'Toyota Tundra' },
    { id: 'PG-09', member: 'Guest B.', time: '18:00', status: 'Pending', transport: 'Golf Cart VIP' }
  ];

  return (
    <div style={{ backgroundColor: '#002366', color: 'white', padding: '30px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', maxWidth: '600px', borderTop: '6px solid #D4AF37' }}>
      
      {/* Dashboard Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>SKY-BRIDGE LOGISTICS HUB</h2>
        <div style={{ textAlign: 'right', fontSize: '10px', color: '#D4AF37' }}>
          <p style={{ margin: 0 }}>OPERATIONAL INTEL</p>
          <p style={{ margin: 0 }}>Río San Juan, DR</p>
        </div>
      </div>

      {/* Daily Flight Manifest Table */}
      <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '15px', marginBottom: '25px' }}>
        <p style={{ fontSize: '10px', color: '#aaa', marginBottom: '15px', fontWeight: 'bold' }}>DAILY FLIGHT SCHEDULE</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: '#D4AF37' }}>
              <th style={{ padding: '8px' }}>FLIGHT</th>
              <th style={{ padding: '8px' }}>MEMBER</th>
              <th style={{ padding: '8px' }}>TIME</th>
              <th style={{ padding: '8px' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {flightSchedule.map((flight, index) => (
              <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{flight.id}</td>
                <td style={{ padding: '8px' }}>{flight.member}</td>
                <td style={{ padding: '8px' }}>{flight.time}</td>
                <td style={{ padding: '8px', color: flight.status === 'Inbound' ? '#2ecc71' : '#fff' }}>{flight.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Asset Inventory & Readiness */}
      <div style={{ display: 'grid', grid_templateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ border: '1px solid rgba(212,175,55,0.3)', padding: '15px', borderRadius: '8px' }}>
          <p style={{ color: '#D4AF37', fontSize: '9px', fontWeight: 'bold', margin: '0 0 10px 0' }}>GROUND FLEET STATUS</p>
          <ul style={{ fontSize: '11px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '5px' }}>✓ Tahoe Highcountry - Fuel: 100%</li>
            <li style={{ marginBottom: '5px' }}>✓ Tundra 2022 - Cleaned</li>
            <li style={{ opacity: 0.5 }}>- Rubicon (In Service)</li>
          </ul>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
          <p style={{ color: '#aaa', fontSize: '9px', fontWeight: 'bold', margin: '0 0 10px 0' }}>AMENITIES READY</p>
          <ul style={{ fontSize: '11px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '5px' }}>✓ Climate Control: 21°C</li>
            <li style={{ marginBottom: '5px' }}>✓ Fiji Water Stocked</li>
            <li style={{ marginBottom: '5px' }}>✓ Wi-Fi Pass: "DLC_Founders"</li>
          </ul>
        </div>
      </div>

      {/* Global Intelligence Alert */}
      <div style={{ marginTop: '20px', backgroundColor: '#D4AF37', color: '#002366', padding: '10px', borderRadius: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '11px' }}>
        ⚠️ SYSTEM STATUS: ALL LOGISTICS CLEAR FOR AERODROME ARRIVAL
      </div>

    </div>
  );
};

export default LogisticsControl;
