<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'

// Text definitions for ScrambleText effect
const nameText = 'AHMAD ARIEF HARWOKO'
const displayName = ref(nameText)

const taglineLine1 = "It Ain't Much But"
const taglineLine2 = "It's Honest Work"
const displayTagline1 = ref(taglineLine1)
const displayTagline2 = ref(taglineLine2)

// Custom high-performance scramble effect using GSAP core tweening
const scrambleEffect = (text, targetRef, duration = 0.2, delay = 0) => {
  const chars = "BCDFGHJKLMNPQRSTVWXYZ"
  // const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~}{|:?><-="
  const obj = { progress: 0 }
  
  // Kill any running tweens on the target element or state to prevent overlapping
  gsap.killTweensOf(targetRef)
  
  // Animate progress from 0 to 1, updating characters progressively
  return gsap.to(obj, {
    progress: 1,
    duration: duration,
    delay: delay,
    ease: "power2.out",
    onUpdate: () => {
      const len = text.length
      const progressCount = Math.floor(obj.progress * len)
      let result = ""
      for (let i = 0; i < len; i++) {
        if (i < progressCount) {
          result += text[i]
        } else if (text[i] === " " || text[i] === "\n") {
          result += text[i]
        } else {
          result += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      targetRef.value = result
    },
    onComplete: () => {
      targetRef.value = text
    }
  })
}

// Trigger name scramble on mouse enter
const triggerNameScramble = () => {
  scrambleEffect(nameText, displayName, 1.0)
}

onMounted(() => {
  // Cascaded scramble effect on mount
  scrambleEffect(nameText, displayName, 1.4, 0.1)
  scrambleEffect(taglineLine1, displayTagline1, 1.0, 0.3)
  scrambleEffect(taglineLine2, displayTagline2, 1.0, 0.5)
})


// Daftar data project portofolio Anda.
// Anda bisa mengubah isi, tipe media (image/video/placeholder), dan link aset di sini.
const projects = [
  { 
    name: 'TrueKind', 
    url: 'truekind.co', 
    year: '2025',
    mediaType: 'placeholder', // Ubah menjadi 'image' atau 'video' untuk menggunakan aset asli
    mediaUrl: '/images/truekind-preview.jpg', // Path file gambar/video Anda di folder public/
    color: 'linear-gradient(135deg, #1f2c23 0%, #0d140f 100%)' // Gradient warna placeholder
  },
  { 
    name: 'ELEMENTIS', 
    url: 'elementis.io', 
    year: '2025',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #0e2a2a 0%, #041212 100%)'
  },
  { 
    name: 'JR Studio', 
    url: 'jrstudio.com', 
    year: '2025',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #222222 0%, #0a0a0a 100%)'
  },
  { 
    name: 'FIFTYSEVEN', 
    url: 'fiftyseven.net', 
    year: '2024',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #3d1b0d 0%, #170701 100%)'
  },
  { 
    name: 'North of Zero', 
    url: 'northofzero.no', 
    year: '2024',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #1e2f3d 0%, #0c151c 100%)'
  },
  { 
    name: 'Neurodiversity', 
    url: 'neurodiversity.community', 
    year: '2024',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #321e42 0%, #150a1f 100%)'
  },
  { 
    name: 'Fine Dine Club', 
    url: 'finedine.club', 
    year: '2023',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #29241b 0%, #120f0a 100%)'
  },
  { 
    name: 'Theo Guinec', 
    url: 'theoguinec.fr', 
    year: '2023',
    mediaType: 'placeholder', 
    mediaUrl: '', 
    color: 'linear-gradient(135deg, #3d3b37 0%, #1c1b19 100%)'
  }
]

// Project aktif yang sedang di-hover (default ELEMENTIS di index 1)
const activeWorkIndex = ref(1)

// Mengambil detail project aktif
const activeProject = computed(() => projects[activeWorkIndex.value])

// Data Penghargaan / Awards & Recognition
const awards = [
  {
    category: 'Awwwards of the Year (Nominee)',
    items: ['1x Independent of the Year', '1x Developer Site of the Year', '1x E-commerce of the Year'],
    extra: false
  },
  {
    category: 'Awwwards',
    items: ['2x Site of the Day', '2x Developer Award', '1x Young Jury'],
    extra: false
  },
  {
    category: 'CSSDA',
    items: ['2x Website of the Day', '2x WOTM Nominee'],
    extra: false
  },
  {
    category: 'FWA',
    items: ['1x FWA of the Day'],
    extra: false
  },
  {
    category: 'GSAP',
    items: ['4x Site of the Day', '1x Site of the Week'],
    extra: true
  },
  {
    category: 'Codrops',
    items: ['2x Webzibition', '1x Developer Spotlight'],
    extra: true
  },
  {
    category: 'Muzi',
    items: ['1x Picks Honor', '1x LinkedIn Golden List'],
    extra: true
  }
]

// State list awards terbuka/tertutup
const showAllAwards = ref(false)

// Data awards yang terlihat sesuai state toggle
const visibleAwards = computed(() => {
  return showAllAwards.value ? awards : awards.filter(a => !a.extra)
})
</script>

<template>
  <div class="portfolio-app">
    <!-- Header Utama -->
    <header class="portfolio-header">
      <h1 @mouseenter="triggerNameScramble" class="scrambler-title">{{ displayName }}</h1>
      <div class="portfolio-tagline">
        {{ displayTagline1 }}<br>{{ displayTagline2 }}
      </div>
    </header>

    <!-- Main Content Layout -->
    <main class="portfolio-main">
      
      <!-- Kolom Kiri: Daftar Project (Desktop Only) -->
      <section class="sidebar-works">
        <h2 class="section-title">Selected Works ({{ projects.length }})</h2>
        <ul class="works-list">
          <li
            v-for="(project, index) in projects"
            :key="project.name"
            class="work-item"
            :class="{ active: activeWorkIndex === index }"
            @mouseenter="activeWorkIndex = index"
          >
            {{ project.name }}
          </li>
        </ul>
      </section>

      <!-- Kolom Tengah: Visual Showcase (Desktop Only) -->
      <section class="showcase-container desktop-only">
        <div class="mockup-frame">
          <!-- <div class="mockup-header">
            <div class="mockup-dots">
              <span class="mockup-dot"></span>
              <span class="mockup-dot"></span>
              <span class="mockup-dot"></span>
            </div>
            <div class="mockup-address">{{ activeProject.url }}</div>
          </div> -->
          <div class="mockup-body">
            <Transition name="slide" mode="out-in">
              <div :key="activeProject.name" class="showcase-media-wrapper">
                
                <!-- Opsi 1: Jika tipenya Gambar -->
                <img 
                  v-if="activeProject.mediaType === 'image'" 
                  :src="activeProject.mediaUrl" 
                  class="showcase-media" 
                  alt="Project Preview" 
                />

                <!-- Opsi 2: Jika tipenya Video -->
                <video 
                  v-else-if="activeProject.mediaType === 'video'" 
                  :src="activeProject.mediaUrl" 
                  class="showcase-media" 
                  autoplay 
                  loop 
                  muted 
                  playsinline
                ></video>

                <!-- Opsi 3: Tampilan Dummy Placeholder (Polos / Warna) -->
                <div 
                  v-else 
                  class="dummy-placeholder" 
                  :style="{ background: activeProject.color }"
                >
                  <div class="placeholder-tag">DUMMY PREVIEW PRESET</div>
                  <h3 class="placeholder-name">{{ activeProject.name }}</h3>
                  <p class="placeholder-hint">
                    Ubah <code>mediaType</code> ke <code>'image'</code> atau <code>'video'</code><br>
                    lalu masukkan path file di <code>mediaUrl</code> untuk mengganti isi area ini.
                  </p>
                </div>

              </div>
            </Transition>
          </div>
        </div>
      </section>

      <!-- Tampilan Mengalir Vertikal Khusus Mobile (Mobile Only) -->
      <section class="mobile-projects-list">
        <h2 class="section-title">Selected Works ({{ projects.length }})</h2>
        <div
          v-for="project in projects"
          :key="'mobile-' + project.name"
          class="mobile-project-card"
        >
          <div class="mobile-project-info">
            <h3 class="mobile-project-title">{{ project.name }}</h3>
            <span class="mobile-project-year">{{ project.year }}</span>
          </div>
          <div class="mockup-frame">
            <div class="mockup-header">
              <div class="mockup-dots">
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
              </div>
              <div class="mockup-address">{{ project.url }}</div>
            </div>
            <div class="mockup-body">
              <div class="showcase-media-wrapper">
                <img 
                  v-if="project.mediaType === 'image'" 
                  :src="project.mediaUrl" 
                  class="showcase-media" 
                  alt="Project Preview" 
                />
                <video 
                  v-else-if="project.mediaType === 'video'" 
                  :src="project.mediaUrl" 
                  class="showcase-media" 
                  autoplay 
                  loop 
                  muted 
                  playsinline
                ></video>
                <div 
                  v-else 
                  class="dummy-placeholder" 
                  :style="{ background: project.color }"
                >
                  <div class="placeholder-tag">DUMMY PREVIEW</div>
                  <h3 class="placeholder-name" style="font-size: 1.4rem;">{{ project.name }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Kolom Kanan: Daftar Penghargaan (Awards) -->
      <section class="sidebar-awards">
        <h2 class="section-title">Awards & Recognition (23)</h2>
        <div class="awards-list">
          <div
            v-for="award in visibleAwards"
            :key="award.category"
            class="award-category"
          >
            <h3 class="award-title">{{ award.category }}</h3>
            <ul class="award-details">
              <li v-for="item in award.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <button class="toggle-awards-btn" @click="showAllAwards = !showAllAwards">
          {{ showAllAwards ? '- See Less' : '+ See More' }}
        </button>
      </section>

    </main>

    <!-- Footer Utama -->
    <footer class="portfolio-footer">
      <div class="footer-section">
        <span class="footer-label">About</span>
        <p>Independent creative developer, based in Indonesia. Focus on building websites with motion and interaction.</p>
      </div>
      <div class="footer-section">
        <span class="footer-label">Hire Me :)</span>
        <a href="mailto:ahmadariefharwoko@gmail.com" class="email-link">
          ahmadariefharwoko@gmail.com
        </a>
      </div>
      <div class="footer-section">
        <span class="footer-label">Social Media</span>
        <div class="social-links">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">Awwwards</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.desktop-only {
  display: block;
}

@media (max-width: 1024px) {
  .desktop-only {
    display: none !important;
  }
}
</style>
