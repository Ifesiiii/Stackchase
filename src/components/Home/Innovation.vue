<script setup>
import { ref } from 'vue'
import SmallCard from './Scard.vue'
import bg from '../../assets/img/officework.png'
import Button from './Button.vue'

const currentSlide = ref(0)

const features = [
  {
    id: 1,
    title: 'Unified Metrics Hub',
    description: 'We brought all your KPIs, goals, and progress into one intelligent dashboard'
  },
  {
    id: 2,
    title: 'Seamless Collaboration Engine',
    description: 'From task updates to team messages, Stackchase integrates collaboration directly into your'
  },
  {
    id: 3,
    title: 'Smart API Management',
    description: 'With our Singular API solution, we simplify the complexity of managing multiple APIs'
  }
]

const slides = [
  {
    id: 1,
    image: bg,
    topTitle: 'When teams understand',
    topDescription: 'what matters, they move with purpose. Clarity turns goals into reality.',
    mainTitle: 'We help you start fast, learn faster, and keep moving.'
  },
  {
    id: 2,
    image: '/path-to-team-image-2.jpg',
    topTitle: 'When teams understand',
    topDescription: 'what matters, they move with purpose. Clarity turns goals into reality.',
    mainTitle: 'We help you start fast, learn faster, and keep moving.'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}
</script>


<template>
  <section class="bg-gray-50 py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-12">
        Best Innovation
      </h2>

      <!-- Feature Cards Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SmallCard
          v-for="feature in features"
          :key="feature.id"
          :title="feature.title"
          :description="feature.description"
        />
      </div>

      <!-- Carousel Section -->
      <div class="relative rounded-2xl overflow-hidden">
        <div 
          class="relative min-h-[500px] bg-cover bg-center"
          :style="{ backgroundImage: `url('${slides[currentSlide].image}')` }"
        >
          
          <div class="absolute inset-0 bg-black opacity-40"></div>

          <!-- Content -->
          <div class="relative z-10 p-12 md:p-16 flex flex-col justify-center min-h-[500px]">
            <div class="max-w-2xl">
              <div class="mb-8">
                <h3 class="text-2xl md:text-2xl font-sm text-[#E5E5E5] mb-4">
                  {{ slides[currentSlide].topTitle }}
                </h3>
                <p class="text-[#DDC9B4] leading-relaxed">
                  {{ slides[currentSlide].topDescription }}
                </p>
              </div>

              <!-- Main Headline -->
              <h3 class="text-2xl md:text-3xl font-medium text-white mb-10">
                {{ slides[currentSlide].mainTitle }}
              </h3>

              <!-- Button -->
              <Button></Button>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="absolute bottom-8 right-8 flex gap-3 z-20">
            <button
              @click="prevSlide"
              class="w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
            <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



