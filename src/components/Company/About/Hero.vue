<script setup>
import { ref } from 'vue'
import Navtop from './Navtop.vue'
import cosmos from '../../../assets/img/cosmos.png'
</script>

<template>
    <section class="relative min-h-screen overflow-hidden">
      <!-- Background Image Overlay -->
      <div class="absolute inset-0">
        <img 
          :src="cosmos" 
          alt="" 
          class="w-full h-full object-cover" 
        />
      </div>
    
      
      <!-- Content -->
      <div class="relative z-10">
        <Navtop />
        
        <!-- Hero Content -->
        <div class="px-8 pb-32 pt-16 md:pt-24 lg:pt-32">
          <div class="max-w-7xl">
            <p class="text-[#FFB343] text-sm md:text-base mb-6">About Us</p>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl">
              Building Africa's<br>
              Technology Backbone<br>
              One Stack at a Time.
            </h1>
          </div>
        </div>
      </div>
    </section>
</template>