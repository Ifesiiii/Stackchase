<script setup>
import { useTalkAnimations } from '../../composables/useSmoothScroll'
import { RouterLink } from 'vue-router'
import workers from '../../assets/img/workers.png'
import Button from './Button.vue'

useTalkAnimations()
</script>

<template>
  <section class="font-heading talk-section relative overflow-hidden mx-auto mb-12 sm:mb-16 lg:mb-[50px] h-[600px] sm:h-[650px] lg:h-[659px] max-w-screen-[1366px]">
    <div class="absolute inset-0">
      <div 
        class="talk-background relative h-full bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${workers})` }"
      ></div>
      <div class="absolute inset-0 bg-black opacity-40"></div>
    </div>

    <!-- Content Container -->
    <div class="talk-content relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 lg:px-[80px] lg:py-[80px] lg:pb-[100px]">
      <!-- Top - Heading -->
      <div>
        <h2 class="max-w-full lg:w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium text-white leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[56px] tracking-[-0.2px] sm:tracking-[-0.28px]">
          A cohesive team - building<br class="hidden sm:block"> with purpose and precision.
        </h2>
      </div>

      <!-- Bottom - Text blocks and button -->
      <div class="mt-auto flex flex-col items-start lg:items-end pb-4 lg:pb-0">
        <div class="space-y-6 sm:space-y-8 max-w-full lg:max-w-[600px]">
          <!-- First Text Block -->
          <div>
            <h3 class="text-lg sm:text-xl lg:text-[24px] text-[#E5E5E5] mb-2 sm:mb-[8px] leading-[22px] sm:leading-[24px] tracking-[-0.12px]">
              When teams understand
            </h3>
            <p class="text-sm sm:text-base lg:text-[18px] text-[#DDC9B4] leading-[18px] sm:leading-[20px]">
              what matters, they move with purpose. Clarity turns<br class="hidden sm:block"> goals into reality.
            </p>
          </div>

          <!-- Second Text Block -->
          <div>
            <h3 class="text-xl sm:text-2xl lg:text-[32px] font-medium text-white leading-[26px] sm:leading-[32px] lg:leading-[38px]">
              We learn fast, innovate faster and<br class="hidden sm:block"> keep moving.
            </h3>
          </div>

          <!-- Button -->
          <RouterLink to="/company/our-people">
            <Button class="mt-6 sm:mt-8" text="Our People" @click="handleOurPeopleClick"/>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>