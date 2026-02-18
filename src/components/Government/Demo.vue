<script setup>
import Gb from '../../assets/img/Gb.png'
</script>


<template>
  <section class="font-heading relative bg-gray-100 py-20 px-6 overflow-hidden max-w-screen-[1366px] pb-[100px]">
    <div class="bg-no-repeat absolute inset-0"
      :style="{
        backgroundImage: `url(${Gb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
  </div>

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-start">
        <!-- Left Column - Heading -->
        <div>
          <h2 class="text-4xl lg:text-5xl font-semibold text-[#00141F] leading-[56px] tracking-[-0.48px]">
            Book a demo
          </h2>
        </div>

        <!-- Right Column - Description and CTA -->
        <div class="flex flex-col items-start">
          <p class="text-4xl lg:text-5xl text-[#00141F] leading-[56px] tracking-[-0.48px] mb-12">
            Let's Power the Next Chapter of Digital Governance
          </p>
          <button class="bg-[#069] hover:bg-[#094A6B] text-white text-lg leading-[22px] px-8 py-4 rounded-md transition-colors duration-300 ">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
</template>



