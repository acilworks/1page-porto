<template>
  <div class="mockup-theo">
    <div class="theo-header">
      <span class="theo-title">THÉO GUINEC</span>
      <span class="theo-lang">FR / EN</span>
    </div>
    <div class="theo-body">
      <div class="theo-left">
        <p class="theo-intro">Direction de création et design graphique spécialisé dans les identités de marque et le design éditorial.</p>
        <span class="theo-index">INDEX DE PROJETS</span>
      </div>
      <div class="theo-right">
        <div class="theo-image-frame">
          <div class="theo-image-placeholder">
            <span>ÉDITIONS 2025</span>
          </div>
        </div>
      </div>
    </div>
    <div class="theo-footer">
      <span>PARIS, FRANCE</span>
      <span>©2026 PROTOCLES</span>
    </div>
  </div>
</template>

<style scoped>
.mockup-theo {
  width: 100%;
  height: 100%;
  background: #f4efe9;
  color: #1b1a19;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Courier New', Courier, monospace;
}

.theo-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(27, 26, 25, 0.1);
  padding-bottom: 8px;
}

.theo-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  align-items: center;
}

.theo-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.theo-intro {
  font-size: 0.72rem;
  line-height: 1.5;
  color: #3b3a38;
}

.theo-index {
  font-size: 0.65rem;
  font-weight: bold;
  border-bottom: 1px solid #1b1a19;
  width: fit-content;
  cursor: pointer;
}

.theo-right {
  display: flex;
  justify-content: center;
}

.theo-image-frame {
  width: 130px;
  height: 160px;
  background: #ffffff;
  border: 1px solid rgba(27, 26, 25, 0.15);
  box-shadow: 2px 4px 10px rgba(0,0,0,0.05);
  padding: 6px;
}

.theo-image-placeholder {
  width: 100%;
  height: 100%;
  background: #eae2d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.55rem;
  font-weight: bold;
  color: #7c766e;
}

.theo-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .theo-body {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .theo-left {
    align-items: center;
  }
  .theo-right {
    display: none;
  }
}
</style>
