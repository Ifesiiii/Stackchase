<script setup>
import { ref } from 'vue'
import { useInnovationAnimations } from '../../composables/useSmoothScroll'
import SmallCard from './Scard.vue'
import bg from '../../assets/img/officework.png'
import Button from './Button.vue'

useInnovationAnimations()

// const features = [
//   {
//     id: 1,
//     title: 'Engineering what’s next',
//     description: 'Stackchase creates platforms that challenge convention and shape the future of connected work.'
//   },
//   {
//     id: 2,
//     title: 'Intelligent Innovation',
//     description: 'Stackchase creates platforms that challenge convention and shape the future of connected work.'
//   },
//   {
//     id: 3,
//     title: 'Built for Control',
//     description: 'We design systems that give businesses full control that keep data and decisions close to home.'
//   }
// ]


const currentSlide = ref(0)

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
  <section class="px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-12 leading-[56px]">
        Future Built
      </h2>

      <!-- Feature Cards Row - Add feature-cards-container wrapper -->
      <div class="feature-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="feature-card bg-white p-6 border-l border-[#BEBEBE] border-dashed hover:shadow-md transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-[#131313] mb-3 leading-7">
            Engineering what's next
          </h3>
          <p class="text-[#131313] text-sm leading-6">
            Stackchase creates platforms that<br> challenge convention and shape the<br> future of connected work.
          </p>
        </div>

        <div class="feature-card bg-white p-6 border-l border-[#BEBEBE] border-dashed hover:shadow-md transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-[#131313] mb-3 leading-7">
            Intelligent Innovation
          </h3>
          <p class="text-[#131313] text-sm leading-6">
            Stackchase creates platforms that<br> challenge convention and shape the<br> future of connected work.
          </p>
        </div>

        <div class="feature-card bg-white p-6 border-l border-[#BEBEBE] border-dashed hover:shadow-md transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-[#131313] mb-3 leading-7">
            Built for Control
          </h3>
          <p class="text-[#131313] text-sm leading-6">
            We design systems that give businesses<br> full control that keep data and decisions<br> close to home.
          </p>
        </div>
      </div>

      <!-- Slide image Section - Add innovation-slide class -->
      <div class="innovation-slide mb-16 relative rounded-2xl overflow-hidden">
        <div 
          class="relative min-h-[500px] w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url('${slides[currentSlide].image}')` }"
        >
          
          <div class="absolute inset-0 bg-black opacity-40"></div>

          <!-- Content -->
          <div class="relative z-10 p-12 md:p-16 flex flex-col justify-center">
            <div>
              <div class="mb-8">
                <h3 class="text-2xl md:text-2xl font-sm text-[#E5E5E5] mb-4 leading-6">
                  {{ slides[currentSlide].topTitle }}
                </h3>
                <p class="max-w-sm text-[#DDC9B4] mb-2 leading-5">
                  {{ slides[currentSlide].topDescription }}
                </p>
                <div class="max-w-sm border-b border-b-[#9F9F9F] border-dashed"></div>
              </div>

              <!-- Main Headline -->
              <h3 class="max-w-lg text-2xl md:text-3xl font-medium text-white mb-10 leading-7">
                {{ slides[currentSlide].mainTitle }}
              </h3>

              <!-- Button -->
              <Button></Button>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="absolute bottom-20 right-16 flex gap-3 z-20">
            <button
              @click="prevSlide"
              class="w-12 h-12 border border-white bg-opacity-90 text-white hover:bg-opacity-100 hover:text-black hover:bg-white rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="w-12 h-12 border border-white bg-opacity-90 text-white hover:bg-opacity-100 hover:text-black hover:bg-white rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>