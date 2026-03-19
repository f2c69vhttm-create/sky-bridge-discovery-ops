// Componente de Radar Sky-Bridge
const AeroRadar = () => {
  return (
    <div className="bg-discovery-navy p-8 rounded-xl shadow-2xl border-l-4 border-discovery-gold text-white">
      {/* Cabecera del Radar */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-discovery-gold text-xs tracking-widest uppercase font-bold">Inbound Flight</h2>
          <h1 className="text-3xl font-light italic">N700DS - Gulfstream G650</h1>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs uppercase">Destination</p>
          <p className="text-xl font-semibold">RSJ AERODROME</p>
        </div>
      </div>

      {/* Visualización del Radar (Simulada) */}
      <div className="relative h-64 bg-black/30 rounded-full border border-discovery-gold/20 flex items-center justify-center overflow-hidden mb-8">
        <div className="absolute w-full h-full border rounded-full border-discovery-gold/5 animate-ping"></div>
        <div className="z-10 text-center">
          <span className="text-discovery-gold animate-pulse text-4xl">✈</span>
          <p className="text-xs mt-2 font-mono text-discovery-gold">35.4 NM OUT</p>
        </div>
        {/* Línea de Costa RSJ simulada */}
        <div className="absolute bottom-0 w-full h-20 bg-discovery-gold/10 blur-xl"></div>
      </div>

      {/* Panel de Logística Terrestre */}
      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-gray-400 text-[10px] uppercase">Ground Transport</p>
          <p className="text-sm font-medium">Chevrolet Tahoe Highcountry</p>
          <p className="text-discovery-gold text-xs mt-1 underline">STATUS: READY ON TARMAC</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg text-right">
          <p className="text-gray-400 text-[10px] uppercase">Estimated Arrival</p>
          <p className="text-2xl font-bold text-discovery-gold">14:15 AST</p>
          <p className="text-[10px] text-gray-500 italic">Countdown: 12:45 min</p>
        </div>
      </div>
    </div>
  );
};
