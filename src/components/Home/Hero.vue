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
        <p class="text-[#FFB343] text-xl  mb-8">Reimagining standards for building secure, scalable and interoperable software</p>
        <h1 class="max-w-5xl text-2xl  md:text-6xl lg:text-6xl font-medium md:font-semibold lg:font-medium text-white mb-14 leading-tight">
          Stackchase creates platforms engineered for scale, built with care and driven by purpose
        </h1>
        <button class="bg-white text-[#002233] px-10 py-3 rounded font-semibold hover:bg-[#006699]
        hover:text-white transition">
          Our Story
        </button>
      </div>
    </div>
  </div>
</template>