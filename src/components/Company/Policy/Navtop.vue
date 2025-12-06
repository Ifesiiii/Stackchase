<script setup>
import { ref } from 'vue'
import Navbar from '../../Navbar.vue';

const breadcrumbs = ref([
  { label: 'Company' },
  { label: 'Privacy Policy', path: '/policy' }
])
</script>


<template>
<Navbar />
  <nav class="text-white px-1 py-[25px]">
    <div class="flex justify-start align-middle">
        <ol class="flex items-center gap-2">
        <svg 
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z">         </path>
        </svg>

        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="flex items-center gap-2"
      >
        <svg
          v-if="index > 0"
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <a
          :href="breadcrumb.href"
          :class="{
            'text-base text-[#A2A2A2] font-sm cursor-default':
              index === breadcrumbs.length - 1,
            'text-base':
              index !== breadcrumbs.length - 1,
          }"
        >
          {{ breadcrumb.label }}
        </a>
      </li>
    </ol>
    </div>
  </nav>
</template>


