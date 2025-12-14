<script setup>
import Navbar from '../Navbar.vue'
import background from '../../assets/img/Background.png'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="font-heading relative min-h-screen overflow-hidden h-auto lg:h-[816px] max-w-screen-[1366px]">
    
    <div class="bg-no-repeat absolute inset-0"
      :style="{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    ></div>
    

    <div class="relative z-10 mx-4 sm:mx-8 xl:mx-[80px] mt-[48px] pb-12 lg:pb-0">
    <Navbar />
    
    
    <div class="relative container flex items-center min-h-[70vh] lg:min-h-screen">
      <div class="">
        <p class="text-[#FFB343] text-lg sm:text-[24px] mb-6 sm:mb-8 leading-[24px] sm:leading-[28px] tracking-[0.2px]">Reimagining standards for building secure, scalable and interoperable software</p>
        <h1 class="max-w-4xl text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] font-medium md:font-semibold lg:font-semibold text-white mb-8 sm:mb-12 lg:mb-[72px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[72px] tracking-[-1.5px] sm:tracking-[-2.56px]">
          Stackchase creates platforms engineered for scale, built with care and driven by purpose
        </h1>
        <RouterLink to="/company/about">
          <button class="bg-white text-[#002233] px-8 sm:px-10 py-2.5 sm:py-3 rounded font-semibold text-base sm:text-lg hover:bg-[#006699] hover:text-white transition">
          Our Story
          </button>
        </RouterLink>
      </div>
    </div>
    </div>
  </div>
</template>