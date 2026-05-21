<template>
  <div class="mockup-neuro">
    <div class="neuro-navbar">
      <div class="neuro-logo">NEURO.D</div>
      <div class="neuro-menu">
        <span>Resources</span>
        <span>Join Community</span>
      </div>
    </div>
    <div class="neuro-body">
      <div class="neuro-bubble-card">
        <h3>Celebrating cognitive variation.</h3>
        <p>A hub for neurodivergent professionals, providing resources, safe spaces, and career opportunities designed around custom neuro-types.</p>
        <div class="neuro-tags">
          <span class="tag">ADHD</span>
          <span class="tag">Autism</span>
          <span class="tag">Dyslexia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mockup-neuro {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #efe6fa 0%, #fae6f2 100%);
  color: #3b2857;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.neuro-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.neuro-logo {
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: -0.02em;
}

.neuro-menu {
  display: flex;
  gap: 12px;
  font-size: 0.7rem;
  font-weight: bold;
}

.neuro-menu span {
  background: rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  border-radius: 12px;
  cursor: pointer;
}

.neuro-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neuro-bubble-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(90, 60, 120, 0.08);
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.neuro-bubble-card h3 {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #2c1a47;
}

.neuro-bubble-card p {
  font-size: 0.75rem;
  line-height: 1.4;
  color: #63537a;
}

.neuro-tags {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}

.tag {
  font-size: 0.6rem;
  font-weight: bold;
  background: #f1e9fc;
  color: #682cd1;
  padding: 2px 8px;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .neuro-menu {
    display: none;
  }
  .neuro-bubble-card {
    max-width: 100%;
  }
}
</style>
