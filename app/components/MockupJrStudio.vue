<template>
  <div class="mockup-jrstudio">
    <div class="header-studio">
      <span class="logo">JR™</span>
      <span class="location">TOKYO / LONDON</span>
      <span class="status">AVAILABLE 2026</span>
    </div>
    <div class="studio-grid">
      <div class="grid-cell main-title">
        <h2>WE SHAPE<br>DIGITAL<br>NARRATIVES</h2>
      </div>
      <div class="grid-cell description">
        <p>A multi-disciplinary design studio specializing in brand identity, interactive 3D sites, and custom creative technologies.</p>
        <div class="links">
          <span>PROJECTS ➔</span>
          <span>CONTACT ➔</span>
        </div>
      </div>
    </div>
    <div class="footer-studio">
      <span>©2026 JR STUDIO CO.</span>
      <span>BACK TO TOP ↑</span>
    </div>
  </div>
</template>

<style scoped>
.mockup-jrstudio {
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  color: #f3f3f3;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.header-studio {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  opacity: 0.7;
  font-family: monospace;
}

.logo {
  font-weight: bold;
  opacity: 1;
}

.studio-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
  align-items: center;
}

.main-title h2 {
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding-left: 20px;
}

.description p {
  font-size: 0.8rem;
  line-height: 1.4;
  opacity: 0.8;
}

.links {
  display: flex;
  gap: 16px;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: monospace;
}

.links span {
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}

.links span:hover {
  border-bottom-color: #ffffff;
}

.footer-studio {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  opacity: 0.5;
  font-family: monospace;
}

@media (max-width: 768px) {
  .studio-grid {
    grid-template-columns: 1fr;
  }
  .description {
    border-left: none;
    padding-left: 0;
  }
  .main-title h2 {
    font-size: 1.6rem;
  }
}
</style>
