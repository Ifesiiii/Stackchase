<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useInnovationAnimations } from '../../composables/useSmoothScroll'
import SmallCard from './Scard.vue'
import bg from '../../assets/img/officework.png'
import bg2 from '../../assets/img/Dworking.png'
import bg3 from '../../assets/img/Goodtime.png'
import bg4 from '../../assets/img/ethnic.png'
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
    topDescription: 'What matters, they move with purpose. Clarity turns goals into reality.',
    mainTitle: 'We help you start fast, learn faster, and keep moving.'
  },
  {
    id: 2,
    image: bg2,
    topTitle: 'No more guesswork',
    topDescription: 'We turned messy goals and scattered KPIs into a single, smart performance dashboard.',
    mainTitle: 'We connects your team’s goals, metrics, and progress in one clean view.'
  },
  {
    id: 3,
    image: bg3,
    topTitle: 'When teams understand',
    topDescription: 'What matters, they move with purpose. Clarity turns goals into reality.',
    mainTitle: 'We help you start fast, learn faster, and keep moving.'
  },
  {
    id: 4,
    image: bg4,
    topTitle: 'No more guesswork',
    topDescription: 'We turned messy goals and scattered KPIs into a single, smart performance dashboard.',
    mainTitle: 'We connects your team’s goals, metrics, and progress in one clean view.'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  // Reset auto-play timer when user manually navigates
  stopAutoPlay()
  startAutoPlay()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
  // Reset auto-play timer when user manually navigates
  stopAutoPlay()
  startAutoPlay()
}

// Auto-play functionality
let autoPlayInterval = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Start auto-play when component mounts
onMounted(() => {
  startAutoPlay()
})

// Clean up interval when component unmounts
onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="font-heading px-8 mt-[50px] mb-[100px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-[62px] leading-[56px]">
        Future Built
      </h2>

      <!-- Feature Cards Row - Add feature-cards-container wrapper -->
      <div class="feature-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="feature-card custom-dashed-border bg-white p-6 hover:shadow-md transition-shadow duration-300">
          <h3 class="text-2xl font-semibold text-[#131313] mb-3 leading-7">
            Engineering what's next
          </h3>
          <p class="text-[#131313] text-xl leading-6">
            Stackchase creates platforms that<br> challenge convention and shape the<br> future of connected work.
          </p>
        </div>

        <div class="feature-card bg-white p-6 custom-dashed-border hover:shadow-md transition-shadow duration-300">
          <h3 class="text-2xl font-semibold text-[#131313] mb-3 leading-7">
            Intelligent Innovation
          </h3>
          <p class="text-[#131313] text-xl leading-6">
            Stackchase creates platforms that<br> challenge convention and shape the<br> future of connected work.
          </p>
        </div>

        <div class="feature-card bg-white p-6 custom-dashed-border hover:shadow-md transition-shadow duration-300">
          <h3 class="text-2xl font-semibold text-[#131313] mb-3 leading-7">
            Built for Control
          </h3>
          <p class="text-[#131313] text-xl leading-6">
            We design systems that give businesses<br> full control that keep data and decisions<br> close to home.
          </p>
        </div>
      </div>

      <!-- Slide image Section - Add innovation-slide class -->
      <div class="innovation-slide mb-16 relative rounded-2xl overflow-hidden">
        <Transition name="slide" mode="out-in">
          <div 
            :key="currentSlide"
            class="relative w-full h-[623px] bg-cover bg-center"
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
                <div class="max-w-sm custom-dashed-border-horizontal"></div>
              </div>

              <!-- Main Headline -->
              <h3 class="max-w-lg text-2xl md:text-3xl font-medium text-white mb-10 leading-7">
                {{ slides[currentSlide].mainTitle }}
              </h3>

              <!-- Button -->
              <RouterLink to="/Contact">
              <Button text="Let's talk" @click="handleLetsTalkClick" />
              </RouterLink>
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
        </Transition>
      </div>
    </div>
  </section>
</template>
<style scoped>
.custom-dashed-border {
  position: relative;
  border-left: 1px solid transparent;
}

.custom-dashed-border::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-image: linear-gradient(to bottom, #BEBEBE 30%, transparent 30%);
  background-size: 1px 20px;
  background-repeat: repeat-y;
}

.custom-dashed-border-horizontal {
  position: relative;
  border-bottom: 1px solid transparent;
}

.custom-dashed-border-horizontal::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  background-image: linear-gradient(to right, #9F9F9F 30%, transparent 30%);
  background-size: 20px 1px;
  background-repeat: repeat-x;
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>