<script setup>
import { ref } from 'vue'
import Navtop from './Navtop.vue'
import waves from '../../assets/img/waves.png'
</script>

<template>
    <section class="font-heading relative overflow-hidden mx-auto mb-[100px] max-w-screen-[1366px]">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="waves" 
          alt="" 
          class="w-full h-full object-cover" 
        />
      </div>
    
  
      <!-- Content -->
      <div class="relative z-10 mx-8 xl:mx-[80px] mt-[48px]">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="pb-32 pt-16 md:pt-24 lg:pt-16">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-2xl mb-4 leading-7 tracking-[0.2px]">Government</p>
            <h1 class="text-6xl font-semibold text-white leading-[72px] tracking-[-2.56px]">
              Powering Secure, Scalable<br> Digital Governance
            </h1>
          </div>
        </div>
      </div>
    </section>
</template>