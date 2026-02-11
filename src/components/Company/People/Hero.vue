<script setup>
import { ref } from 'vue'
import Navtop from './Navtop.vue'
import sand from '../../../assets/img/sand.png'
</script>

<template>
    <section class="font-heading relative overflow-hidden mx-auto max-w-screen-[1366px]">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="sand" 
          alt="" 
          class="w-full h-[635px] object-cover" 
        />
      </div>
    
  
      <!-- Content -->
      <div class="relative z-10 mx-8 xl:mx-[80px] mt-[48px]">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="mt-[24px] lg:mt-[80px] mb-[96px] lg:mb-[200px]">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-lg sm:text-[24px] mb-6 sm:mb-8 leading-[24px] sm:leading-[28px] tracking-[0.2px]">Our People</p>
            <h1 class="max-w-4xl text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-medium md:font-semibold lg:font-semibold text-white mb-8 sm:mb-12 lg:mb-[72px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[72px] tracking-[-1.5px] sm:tracking-[-2.56px]">
              Meet the Minds Behind the<br> Stack
            </h1>
          </div>
        </div>
      </div>
    </section>
</template>