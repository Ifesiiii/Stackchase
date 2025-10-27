<script setup>
import { ref } from 'vue'
import world from '../../assets/img/world.png'


</script>
<template>
    <section class="bg-white py-20 px-8">
    <div class="max-w-7xl mx-auto">
   <!-- Header -->
    <div class="relative bg-[#1e3a5f] py-24 px-8 overflow-hidden mb-8 md:mb-12">
    <!-- Background Image Overlay -->
    <div class="absolute inset-0 opacity-20">
      <img 
      :src="world" 
      alt="" 
      class="w-full h-full object-cover" />
    </div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto">
      <p class="text-[#DDC9B4] md:text-base mb-4">About Us</p>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl">
        Building Africa's<br>
        Technology Backbone<br>
        One Stack at a Time.
      </h1>
    </div>
  </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left Column -->
        <div>
          <h2 class="text-3xl md:text-4xl font-semibold text-[#00141F] leading-tight">
            We believe<br> that Africa can build its<br> own technology stack 
          </h2>
        </div>

        <!-- Right Column -->
        <div class="font-sm space-y-6 text-[#00141F] leading-relaxed">
          <p>
            Our Story.
          </p>
          
          <p>
            Stackchase was founded on a simple belief — that Africa can build its own technology stack, from messaging to mission-critical systems.
          </p>
          
          <p>
            Born out of deep engineering experience, Stackchase designs and builds platforms that power communication, collaboration, and business resilience at scale. Our flagship product, Ration, reimagines email, chat, and conferencing for organizations that demand reliability, compliance, and control — all hosted on our own bare-metal infrastructure.
          </p>
          
          <p>
            We are reimagining what platforms can be — developing our own standards for performance, security, and interoperability. By combining deep systems engineering with original thinking, Stackchase is setting a new benchmark for how technology is designed, delivered, and experienced across regions that have long depended on external platforms.
          </p>

          <p>
            From Nigeria to the world, Stackchase is creating technologies built with care, engineered for scale, and driven by purpose.
          </p>
          
          <div class="pt-4">
            <p class="font-semibold text-[#00141F]">Regards,</p>
            <p class="text-[#00141F]">Stackchase Team</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>