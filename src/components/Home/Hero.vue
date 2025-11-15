<script setup>
import Navbar from '../Navbar.vue'
import background from '../../assets/img/Background.png'
</script>

<template>
  <div class="font-heading relative min-h-screen overflow-hidden h-[816px]">
    
    <div class="bg-no-repeat absolute inset-0"
      :style="{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    ></div>
    

    <div class="mx-[80px] mt-[48px] mb-[165px]">
    <Navbar />
    
    
    <div class="relative container flex items-center min-h-screen">
      <div class="">
        <p class="text-[#FFB343] text-[24px] mb-8 leading-[28px] tracking-[0.2px]">Reimagining standards for building secure, scalable and interoperable software</p>
        <h1 class="max-w-4xl text-[40px] md:text-[40px] lg:text-[60px] font-medium md:font-semibold lg:font-semibold text-white mb-[72px] lg:leading-[72px] tracking-[-2.56px]">
          Stackchase creates platforms engineered for scale, built with care and driven by purpose
        </h1>
        <button class="bg-white text-[#002233] px-10 py-3 rounded font-semibold hover:bg-[#006699]
        hover:text-white transition">
          Our Story
        </button>
      </div>
    </div>
    </div>
  </div>
</template>