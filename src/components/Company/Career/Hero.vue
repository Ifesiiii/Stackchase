<script setup>
import { ref } from 'vue'
import Navtop from './Navtop.vue'
import steps from '../../../assets/img/steps.png'
</script>

<template>
    <section class="font-heading relative overflow-hidden mx-auto mb-[100px] max-w-screen-[1366px]">
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
        <div class="pb-32 pt-16 md:pt-24 lg:pt-32">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-2xl mb-6 leading-7 tracking-[0.2px]">Career</p>
            <h1 class="text-6xl mb-12 font-semibold text-white leading-[72px] tracking-[-2.56px]">
              Shape the Future of<br> Reliable, Scalable<br>Platforms
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