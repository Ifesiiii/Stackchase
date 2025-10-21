<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/img/logo.png'

const companyLinks = ref([
  { text: 'About', url: '/about' },
  { text: 'Services', url: '#' },
  { text: 'Pricing plans', url: '#' },
  { text: 'Deployment plans', url: '#' }
])

const featureLinks = ref([
  { text: 'Mail', url: '#' },
  { text: 'Contact', url: '#' },
  { text: 'Chat', url: '#' },
  { text: 'Calendar', url: '#' }
])

const supportLinks = ref([
  { text: 'FAQ', url: '#' },
  { text: 'Contact Us', url: '#' }
])
</script>




<template>
  <footer class="bg-[#13212F] text-white py-16 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
       
        <div>
          <div class="flex items-center gap-2 mb-6">
            <img
              :src= "logo"
              alt="Stackchase Logo"
              class="w-8 h-8"
            />
            <span class="text-xl font-bold">Stackchase</span>
          </div>

          <!-- Description -->
          <p class="text-[#E5E5E5] leading-relaxed">
            Stackchase Limited is a technology company building secure, high-performance platforms that power modern collaboration, communication, and digital operations.
          </p>
        </div>

        <!-- Company Column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.text">
              <RouterLink
                :to="link.url"
                class="text-[#E5E5E5] hover:text-white transition-colors duration-300"
              >
                {{ link.text }}
            </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Features Column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Features</h3>
          <ul class="space-y-3">
            <li v-for="link in featureLinks" :key="link.text">
              <RouterLink
                :to="link.url"
                class="text-[#E5E5E5] hover:text-white transition-colors duration-300"
              >
                {{ link.text }}
            </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Support Column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Support</h3>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.text">
              <RouterLink
                :to="link.url"
                class="text-[#E5E5E5] hover:text-white transition-colors duration-300"
              >
                {{ link.text }}
            </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


