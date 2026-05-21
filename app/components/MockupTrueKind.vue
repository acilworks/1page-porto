<template>
  <div class="mockup-truekind">
    <header class="truekind-header">
      <div class="logo">T R U E K I N D</div>
      <nav class="nav-links">
        <span>Shop All</span>
        <span>Ingredients</span>
        <span>Values</span>
      </nav>
      <div class="bag">Bag (0)</div>
    </header>
    <main class="truekind-main">
      <div class="hero-left">
        <h2>Conscious skincare for every body.</h2>
        <p>Formulated with wild-harvested botanicals and dermatological science to support your skin barrier naturally.</p>
        <button class="shop-btn">Explore Collection ➔</button>
      </div>
      <div class="hero-right">
        <div class="organic-blob-container">
          <div class="blob-graphic"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.mockup-truekind {
  width: 100%;
  height: 100%;
  background: #fbfaf6;
  color: #2b3a2f;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Times New Roman', Georgia, serif;
}

.truekind-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-family: var(--font-primary);
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid rgba(43, 58, 47, 0.1);
  padding-bottom: 12px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links span {
  cursor: pointer;
  opacity: 0.8;
}

.nav-links span:hover {
  opacity: 1;
}

.truekind-main {
  flex: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-left h2 {
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a251e;
}

.hero-left p {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #556056;
  font-family: var(--font-primary);
  max-width: 320px;
}

.shop-btn {
  background: #2b3a2f;
  color: #fbfaf6;
  border: none;
  padding: 10px 18px;
  font-size: 0.75rem;
  font-family: var(--font-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 2px;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s;
}

.shop-btn:hover {
  background: #425848;
}

.hero-right {
  display: flex;
  justify-content: center;
}

.organic-blob-container {
  width: 140px;
  height: 140px;
  background: #e8e6dd;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.blob-graphic {
  width: 90px;
  height: 90px;
  background: #cbd3c5;
  border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%;
  animation: morph 6s ease-in-out infinite alternate;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

@media (max-width: 768px) {
  .truekind-main {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-left {
    align-items: center;
  }
  .nav-links {
    display: none;
  }
  .hero-right {
    display: none;
  }
}
</style>
