<script setup>
import workers from '../../assets/img/workers.png'
import Button from './Button.vue';
</script>

<template>
  <section class="relative min-h-screen px-8">
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- Background Image -->
      <div 
        class="w-full h-full bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${workers})` }"
      ></div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 h-full min-h-screen flex flex-col justify-between">
      <!-- Left Side - Top Left -->
      <div class="pl-10 pt-28">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-2xl">
          A cohesive team - building with purpose and precision.
        </h2>
      </div>

      <!-- Right Side - Bottom Right -->
      <div class="pb-20 flex justify-end">
        <div class="space-y-8 max-w-md">
          <!-- First Text Block -->
          <div class="">
            <h3 class="text-2xl md:text-2xl font-sm text-[#E5E5E5] mb-4">
              When teams understand
            </h3>
            <p class="text-lg text-[#DDC9B4] leading-relaxed">
              what matters, they move with purpose. Clarity turns goals into reality.
            </p>
          </div>

          <!-- Second Text Block -->
          <div>
            <h3 class="text-2xl md:text-3xl font-medium text-white mb-10">
              We learn fast, innovate faster and keep moving.
            </h3>
          </div>

          <!-- Button -->
          <Button></Button>
        </div>
      </div>
    </div>
  </section>
</template>