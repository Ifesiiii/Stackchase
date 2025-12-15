<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../composables/useSmoothScroll'

import Hero from '../components/Home/Hero.vue'
import Timeline from '../components/Home/Timeline.vue'
import Talk from '../components/Home/Talk.vue'
import Product from '../components/Home/Product.vue'
import Innovation from '../components/Home/Innovation.vue'
import Footer from '../components/Footer.vue'
import Cookies from '../components/Cookies.vue'


gsap.registerPlugin(ScrollTrigger)

// Initializing smooth scroll
useSmoothScroll()

onMounted(() => {
  // Add a subtle fade-in for section titles
  gsap.utils.toArray('h2').forEach((title) => {
    gsap.from(title, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})
</script>

<template>
  <div class="smooth-scroll-wrapper">
    <Hero />
    <Timeline />
    <Talk />
    <Product />
    <Innovation />
    <Footer />
    <Cookies />
  </div>
</template>

<style scoped>
.smooth-scroll-wrapper {
  overflow-x: hidden;
}
</style>