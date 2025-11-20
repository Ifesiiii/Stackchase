<script setup>
import Navtop from './Navtop.vue'
import cosmos from '../../../assets/img/cosmos.png'
</script>

<template>
    <section class="font-heading relative min-h-screen overflow-hidden mx-auto mb-[100px] max-w-screen-[1366px]">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="cosmos" 
          alt="" 
          class="w-full h-[1113px] object-cover" 
        />
      </div>
    
  
      <!-- Content -->
      <div class="relative z-10 mx-[80px] mt-[48px] mb-[165px]">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="pb-32 pt-16 md:pt-24 lg:pt-32">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-2xl mb-6 leading-7 tracking-[0.2px]">About Us</p>
            <h1 class="text-6xl font-semibold text-white leading-[72px] tracking-[-2.56px]">
              Building Africa's<br>
              Technology Backbone<br>
              One Stack at a Time.
            </h1>
          </div>
        </div>
      </div>
    </section>
</template>