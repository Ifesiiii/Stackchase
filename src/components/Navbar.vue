<script setup>
import { ref } from 'vue'
import logo from '../assets/img/logo2.png'
import { RouterLink, useRoute } from 'vue-router'

const showCompanyDropdown = ref(false)
const showProductsDropdown = ref(false)
const isMobileMenuOpen = ref(false)
const showMobileCompanyDropdown = ref(false)
const showMobileProductsDropdown = ref(false)


// const isActiveLink = (routePath) => {
//     const route= useRoute()
//     return route.path === routePath
// }



const companyLinks = [
  { name: 'About Us', path: '/company/about' },
  { name: 'Our People', path: '/company/our-people' },
  { name: 'Careers', path: '/company/careers' },
  { name: 'Press Kit', path: '/company/press-kit' }
]

const productLinks = [
  { name: 'Ration', path: '/products/ration' },
  { name: 'Singular API', path: '/products/singular-api' },
  { name: 'Musi.ng', path: '/products/musing' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Close dropdowns when closing menu
  if (!isMobileMenuOpen.value) {
    showMobileCompanyDropdown.value = false
    showMobileProductsDropdown.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  showMobileCompanyDropdown.value = false
  showMobileProductsDropdown.value = false
}
</script>

<template>
    <nav class="flex items-center justify-between py-0 mx-auto relative z-20">
      <!-- Logo -->
      <RouterLink class="flex items-center" to="/" @click="closeMobileMenu">
        <img :src="logo" class="w-full h-full"/>
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-[71px] text-[#E5E5E5] font-medium">
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
                class="block px-6 py-3 text-white hover:text-[#E5E5E5] hover:bg-[#243447] transition text-left"
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
                class="block px-6 py-3 text-white hover:text-[#E5E5E5] hover:bg-[#243447] transition text-left"
              >
                {{ link.name }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink to="/contact" class="hover:text-white transition">
            Contact
        </RouterLink>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-[#E5E5E5] transition-all duration-300',
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-[#E5E5E5] my-1 transition-all duration-300',
            isMobileMenuOpen ? 'opacity-0' : ''
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-[#E5E5E5] transition-all duration-300',
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          ]"
        ></span>
      </button>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
      >
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden fixed top-0 left-0 w-full h-screen bg-[#0C1723] pt-20 px-10  overflow-y-auto z-40"
        >
          <!-- Company Section -->
          <div class="mb-4">
            <button
              @click="showMobileCompanyDropdown = !showMobileCompanyDropdown"
              class="w-full flex justify-between items-center text-[#E5E5E5] font-medium py-4 hover:text-white transition"
            >
              <span>Company</span>
              <svg
                :class="[
                  'w-5 h-5 transition-transform duration-200',
                  showMobileCompanyDropdown ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-show="showMobileCompanyDropdown" class="pl-4 space-y-2">
                <RouterLink
                  v-for="link in companyLinks"
                  :key="link.path"
                  :to="link.path"
                  @click="closeMobileMenu"
                  class="block py-3 text-[#E5E5E5] hover:text-white transition"
                >
                  {{ link.name }}
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- Products Section -->
          <div class="mb-4">
            <button
              @click="showMobileProductsDropdown = !showMobileProductsDropdown"
              class="w-full flex justify-between items-center text-[#E5E5E5] font-medium py-4 hover:text-white transition"
            >
              <span>Products</span>
              <svg
                :class="[
                  'w-5 h-5 transition-transform duration-200',
                  showMobileProductsDropdown ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-show="showMobileProductsDropdown" class="pl-4 space-y-2">
                <RouterLink
                  v-for="link in productLinks"
                  :key="link.path"
                  :to="link.path"
                  @click="closeMobileMenu"
                  class="block py-3 text-[#E5E5E5] hover:text-white transition"
                >
                  {{ link.name }}
                </RouterLink>
              </div>
            </Transition>
          </div>


          <!-- Contact Link -->
          <RouterLink
            to="/contact"
            @click="closeMobileMenu"
            class="block text-[#E5E5E5] font-medium py-4 hover:text-white transition"
          >
            Contact
          </RouterLink>
        </div>
      </Transition>
    </nav>
</template>