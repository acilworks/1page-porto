<template>
  <div class="mockup-northofzero">
    <div class="north-header">
      <span>NOZ // RESEARCH</span>
      <span>INDEX 2026</span>
    </div>
    <div class="north-content">
      <div class="north-huge">00</div>
      <div class="north-body">
        <h3>NORTH OF ZERO</h3>
        <p>Documenting life and geological change at extreme latitudes. A visual survey of the Arctic circle.</p>
        <span class="view-report">VIEW RESEARCH DIRECTORY ➔</span>
      </div>
    </div>
    <div class="north-footer">
      <span>LAT 78.2232° N</span>
      <span>LONG 15.6469° E</span>
    </div>
  </div>
</template>

<style scoped>
.mockup-northofzero {
  width: 100%;
  height: 100%;
  background: #e3edf5;
  color: #1c2e3d;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.north-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  font-weight: bold;
  opacity: 0.6;
}

.north-content {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
  align-items: center;
}

.north-huge {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
  color: #b0c9dd;
}

.north-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.north-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.north-body p {
  font-size: 0.78rem;
  line-height: 1.45;
  color: #3b5063;
  max-width: 250px;
}

.view-report {
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  cursor: pointer;
  width: fit-content;
}

.north-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  font-family: monospace;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .north-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .north-huge {
    font-size: 3.5rem;
  }
  .north-body {
    align-items: center;
  }
}
</style>
