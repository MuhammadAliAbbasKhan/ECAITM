import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RefreshCw, Cpu, Activity, Zap, Shield, Flame, Gauge } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ECAITMControlCanvas = () => {
  const canvasRef = useRef(null);
  const { addToast } = useToast();

  // Control State
  const [gpuLoad, setGpuLoad] = useState(48); // MW
  const [coolantFlow, setCoolantFlow] = useState(620); // L/min
  const [vppDischarge, setVppDischarge] = useState(2400); // kW
  const [tokenAllocation, setTokenAllocation] = useState(85); // %

  // Automation Toggles
  const [autonomousMode, setAutonomousMode] = useState(true);
  const [pueOptimizer, setPueOptimizer] = useState(true);
  const [peakShaving, setPeakShaving] = useState(true);
  const [thermalGuard, setThermalGuard] = useState(true);

  // Computed Metrics
  const [pue, setPue] = useState(1.06);
  const [avgTemp, setAvgTemp] = useState(54);
  const [tokensPerWatt, setTokensPerWatt] = useState(412);
  const [monthlySavings, setMonthlySavings] = useState(128450);

  // Animation Frame
  useEffect(() => {
    // Dynamic recalculation
    const calculatedPue = (1.02 + (gpuLoad / 100) * 0.12 - (coolantFlow / 1000) * 0.04 - (vppDischarge / 5000) * 0.03).toFixed(2);
    const calculatedTemp = Math.round(42 + (gpuLoad / 100) * 38 - (coolantFlow / 1000) * 20);
    const calculatedTokens = Math.round(520 - calculatedTemp * 2 + (tokenAllocation / 100) * 80);
    const calculatedSavings = Math.round(gpuLoad * 2200 + vppDischarge * 18 + (1.35 - Math.max(1.04, calculatedPue)) * 150000);

    setPue(Math.max(1.04, parseFloat(calculatedPue)));
    setAvgTemp(calculatedTemp);
    setTokensPerWatt(calculatedTokens);
    setMonthlySavings(calculatedSavings);
  }, [gpuLoad, coolantFlow, vppDischarge, tokenAllocation]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let tick = 0;

    const render = () => {
      tick += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      // Clear Canvas Background
      ctx.fillStyle = '#0D1117';
      ctx.fillRect(0, 0, width, height);

      // Grid Pattern
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Title Banner
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(10, 10, width - 20, 36);
      ctx.fillStyle = '#00C4EE';
      ctx.font = 'bold 13px "JetBrains Mono", monospace';
      ctx.fillText('ECAITM 2D DIRECT-TO-CHIP TWO-PHASE LIQUID COOLING & EV VPP TELEMETRY SIMULATOR', 20, 33);

      // 1. Draw Server Racks Cluster (Left)
      const rackX = 30;
      const rackY = 65;
      const rackW = 280;
      const rackH = 220;

      ctx.fillStyle = '#161B22';
      ctx.strokeStyle = '#30363D';
      ctx.lineWidth = 2;
      ctx.fillRect(rackX, rackY, rackW, rackH);
      ctx.strokeRect(rackX, rackY, rackW, rackH);

      ctx.fillStyle = '#8B949E';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('AI HPC GPU RACKS (NVIDIA GB200/H100)', rackX + 15, rackY + 22);

      // Render 5 Server Blades inside Rack with Thermal Heatmaps
      for (let i = 0; i < 5; i++) {
        const bladeY = rackY + 35 + i * 35;
        const bladeH = 26;
        const bladeW = rackW - 30;

        // Dynamic Temperature Heatmap Color
        const tempOffset = Math.sin(tick + i) * 4;
        const currentBladeTemp = avgTemp + tempOffset;
        let heatColor = '#10B981'; // cool green
        if (currentBladeTemp > 65) heatColor = '#EF4444'; // hot red
        else if (currentBladeTemp > 55) heatColor = '#F59E0B'; // amber

        ctx.fillStyle = '#0D1117';
        ctx.fillRect(rackX + 15, bladeY, bladeW, bladeH);
        ctx.strokeStyle = heatColor;
        ctx.strokeRect(rackX + 15, bladeY, bladeW, bladeH);

        // Cold Plate Nodes
        ctx.fillStyle = heatColor;
        ctx.fillRect(rackX + 25, bladeY + 6, 40, 14);

        ctx.fillStyle = '#E2E8F0';
        ctx.font = '10px "JetBrains Mono"';
        ctx.fillText(`BLADE #${i + 1} | GPU ${Math.round(currentBladeTemp)}°C`, rackX + 75, bladeY + 17);

        // Dynamic LED Indicator
        ctx.fillStyle = '#00C4EE';
        ctx.beginPath();
        ctx.arc(rackX + bladeW, bladeY + 13, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Liquid Cooling Loop Flow (Middle Pipes)
      const pipeStartX = rackX + rackW;
      const pipeY = rackY + 110;
      const pipeEndX = pipeStartX + 120;

      // Pipe outline
      ctx.strokeStyle = 'rgba(0, 196, 238, 0.4)';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(pipeStartX, pipeY);
      ctx.lineTo(pipeEndX, pipeY);
      ctx.stroke();

      // Fluid Micro-bubbles inside Pipe
      const numBubbles = Math.round(coolantFlow / 80);
      ctx.fillStyle = '#00C4EE';
      for (let b = 0; b < numBubbles; b++) {
        const bubbleX = pipeStartX + ((tick * 100 + b * 25) % 120);
        const bubbleY = pipeY + Math.sin(tick * 2 + b) * 3;
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. NeuCool CDU / Heat Exchanger (Middle-Right)
      const cduX = pipeEndX;
      const cduY = rackY + 20;
      const cduW = 160;
      const cduH = 180;

      ctx.fillStyle = '#161B22';
      ctx.strokeStyle = '#00C4EE';
      ctx.lineWidth = 2;
      ctx.fillRect(cduX, cduY, cduW, cduH);
      ctx.strokeRect(cduX, cduY, cduW, cduH);

      ctx.fillStyle = '#00C4EE';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('NeuCool® TWO-PHASE CDU', cduX + 12, cduY + 25);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px "JetBrains Mono"';
      ctx.fillText(`Flow: ${coolantFlow} L/min`, cduX + 15, cduY + 50);
      ctx.fillText(`CDU Temp: ${(avgTemp - 18).toFixed(1)}°C`, cduX + 15, cduY + 70);
      ctx.fillText(`Phase: Liquid/Vapor`, cduX + 15, cduY + 90);
      ctx.fillText(`PUE: ${pue.toFixed(2)}`, cduX + 15, cduY + 110);

      // Vapor Phase Animation Waves inside CDU
      ctx.strokeStyle = 'rgba(255, 209, 0, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < cduW - 20; x += 5) {
        const y = cduY + 140 + Math.sin(tick * 3 + x * 0.1) * 6;
        if (x === 0) ctx.moveTo(cduX + 10 + x, y);
        else ctx.lineTo(cduX + 10 + x, y);
      }
      ctx.stroke();

      // 4. EV VPP Energy Storage Battery Cluster (Right)
      const vppX = cduX + cduW + 40;
      const vppY = rackY;
      const vppW = 200;
      const vppH = 220;

      ctx.fillStyle = '#161B22';
      ctx.strokeStyle = '#FFD100';
      ctx.lineWidth = 2;
      ctx.fillRect(vppX, vppY, vppW, vppH);
      ctx.strokeRect(vppX, vppY, vppW, vppH);

      ctx.fillStyle = '#FFD100';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('EV VPP BATTERY GRID DISPATCH', vppX + 12, vppY + 22);

      // Charge/Discharge Level Bar
      const dischargePercent = Math.min(100, Math.round((vppDischarge / 5000) * 100));
      ctx.fillStyle = '#0D1117';
      ctx.fillRect(vppX + 15, vppY + 45, vppW - 30, 24);
      ctx.fillStyle = '#FFD100';
      ctx.fillRect(vppX + 15, vppY + 45, ((vppW - 30) * dischargePercent) / 100, 24);

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 10px "JetBrains Mono"';
      ctx.fillText(`DISCHARGE: ${vppDischarge} kW (${dischargePercent}%)`, vppX + 22, vppY + 61);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px "JetBrains Mono"';
      ctx.fillText(`Peak Shaving: ${peakShaving ? 'ACTIVE' : 'OFF'}`, vppX + 15, vppY + 95);
      ctx.fillText(`Grid Frequency: 60.00 Hz`, vppX + 15, vppY + 115);
      ctx.fillText(`Tokens/Watt: ${tokensPerWatt}`, vppX + 15, vppY + 135);
      ctx.fillText(`Est. Savings: $${monthlySavings.toLocaleString()}/mo`, vppX + 15, vppY + 160);

      // Pulse spark animation for VPP grid energy transfer
      if (peakShaving) {
        ctx.fillStyle = '#FFD100';
        ctx.beginPath();
        ctx.arc(vppX + 15 + Math.random() * (vppW - 30), vppY + 185, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Telemetry Ticker at Bottom of Canvas
      ctx.fillStyle = '#090D16';
      ctx.fillRect(10, height - 32, width - 20, 24);
      ctx.fillStyle = '#00C4EE';
      ctx.font = '11px "JetBrains Mono"';
      ctx.fillText(
        `LIVE TELEMETRY >> GPU Load: ${gpuLoad} MW | Coolant Flow: ${coolantFlow} L/min | Temp: ${avgTemp}°C | PUE: ${pue.toFixed(2)} | VPP: ${vppDischarge} kW | Status: NOMINAL OPTIMIZED`,
        18,
        height - 16
      );

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [gpuLoad, coolantFlow, vppDischarge, tokenAllocation, avgTemp, pue, tokensPerWatt, monthlySavings, peakShaving]);

  const handleReset = () => {
    setGpuLoad(48);
    setCoolantFlow(620);
    setVppDischarge(2400);
    setTokenAllocation(85);
    addToast('Simulator parameters reset to baseline defaults.', 'info');
  };

  return (
    <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
      
      {/* Free Callout Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(0,196,238,0.15) 0%, rgba(255,209,0,0.15) 100%)',
          border: '1px solid rgba(0,196,238,0.4)',
          borderRadius: '8px',
          padding: '12px 18px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap className="w-5 h-5 text-cyan-400" />
          <span style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.9rem' }}>
            ECAITM 2D Telemetry Simulator is 100% Free for Evaluation! Upgrade to active AI agent control for live facility deployments.
          </span>
        </div>
        <span className="badge-cyan">100% FREE PUBLIC ENGINE</span>
      </div>

      {/* 2D Canvas Display */}
      <div className="canvas-container" style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
        <canvas ref={canvasRef} width={800} height={320} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Control Sliders & Automation Toggles Grid */}
      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        
        {/* Sliders Column */}
        <div style={{ background: '#090D16', padding: '20px', borderRadius: '12px', border: '1px solid #1E293B' }}>
          <h4 style={{ color: '#00C4EE', fontSize: '0.95rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity className="w-4 h-4" /> Telemetry Control Parameters
          </h4>

          {/* GPU Load Slider */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>
              <span>GPU Compute Load</span>
              <span style={{ color: '#00C4EE', fontWeight: 700 }}>{gpuLoad} MW</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={gpuLoad}
              onChange={(e) => setGpuLoad(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#00C4EE' }}
            />
          </div>

          {/* Coolant Flow Slider */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>
              <span>Dielectric Coolant Flow</span>
              <span style={{ color: '#00C4EE', fontWeight: 700 }}>{coolantFlow} L/min</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              value={coolantFlow}
              onChange={(e) => setCoolantFlow(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#00C4EE' }}
            />
          </div>

          {/* EV VPP Discharge Slider */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>
              <span>EV VPP Discharge Power</span>
              <span style={{ color: '#FFD100', fontWeight: 700 }}>{vppDischarge} kW</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              value={vppDischarge}
              onChange={(e) => setVppDischarge(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#FFD100' }}
            />
          </div>

          {/* Token Allocation Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>
              <span>Dynamic AI Token Allocation</span>
              <span style={{ color: '#10B981', fontWeight: 700 }}>{tokenAllocation}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={tokenAllocation}
              onChange={(e) => setTokenAllocation(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#10B981' }}
            />
          </div>
        </div>

        {/* AI Agent Toggles & Live Metrics Column */}
        <div style={{ background: '#090D16', padding: '20px', borderRadius: '12px', border: '1px solid #1E293B' }}>
          <h4 style={{ color: '#FFD100', fontSize: '0.95rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield className="w-4 h-4" /> AI Optimization Toggles
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', cursor: 'pointer' }}>
              <span>Autonomous AIDC Mode Active</span>
              <input type="checkbox" checked={autonomousMode} onChange={(e) => setAutonomousMode(e.target.checked)} style={{ accentColor: '#00C4EE', width: '18px', height: '18px' }} />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', cursor: 'pointer' }}>
              <span>PUE Optimizer Engine (Sub-1.05 Target)</span>
              <input type="checkbox" checked={pueOptimizer} onChange={(e) => setPueOptimizer(e.target.checked)} style={{ accentColor: '#00C4EE', width: '18px', height: '18px' }} />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', cursor: 'pointer' }}>
              <span>EV VPP Peak Shaving Dispatch</span>
              <input type="checkbox" checked={peakShaving} onChange={(e) => setPeakShaving(e.target.checked)} style={{ accentColor: '#FFD100', width: '18px', height: '18px' }} />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#CBD5E1', cursor: 'pointer' }}>
              <span>Thermal Emergency Guard</span>
              <input type="checkbox" checked={thermalGuard} onChange={(e) => setThermalGuard(e.target.checked)} style={{ accentColor: '#10B981', width: '18px', height: '18px' }} />
            </label>
          </div>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block' }}>Monthly Energy Savings</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10B981' }}>${monthlySavings.toLocaleString()}</span>
            </div>
            <button onClick={handleReset} style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '6px', padding: '6px 12px', color: '#94A3B8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
