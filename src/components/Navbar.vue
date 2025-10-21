<script setup>
import logo from '../assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router'

// const isActiveLink = (routePath) => {
//     const route= useRoute()
//     return route.path === routePath
// }
</script>

<template>
    <nav class="flex items-center justify-between px-8 py-6 mx-auto">
      <!-- Logo -->
      <RouterLink class="flex items-center gap-2" to="/">
        <img :src="logo" class="w-[27.068px] h-[30.064px]"/>
        <span class="text-white text-l font-semibold">Stackchase</span>
      </RouterLink>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-10 text-[#E5E5E5] font-medium">
        <RouterLink to="/all" class="flex items-center gap-1 hover:text-white cursor-pointer transition">
          <span>All Stackchase</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M12.625 0.781738L7 6.40674L1.375 0.781738" stroke="#E5E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
        <RouterLink to="/about" class=" hover:text-white transition">
            About
        </RouterLink>

        <RouterLink to="/blog" class=" hover:text-white transition">
            Blog
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <!-- <button class="md:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button> -->
    </nav>
</template>