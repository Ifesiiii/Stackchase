<script setup>
import Navtop from './Navtop.vue'
import walls from '../../assets/img/walls.png'
</script>

<template>
    <section class="font-heading relative overflow-hidden mx-auto mb-[100px] max-w-screen-[1366px]">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="walls" 
          alt="" 
          class="w-full h-[559px] object-cover" 
        />
      </div>
    
  
      <!-- Content -->
      <div class="relative z-10 mx-8 xl:mx-[80px] mt-[48px]">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="pb-32 pt-16 md:pt-24 lg:pt-16">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-2xl mb-4 leading-7 tracking-[0.2px]">Contact Us</p>
            <h1 class="text-6xl font-semibold text-white leading-[72px] tracking-[-2.56px]">
              Let’s Build What’s Next,<br> Together
            </h1>
          </div>
        </div>
      </div>
    </section>
</template>