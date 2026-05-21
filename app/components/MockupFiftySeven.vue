<template>
  <div class="mockup-fiftyseven">
    <div class="terminal-header">
      <div class="status-indicator">
        <span class="pulse-dot"></span>
        <span>NODE // ACTIVE</span>
      </div>
      <div class="terminal-title">FIFTYSEVEN // SECURE_SHELL</div>
      <div class="uptime">UP: 99.98%</div>
    </div>
    <div class="terminal-grid">
      <div class="panel left-panel">
        <div class="panel-header">GRID METRICS</div>
        <div class="metrics-list">
          <div class="metric">
            <span>CPU CORE</span>
            <span class="value orange">32.4%</span>
          </div>
          <div class="metric">
            <span>NET IN</span>
            <span class="value">42.8 KB/s</span>
          </div>
          <div class="metric">
            <span>MEMORY</span>
            <span class="value">8.2 / 16 GB</span>
          </div>
        </div>
      </div>
      <div class="panel main-panel">
        <div class="terminal-feed">
          <div class="feed-line">> INITIALIZE QUANTUM PROTOCOL [OK]</div>
          <div class="feed-line">> DECRYPTING DATA LAYER... 100%</div>
          <div class="feed-line">> SYSTEM READY. ENJOY SECURE NODE.</div>
        </div>
        <div class="quantum-bar">
          <div class="progress-fill"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mockup-fiftyseven {
  width: 100%;
  height: 100%;
  background: #08090a;
  color: #a0a5ad;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.75rem;
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ff4f00;
  padding: 6px 12px;
  background: rgba(255, 79, 0, 0.04);
  color: #ff4f00;
  font-weight: bold;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #ff4f00;
  border-radius: 50%;
  box-shadow: 0 0 8px #ff4f00;
  animation: pulse 1s infinite alternate;
}

.terminal-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 12px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0d0f11;
  display: flex;
  flex-direction: column;
}

.panel-header {
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 8px;
  font-weight: bold;
  font-size: 0.65rem;
}

.metrics-list {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.metric {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
}

.value {
  color: #ffffff;
}

.value.orange {
  color: #ff4f00;
}

.main-panel {
  padding: 10px;
  justify-content: space-between;
}

.terminal-feed {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.feed-line {
  color: #38b000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feed-line:last-child {
  color: #ff4f00;
}

.quantum-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  width: 60%;
  height: 100%;
  background: #ff4f00;
  box-shadow: 0 0 10px #ff4f00;
  animation: load 4s infinite linear;
}

@keyframes pulse {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes load {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

@media (max-width: 768px) {
  .terminal-grid {
    grid-template-columns: 1fr;
  }
  .left-panel {
    display: none;
  }
}
</style>
