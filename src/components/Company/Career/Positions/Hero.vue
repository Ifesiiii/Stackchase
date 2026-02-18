<script setup>
import { ref } from 'vue'
import Navtop from './Navtop.vue'
import steps from '../../../../assets/img/steps.png'
</script>

<template>
    <section class="font-heading relative overflow-hidden mx-auto mb-6 max-w-screen-[1366px]">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="steps" 
          alt="" 
          class="w-full h-[761px] object-cover" 
        />
      </div>
    
  
      <!-- Content -->
      <div class="relative z-10 mx-8 xl:mx-[80px] mt-[48px]">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="pb-32 pt-16 md:pt-24 lg:pt-[116px]">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-2xl mb-6 leading-7 tracking-[0.2px]">Career</p>
            <h1 class="max-w-4xl text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] font-medium md:font-semibold lg:font-semibold text-white mb-8 sm:mb-12 lg:mb-[72px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[72px] tracking-[-1.5px] sm:tracking-[-2.56px]">
              Shape the Future of Reliable, Scalable Platforms
            </h1>

            <button class="bg-white text-[#002233] px-10 py-3 rounded font-semibold hover:bg-[#006699]
            hover:text-white transition">
            View Open Roles
            </button>
          </div>
        </div>
      </div>
    </section>
</template>