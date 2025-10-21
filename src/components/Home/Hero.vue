<script setup>
import Navbar from '../Navbar.vue'
import background from '../../assets/img/Background.png'

console.log('Background path:', background)
</script>

<template>
  <div class="relative min-h-screen">
    
    <div class="bg-no-repeat absolute inset-0 z-0 "
      :style="{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    ></div>
    
    <Navbar class="relative z-10" />
    
    
    <div class="relative z-10 container pl-8 flex items-center min-h-screen">
      <div class="">
        <p class="text-[#E5E5E5] text-medium mb-8">Stackchase is the powerhouse behind Ration</p>
        <h1 class="text-2xl md:text-6xl lg:text-6xl font-medium md:font-semibold lg:font-medium text-white mb-14 leading-tight">
          Stackchase Builds Software <br>That Drives Your Business<br> Operations
        </h1>
        <button class="bg-white text-[#006699] px-10 py-3 rounded font-semibold hover:bg-[#006699]
        hover:text-white transition">
          Button CTA
        </button>
      </div>
    </div>
  </div>
</template>