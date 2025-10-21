<script setup>
import { ref } from 'vue'
// import ball from '../../assets/img/ball.png'


const email = ref('')

const handleSubscribe = () => {
  console.log('Subscribing email:', email.value)
  // Will add logic and API later
  email.value = ''
}
</script>



<template>
  <section class="bg-gray-200 py-20 px-8 relative overflow-hidden">
    <!-- Circle which I'm not sure is a png or svg -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-50 blur-3xl">
      <!-- <img
      :src="ball" /> -->
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="max-w-4xl">
        <!-- Heading -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium text-[#131313] mb-6 leading-tight">
          Don't miss out on Stackchase<br> latest updates
        </h2>

        <!-- Description -->
        <p class="text-lg text-[#484848] mb-8">
          Sign up for exclusive insights, tips, and the latest updates from<br> stackchase
        </p>

        <!-- Email Form -->
        <form @submit.prevent="handleSubscribe" class="flex gap-0 max-w-xl">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="flex-1 px-6 py-4 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-900 text-[#696969]"
          />
          <button
            type="submit"
            class="bg-[#002233] text-white
             px-8 py-2 rounded-r-lg font-semibold hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  </section>
</template>



