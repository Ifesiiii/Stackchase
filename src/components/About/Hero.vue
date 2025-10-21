<script setup>
import { ref } from 'vue'
import Navbar from '../Navbar.vue';
import Twork from '../../assets/img/workers(two).png'


</script>

<template>
    <Navbar class="bg-[#13212F]"/>
    <section class="bg-white py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-semibold text-[#00141F] mb-4">
          About us
        </h1>
        <p class="text-[#484848] max-w-2xl mx-auto">
          Stay ahead with our latest articles on collaboration, workflow<br/> management, and API innovation.
        </p>
      </div>

      
      <div class="mb-16 rounded-2xl overflow-hidden">
        <img
          :src="Twork"
          alt="Stackchase Team"
          class="w-full h-auto object-cover"
        />
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left Column -->
        <div>
          <h2 class="text-3xl md:text-4xl font-semibold text-[#00141F] leading-tight">
            We believe the future belongs to teams and technologies that work together
          </h2>
        </div>

        <!-- Right Column -->
        <div class="space-y-6 text-[#00141F] leading-relaxed">
          <p>
            At Stackchase, we know the way you work is changing and we're here to make sure your tools keep up.
          </p>
          
          <p>
            Too many businesses lose time and momentum switching between disconnected platforms, chasing updates, and patching together integrations. That's why we created Stackchase: the home of Ration, our powerful collaboration suite, and Singular API, our streamlined API management platform.
          </p>
          
          <p>
            Our mission is simple: to give you the power to work smarter, not harder. We believe that when your workflows are unified, your teams are empowered, and your systems are connected, there's no limit to what you can achieve.
          </p>
          
          <p>
            We're not just building products we're building the future of connected work. Let's create it together.
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