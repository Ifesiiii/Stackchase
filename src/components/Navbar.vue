<script setup>
import { ref } from 'vue'
import logo from '../assets/img/logo2.png'
import { RouterLink, useRoute } from 'vue-router'


// const isActiveLink = (routePath) => {
//     const route= useRoute()
//     return route.path === routePath
// }

const showCompanyDropdown = ref(false)
const showProductsDropdown = ref(false)

const companyLinks = [
  { name: 'About Us', path: '/company/about' },
  { name: 'Leadership', path: '/company/leadership' },
  { name: 'Careers', path: '/company/careers' },
  { name: 'Press Kit', path: '/company/press-kit' }
]

const productLinks = [
  { name: 'Ration', path: '/products/ration' },
  { name: 'Singular API', path: '/products/singular-api' },
  { name: 'Musi.ng', path: '/products/musing' }
]
</script>

<template>
    <nav class="flex items-center justify-between px-8 py-6 mx-auto relative z-20">
      <!-- Logo -->
      <RouterLink class="flex items-center gap-2" to="/">
        <img :src="logo" class="w-full h-full"/>
      </RouterLink>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-10 text-[#E5E5E5] font-medium">
        <!-- Company Dropdown -->
        <div 
          class="relative"
          @mouseenter="showCompanyDropdown = true"
          @mouseleave="showCompanyDropdown = false"
        >
          <RouterLink 
            class="hover:text-white transition cursor-pointer block"
          >
            Company
          </RouterLink>
          
          <!-- Company Dropdown Menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div 
              v-show="showCompanyDropdown"
              class="absolute left-1/2 -translate-x-1/2 top-full w-48 bg-[#0C1723] rounded-lg shadow-xl py-2 z-50"
            >
              <RouterLink
                v-for="link in companyLinks"
                :key="link.path"
                :to="link.path"
                class="block px-6 py-3
                text-white hover:text-[#E5E5E5]  hover:bg-[#243447] transition text-left"
              >
                {{ link.name }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <!-- Products Dropdown -->
        <div 
          class="relative"
          @mouseenter="showProductsDropdown = true"
          @mouseleave="showProductsDropdown = false"
        >
          <RouterLink 
            class="hover:text-white transition cursor-pointer"
          >
            Products
          </RouterLink>
          
          <!-- Products Dropdown Menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div 
              v-show="showProductsDropdown"
              class="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0C1723] rounded-lg shadow-xl py-2 z-50"
            >
              <RouterLink
                v-for="link in productLinks"
                :key="link.path"
                :to="link.path"
                class="block px-6 py-3 text-white  hover:text-[#E5E5E5] hover:bg-[#243447] transition text-left"
              >
                {{ link.name }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink to="/News" class="hover:text-white transition">
            News
        </RouterLink>
        <RouterLink to="/Contact" class="hover:text-white transition">
            Contact
        </RouterLink>
      </div>
    </nav>
</template>