<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Text definitions for ScrambleText effect
const nameText = 'Ahmad Arief H.'
const displayName = ref(nameText)

const taglineLine1 = "It Ain't Much But"
const taglineLine2 = "It's Honest Work"
const displayTagline1 = ref(taglineLine1)
const displayTagline2 = ref(taglineLine2)

// Custom high-performance scramble effect using GSAP core tweening
const scrambleEffect = (text, targetRef, duration = 0.02, delay = 0) => {
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

// Autoplay & Loading Underline State
const progressWidth = ref(0)
const isHovered = ref(false)
const nextWorkIndex = computed(() => (activeWorkIndex.value + 1) % projects.length)
let autoplayTween = null

const startAutoplay = () => {
  if (autoplayTween) autoplayTween.kill()
  progressWidth.value = 0
  
  autoplayTween = gsap.to(progressWidth, {
    value: 100,
    duration: 15,
    ease: "none",
    onComplete: () => {
      activeWorkIndex.value = nextWorkIndex.value
      startAutoplay()
    }
  })
}

const pauseAndSelect = (index) => {
  isHovered.value = true
  if (autoplayTween) autoplayTween.kill()
  activeWorkIndex.value = index
  progressWidth.value = 100
}

const resumeAutoplay = () => {
  isHovered.value = false
  startAutoplay()
}

const selectProject = (index) => {
  activeWorkIndex.value = index
  if (isHovered.value) {
    if (autoplayTween) autoplayTween.kill()
    progressWidth.value = 100
  } else {
    startAutoplay()
  }
}

onMounted(() => {
  // Cascaded scramble effect on mount
  scrambleEffect(nameText, displayName, 3.5, 0.3)
  scrambleEffect(taglineLine1, displayTagline1, 1.0, 0.3)
  scrambleEffect(taglineLine2, displayTagline2, 1.0, 0.3)
  
  // Start project autoplay
  startAutoplay()

  // Initialize quickTo for badge following
  if (badgeRef.value) {
    xTo = gsap.quickTo(badgeRef.value, "x", { duration: 0.35, ease: "power3.out" })
    yTo = gsap.quickTo(badgeRef.value, "y", { duration: 0.35, ease: "power3.out" })
  }
})

onUnmounted(() => {
  if (autoplayTween) autoplayTween.kill()
})


// Daftar data project portofolio Anda.
// Anda bisa mengubah isi, tipe media (image/video/placeholder), dan link aset di sini.
const projects = [
  { 
    name: 'Kibardjaya', 
    url: 'kibardjaya.com', 
    year: '2026',
    mediaType: 'video', // Ubah menjadi 'image' atau 'video' untuk menggunakan aset asli
    mediaUrl: '/videos/wm-rem-kibardjaya.mp4', // Path file gambar/video Anda di folder public/
    color: 'linear-gradient(135deg, #1f2c23 0%, #0d140f 100%)' // Gradient warna placeholder
  },
  { 
    name: 'LMS TE', 
    url: 'lms.trilogikaedutama.id', 
    year: '2026',
    mediaType: 'image', 
    mediaUrl: '/images/lms-trilogika-16.9.png', 
    color: 'linear-gradient(135deg, #0e2a2a 0%, #041212 100%)'
  },
  { 
    name: 'Trilogika Edutama', 
    url: 'trilogikaedutama.id', 
    year: '2026',
    mediaType: 'image', 
    mediaUrl: '/images/te-web.png', 
    color: 'linear-gradient(135deg, #222222 0%, #0a0a0a 100%)'
  },
  { 
    name: 'LSP TE', 
    url: 'lsp.trilogikaedutama.id', 
    year: '2026',
    mediaType: 'image', 
    mediaUrl: '/images/lsp-te.webp', 
    color: 'linear-gradient(135deg, #3d1b0d 0%, #170701 100%)'
  },
  { 
    name: 'Simico', 
    url: '#', 
    year: '2024',
    mediaType: 'image', 
    mediaUrl: '/images/simico.jpg', 
    color: 'linear-gradient(135deg, #1e2f3d 0%, #0c151c 100%)'
  },
  { 
    name: 'Matador App', 
    url: '#', 
    year: '2024',
    mediaType: 'image', 
    mediaUrl: '/images/matador.jpg', 
    color: 'linear-gradient(135deg, #321e42 0%, #150a1f 100%)'
  },
  { 
    name: 'Raja App', 
    url: '#', 
    year: '2023',
    mediaType: 'image', 
    mediaUrl: '/images/raja.jpg', 
    color: 'linear-gradient(135deg, #29241b 0%, #120f0a 100%)'
  },
  // { 
  //   name: 'Theo Guinec', 
  //   url: 'theoguinec.fr', 
  //   year: '2023',
  //   mediaType: 'placeholder', 
  //   mediaUrl: '', 
  //   color: 'linear-gradient(135deg, #3d3b37 0%, #1c1b19 100%)'
  // }
]

// Project aktif yang sedang di-hover (default Kibardjaya di index 0)
const activeWorkIndex = ref(0)

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
    items: ['2x Site of the Day', '2x Developer Award', 'Young Jury'],
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
    items: ['2x Webzibition', 'Developer Spotlight'],
    extra: true
  },
  {
    category: 'Muzli',
    items: ['1x Picks Honor', 'LinkedIn Golden List'],
    extra: true
  }
]

// State list awards terbuka/tertutup
const showAllAwards = ref(false)

// State modal awards untuk mobile
const showMobileAwardsModal = ref(false)

// Data awards yang terlihat sesuai state toggle
const visibleAwards = computed(() => {
  return showAllAwards.value ? awards : awards.filter(a => !a.extra)
})

// Coordinates tracking for the cursor-following badge
const badgeRef = ref(null)
let xTo = null
let yTo = null
let hasMoved = false

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  if (!hasMoved) {
    gsap.set(badgeRef.value, { x, y })
    hasMoved = true
  } else {
    if (xTo && yTo) {
      xTo(x)
      yTo(y)
    }
  }
}

const handleMouseLeave = () => {
  hasMoved = false
}
</script>

<template>
  <div class="portfolio-app">
    <!-- Header Utama -->
    <header class="portfolio-header">
      <h1 @mouseenter="triggerNameScramble" class="scrambler-title">{{ displayName }}</h1>
      <div class="portfolio-tagline desktop-only">
        {{ displayTagline1 }}<br>{{ displayTagline2 }}
      </div>
    </header>

    <!-- Mobile Info Grid: Renders below the title on mobile, hidden on desktop -->
    <div class="mobile-sub-grid mobile-only">
      <div class="mobile-works-column">
        <h2 class="section-title">Selected Works ({{ projects.length }})</h2>
        <ul class="works-list-mobile">
          <li
            v-for="(project, index) in projects"
            :key="'mob-' + project.name"
            class="work-item"
            :class="{ 
              active: activeWorkIndex === index,
              'loading-next': nextWorkIndex === index && !isHovered
            }"
            @click="selectProject(index)"
          >
            {{ project.name }}
            <div 
              class="work-item-progress" 
              :style="{ 
                width: activeWorkIndex === index 
                  ? '100%' 
                  : (nextWorkIndex === index && !isHovered) 
                    ? progressWidth + '%' 
                    : '0%' 
              }"
            ></div>
          </li>
        </ul>
      </div>
      <div class="mobile-tagline-column">
        <div class="portfolio-tagline">
          {{ displayTagline1 }}<br>{{ displayTagline2 }}
        </div>
        <a href="#" class="mobile-awards-trigger" @click.prevent="showMobileAwardsModal = true">
          Awards & Recognition
        </a>
      </div>
    </div>

    <!-- Main Content Layout -->
    <main class="portfolio-main">
      
      <!-- Kolom Kiri: Daftar Project (Desktop Only) -->
      <section class="sidebar-works desktop-only">
        <h2 class="section-title">Selected Works ({{ projects.length }})</h2>
        <ul class="works-list" @mouseleave="resumeAutoplay">
          <li
            v-for="(project, index) in projects"
            :key="project.name"
            class="work-item"
            :class="{ 
              active: activeWorkIndex === index,
              'loading-next': nextWorkIndex === index && !isHovered
            }"
            @mouseenter="pauseAndSelect(index)"
            @click="selectProject(index)"
          >
            {{ project.name }}
            <div 
              class="work-item-progress" 
              :style="{ 
                width: activeWorkIndex === index 
                  ? '100%' 
                  : (nextWorkIndex === index && !isHovered) 
                    ? progressWidth + '%' 
                    : '0%' 
              }"
            ></div>
          </li>
        </ul>
      </section>

      <!-- Kolom Tengah: Visual Showcase (Both Desktop & Mobile) -->
      <section class="showcase-container">
        <div class="mockup-frame">
          <div class="mockup-body" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <Transition name="slide" mode="out-in">
              <a 
                :key="activeProject.name" 
                :href="'https://' + activeProject.url" 
                target="_blank" 
                class="showcase-media-wrapper"
              >
                
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

              </a>
            </Transition>

            <!-- Visit Site Badge Wrapper (GSAP positioned) -->
            <div 
              ref="badgeRef"
              class="visit-site-badge-container"
            >
              <!-- Visit Site Badge Inner -->
              <span class="visit-site-badge">
                Visit Site ↗
              </span>
            </div>
          </div>
        </div>
        <!-- Click hint under showcase (mobile only) -->
        <p class="click-hint mobile-only">(Click Image To Visit Site)</p>
      </section>

      <!-- Mobile-only Hire Me CTA (Renders below mockup on mobile) -->
      <!-- <section class="mobile-hire-me mobile-only">
        <span class="hire-me-label">Hire Me :)</span><br>
        <a href="mailto:ahmadariefharwoko@gmail.com" class="email-link">
          ahmadariefharwoko@gmail.com
        </a>
      </section> -->

      <!-- Kolom Kanan: Daftar Penghargaan (Awards) (Desktop Only) -->
      <section class="sidebar-awards desktop-only">
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
     <section class="mobile-hire-me mobile-only">
        <span class="hire-me-label">Hire Me :)</span><br>
        <a href="mailto:ahmadariefharwoko@gmail.com" class="email-link">
          ahmadariefharwoko@gmail.com
        </a>
      </section>
    <footer class="portfolio-footer">
      
      <div class="footer-section">
        <span class="footer-label">About</span>
        <p>Independent creative developer, based in Indonesia. Focus on building websites with motion and interaction.</p>
      </div>
      <div class="footer-section desktop-only">
        <span class="footer-label">Hire Me :)</span><br>
        <a href="mailto:ahmadariefharwoko@gmail.com" class="email-link">
          ahmadariefharwoko@gmail.com
        </a>
      </div>
      <div class="footer-section">
        <span class="footer-label">Social Media</span>
        <div class="social-links">
          <a href="https://api.whatsapp.com/send/?phone=6281241248191&text=I%27m+just+visited+your+website&type=phone_number&app_absent=0" target="_blank">WhatsApp</a>
          <a href="https://www.linkedin.com/in/acilworks/" target="_blank">LinkedIn</a>
          <a href="https://github.com/acilworks" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>

    <!-- Mobile Awards Modal Overlay -->
    <Transition name="slide-up">
      <div v-if="showMobileAwardsModal" class="awards-modal-overlay" @click="showMobileAwardsModal = false">
        <div class="awards-modal-content" @click.stop>
          <div class="modal-header-container">
            <!-- <h1 class="modal-title" @click="triggerNameScramble">{{ displayName }}</h1> -->
            <div class="modal-subheader">
              <span class="modal-section-title">Awards & Recognition (23)</span>
              <button class="close-modal-btn" @click="showMobileAwardsModal = false">Close</button>
            </div>
          </div>
          <div class="modal-body">
            <div class="awards-list-modal">
              <div
                v-for="award in awards"
                :key="'modal-' + award.category"
                class="award-category"
              >
                <h3 class="award-title">{{ award.category }}</h3>
                <ul class="award-details">
                  <li v-for="item in award.items" :key="item">
                    <span class="elbow-char">└</span>
                    <span class="item-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
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
