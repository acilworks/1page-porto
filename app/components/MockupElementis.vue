<template>
  <div class="mockup-elementis">
    <div class="elementis-overlay"></div>
    <header class="elementis-header">
      <div class="logo">E L E M E N T I S</div>
      <nav class="nav-links">
        <span>Destinations</span>
        <span>Wellness</span>
        <span>Innovation</span>
        <span>Nature</span>
        <span class="desktop-only">Community</span>
        <span class="desktop-only">The Story</span>
      </nav>
      <button class="join-btn">Join Us ↗</button>
    </header>
    <main class="elementis-main">
      <div class="ticker-container">
        <div class="ticker-text">
          Community • Wellness • Innovation • Nature
        </div>
      </div>
      <div class="elementis-footer">
        <span class="arrow">↓</span>
        <p class="subtitle">A lifestyle revolution for a sustainable fulfilling future</p>
        <span class="scroll-explore">Scroll to Explore</span>
      </div>
    </main>
  </div>
</template>

<style scoped>
.mockup-elementis {
  width: 100%;
  height: 100%;
  background: url('/elementis_bg.png') no-repeat center center;
  background-size: cover;
  position: relative;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
}

.elementis-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(5, 10, 10, 0.4) 0%, rgba(5, 10, 10, 0.7) 100%);
  z-index: 1;
}

.elementis-header, .elementis-main {
  position: relative;
  z-index: 2;
}

.elementis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.nav-links {
  display: flex;
  gap: 16px;
  font-size: 0.75rem;
  opacity: 0.85;
}

.nav-links span {
  cursor: pointer;
  transition: opacity 0.2s;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.nav-links span:hover {
  opacity: 1;
}

.join-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  padding: 6px 14px;
  font-size: 0.7rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
  backdrop-filter: blur(4px);
}

.join-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ffffff;
}

.elementis-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
}

.ticker-container {
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  padding: 8px 0;
  display: flex;
}

.ticker-text {
  font-size: 3.8rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  opacity: 0.95;
  text-shadow: 0 4px 15px rgba(0,0,0,0.6);
  width: 100%;
  text-align: center;
}

.elementis-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.arrow {
  font-size: 1.1rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
}

.subtitle {
  max-width: 300px;
  text-align: center;
  line-height: 1.4;
  opacity: 0.85;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

.scroll-explore {
  opacity: 0.8;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

@media (max-width: 768px) {
  .logo {
    font-size: 0.8rem;
  }
  .nav-links {
    display: none;
  }
  .ticker-text {
    font-size: 2.2rem;
  }
  .subtitle {
    max-width: 180px;
    font-size: 0.7rem;
  }
  .scroll-explore {
    display: none;
  }
}
</style>
