<template>
  <div class="mockup-finedine">
    <div class="finedine-overlay"></div>
    <div class="finedine-content">
      <header class="fd-header">
        <span class="fd-logo">L'ÉLITE</span>
        <span class="fd-reservation">RESERVATIONS</span>
      </header>
      <main class="fd-main">
        <span class="fd-est">EST. 2024 // PARIS</span>
        <h2>FINE DINE CLUB</h2>
        <p class="fd-desc">An exclusive private member culinary experience. Hand-crafted seasonal tasting menus by Michelin-starred guest chefs.</p>
        <div class="fd-sep"></div>
        <div class="fd-footer-info">
          <span>PRIVATE CELLAR</span>
          <span>MEMBERSHIP BY INVITATION ONLY</span>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.mockup-finedine {
  width: 100%;
  height: 100%;
  background: #141414;
  color: #dfd8cb;
  position: relative;
  box-sizing: border-box;
  font-family: 'Georgia', serif;
}

.finedine-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(197, 160, 89, 0.08) 0%, rgba(0,0,0,0.85) 100%);
  z-index: 1;
}

.finedine-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}

.fd-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  font-family: var(--font-primary);
}

.fd-logo {
  font-weight: bold;
  color: #c5a059;
}

.fd-reservation {
  border-bottom: 1px solid rgba(197, 160, 89, 0.4);
  cursor: pointer;
  color: #c5a059;
}

.fd-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.fd-est {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: #c5a059;
  font-family: var(--font-primary);
}

.fd-main h2 {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: #ffffff;
}

.fd-desc {
  font-size: 0.78rem;
  line-height: 1.5;
  max-width: 320px;
  opacity: 0.8;
  font-style: italic;
}

.fd-sep {
  width: 40px;
  height: 1px;
  background: #c5a059;
  margin: 10px 0;
}

.fd-footer-info {
  display: flex;
  gap: 20px;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  opacity: 0.6;
  font-family: var(--font-primary);
}

@media (max-width: 768px) {
  .fd-main h2 {
    font-size: 1.4rem;
  }
  .fd-desc {
    max-width: 240px;
  }
  .fd-footer-info {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
