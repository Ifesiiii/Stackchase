<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import Navbar from '../Navbar.vue'
import background1 from '../../assets/img/Background.png'
import background2 from '../../assets/img/bg2.png'
import collaborationImg from '../../assets/img/chat2.png'

const currentSlide = ref(0)
let autoplayInterval = null

const slides = [
  {
    background: background1,
    hasImage: false
  },
  {
    background: background2,
    hasImage: true,
    image: collaborationImg
  }
]

const nextSlide = () => {
  const next = (currentSlide.value + 1) % slides.length
  animateSlide(next)
}

const goToSlide = (index) => {
  if (index === currentSlide.value) return
  animateSlide(index)
  resetAutoplay()
}

const animateSlide = (toIndex) => {
  const tl = gsap.timeline()
  const fromIndex = currentSlide.value

  // Animate out current slide
  if (fromIndex === 0) {
    tl.to('.slide-1-bg', {
      x: '-100%',
      duration: 1,
      ease: 'power2.inOut'
    }, 0)
    .to('.slide-1-tagline', {
      y: -30,
      opacity: 0,
      rotationX: -15,
      z: -100,
      duration: 0.5,
      ease: 'power2.in'
    }, 0)
    .to('.slide-1-title', {
      y: -50,
      opacity: 0,
      rotationX: -20,
      z: -150,
      duration: 0.6,
      ease: 'power2.in'
    }, 0.1)
    .to('.slide-1-btn', {
      y: -30,
      opacity: 0,
      rotationX: -15,
      z: -100,
      duration: 0.5,
      ease: 'power2.in'
    }, 0.2)
  } else {
    tl.to('.slide-2-bg', {
      x: '-100%',
      duration: 1,
      ease: 'power2.inOut'
    }, 0)
    .to('.slide-2-title', {
      y: -50,
      opacity: 0,
      rotationX: -20,
      z: -150,
      duration: 0.6,
      ease: 'power2.in'
    }, 0)
    .to('.slide-2-btn', {
      y: -30,
      opacity: 0,
      rotationX: -15,
      z: -100,
      duration: 0.5,
      ease: 'power2.in'
    }, 0.1)
    .to('.slide-2-img', {
      x: 100,
      opacity: 0,
      rotationY: 20,
      z: -100,
      duration: 0.6,
      ease: 'power2.in'
    }, 0)
  }

  // Animate in new slide
  if (toIndex === 0) {
    tl.fromTo('.slide-1-bg',
      { x: '100%' },
      { x: 0, duration: 1, ease: 'power2.out' },
      0.2
    )
    .fromTo('.slide-1-tagline',
      { y: 50, opacity: 0, rotationX: 15, z: -100 },
      { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.7, ease: 'power3.out' },
      0.7
    )
    .fromTo('.slide-1-title',
      { y: 80, opacity: 0, rotationX: 25, z: -200 },
      { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.8, ease: 'power3.out' },
      0.8
    )
    .fromTo('.slide-1-btn',
      { y: 50, opacity: 0, rotationX: 15, z: -100 },
      { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.7, ease: 'power3.out' },
      1
    )
  } else {
    tl.fromTo('.slide-2-bg',
      { x: '100%' },
      { x: 0, duration: 1, ease: 'power2.out' },
      0.2
    )
    .fromTo('.slide-2-title',
      { y: 80, opacity: 0, rotationX: 25, z: -200 },
      { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.8, ease: 'power3.out' },
      0.8
    )
    .fromTo('.slide-2-btn',
      { y: 50, opacity: 0, rotationX: 15, z: -100 },
      { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.7, ease: 'power3.out' },
      1
    )
    .fromTo('.slide-2-img',
      { x: 100, opacity: 0, rotationY: -20, scale: 0.9, z: -100 },
      { x: 0, opacity: 1, rotationY: 0, scale: 1, z: 0, duration: 0.8, ease: 'power3.out' },
      0.9
    )
  }

  currentSlide.value = toIndex
}

const resetAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  startAutoplay()
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

onMounted(() => {
  // Set initial positions for both backgroundss
  gsap.set('.slide-1-bg', { x: 0 })
  gsap.set('.slide-2-bg', { x: '100%' })
  
  // Initial animation for first slide with 3D effects
  gsap.fromTo('.slide-1-bg',
    { x: '100%' },
    { x: 0, duration: 1.2, ease: 'power2.out' }
  )
  gsap.fromTo('.slide-1-tagline',
    { y: 50, opacity: 0, rotationX: 15, z: -100 },
    { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.7, delay: 0.3, ease: 'power3.out' }
  )
  gsap.fromTo('.slide-1-title',
    { y: 80, opacity: 0, rotationX: 25, z: -200 },
    { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
  )
  gsap.fromTo('.slide-1-btn',
    { y: 50, opacity: 0, rotationX: 15, z: -100 },
    { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' }
  )

  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-900">
    
    <!-- First Background -->
    <div 
      class="slide-1-bg bg-no-repeat absolute inset-0 z-0"
      :style="{
        backgroundImage: `url(${slides[0].background})`,
        backgroundSize: 'cover',
      }"
    ></div>

    <!-- Second Background -->
    <div 
      class="slide-2-bg bg-no-repeat absolute inset-0 z-0"
      :style="{
        backgroundImage: `url(${slides[1].background})`,
        backgroundSize: 'cover',
      }"
    ></div>
    
    <Navbar class="relative z-10" />
    
    <!-- Slide 1 Content -->
    <div 
      v-show="currentSlide === 0"
      class="relative z-10 container pl-8 flex items-center min-h-screen"
      style="perspective: 1000px;"
    >
      <div>
        <p class="slide-1-tagline text-[#DDC9B4] text-medium mb-8" style="transform-style: preserve-3d;">
          Redefining connection, collaboration, and growth across Africa.
        </p>
        <h1 class="slide-1-title text-2xl md:text-6xl lg:text-6xl font-medium md:font-semibold lg:font-medium text-white mb-14 leading-tight" style="transform-style: preserve-3d;">
          Stackchase builds software <br>that drives your business<br> operations
        </h1>
        <button class="slide-1-btn bg-white text-[#006699] px-10 py-3 rounded font-semibold hover:bg-[#006699] hover:text-white transition" style="transform-style: preserve-3d;">
          Button CTA
        </button>
      </div>
    </div>

    <!-- Slide 2 Content -->
    <div 
      v-show="currentSlide === 1"
      class="relative z-10 container px-8 flex items-center min-h-screen"
      style="perspective: 1000px;"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <h1 class="slide-2-title text-2xl md:text-4xl lg:text-4xl font-medium md:font-medium lg:font-semibold text-white mb-14 leading-tight opacity-0" style="transform-style: preserve-3d;">
            Ration is a <span class="text-[#0099CC]">messaging</span> and 
            <span class="text-[#0099CC]">collaboration</span> platform that offers 
            intuitive, flexible and extensible features.
          </h1>
          <button class="slide-2-btn bg-white text-[#006699] px-10 py-3 rounded font-semibold hover:bg-[#006699] hover:text-white transition opacity-0" style="transform-style: preserve-3d;">
            Learn more
          </button>
        </div>
        <div class="flex justify-center items-center lg:justify-end">
          <img 
            :src="slides[1].image" 
            alt="Collaboration" 
            class="slide-2-img max-w-full h-auto opacity-0"
            style="transform-style: preserve-3d;"
          />
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>