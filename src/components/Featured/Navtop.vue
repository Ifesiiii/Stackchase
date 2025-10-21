<script setup>
import { ref } from 'vue'
import Navbar from '../Navbar.vue';

const breadcrumbs = ref([
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'The Hidden Costs of Tool Switching (And How Ration Fixes It)'
  },
])
</script>


<template>
<Navbar class="bg-[#13212F]" />
  <nav class="bg-[#EEF4F8] border-b border-[#EEF4F8] px-6 py-3">
    <div class="flex justify-center">
        <ol class="flex items-center gap-2">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="flex items-center gap-2"
      >
        <svg
          v-if="index > 0"
          class="w-4 h-4 text-[#131313]"
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
            'text-sm text-[#616161] font-sm cursor-default':
              index === breadcrumbs.length - 1,
            'text-sm text-[#131313] hover:text-blue-700 hover:underline':
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


