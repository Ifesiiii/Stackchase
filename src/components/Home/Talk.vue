<script setup>
import { useTalkAnimations } from '../../composables/useSmoothScroll'
import workers from '../../assets/img/workers.png'
import Button from './Button.vue'

useTalkAnimations()
</script>

<template>
  <section class="font-heading talk-section relative overflow-hidden mx-auto mb-[100px] h-[659px] max-w-screen-[1366px]">
    <div class="absolute inset-0">
      <div 
        class="talk-background relative h-[659px] bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${workers})` }"
      ></div>
      <div class="absolute inset-0 bg-black opacity-40"></div>
    </div>

    <!-- Content Container -->
    <div class="talk-content relative z-10 flex flex-col justify-between">
      <!-- Left Side - Top Left -->
      <div>
        <h2 class="mt-[80px] ml-[80px] w-[700px] text-[30px] md:text-4xl lg:text-[56px] font-medium text-white lg:leading-[56px] lg:tracking-[-0.28px]">
          A cohesive team - building<br> with purpose and precision.
        </h2>
      </div>

      <!-- Right Side - Bottom Right -->
      <div class="mt-[120px] mr-[73px] flex justify-end">
        <div class="space-y-8">
          <!-- First Text Block -->
          <div class="">
            <h3 class="text-[24px] md:text-[24px] text-[#E5E5E5] mb-[8px] leading-[24px] tracking-[-0.12px]">
              When teams understand
            </h3>
            <p class="text-[18px] text-[#DDC9B4] leading-[20px] mb-[28px]">
              what matters, they move with purpose. Clarity turns<br> goals into reality.
            </p>
          </div>

          <!-- Second Text Block -->
          <div>
            <h3 class="text-[32px] font-medium text-white leading-[28px]">
              We learn fast, innovate faster and<br> keep moving.
            </h3>
          </div>

          <!-- Button -->
          <Button></Button>
        </div>
      </div>
    </div>
  </section>
</template>

