<script setup>
import logo from '../assets/img/logo2.png'
import { RouterLink } from 'vue-router';
</script>


<template>
  <footer class="font-heading mx-auto bg-[#13212F] text-[#E5E5E5] py-[72px] px-6">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Main Footer Content -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-6">
        <!-- Company Info -->
        <div class="lg:w-[45%]">
          <div class="flex items-center gap-2 mb-6">
            <img 
            :src="logo"
            class="w-[140px]" 
            alt="Stackchase"
            />
          </div>
          <p class="text-base md:text-xl leading-[24px] md:leading-[30px] text-[#E5E5E5]">
            Stackchase Limited is a technology company<br class="hidden md:inline"> building secure, high-performance platforms<br class="hidden md:inline"> that power modern collaboration,<br class="hidden md:inline"> communication and digital operations.
          </p>
        </div>

        
        <div class="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-16 lg:gap-24 xl:gap-32">
          <!-- Company Links -->
          <div>
            <h3 class="text-lg md:text-xl leading-6 font-semibold mb-4 md:mb-6">Company</h3>
            <ul class="space-y-2 md:space-y-3">
              <li>
                <RouterLink to="/company/about" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">About</RouterLink>
              </li>
              <li>
                <RouterLink to="/products" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Product</RouterLink>
              </li>
              <li>
                <RouterLink to="/news" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">News</RouterLink>
              </li>
              <li>
                <RouterLink to="/company/careers" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Career</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Industry Links -->
          <div>
            <h3 class="text-lg md:text-xl leading-6 font-semibold mb-4 md:mb-6">Industry</h3>
            <ul class="space-y-2 md:space-y-3">
              <li>
                <RouterLink to="/government" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Government</RouterLink>
              </li>
              <li>
                <RouterLink to="/business" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Business</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Support Links -->
          <div class="col-span-2 md:col-span-1">
            <h3 class="text-lg md:text-xl leading-6 font-semibold mb-4 md:mb-6">Support</h3>
            <ul class="space-y-2 md:space-y-3">
              <li>
                <RouterLink to="/product-support" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Product support</RouterLink>
              </li>
              <li>
                <RouterLink to="/Contact" class="text-base md:text-xl text-[#E5E5E5] hover:text-white transition-colors">Contact Us</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-[#2A3F52] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-sm order-2 md:order-1 w-full md:w-auto">
          <a href="#" class="text-base md:text-xl leading-6 hover:text-white transition-colors self-start md:self-center">Legal notice</a>
          <span class="text-[#E7E7E7] hidden md:inline">|</span>
          <span class="flex text-sm md:text-xl leading-7 items-center gap-2 self-start md:self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#E5E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 14.25C14.5278 14.8796 13.8694 15.3448 13.1181 15.5794C12.3669 15.8141 11.5608 15.8065 10.8141 15.5576C10.0675 15.3087 9.41804 14.8312 8.95784 14.1927C8.49764 13.5542 8.25 12.7871 8.25 12C8.25 11.2129 8.49764 10.4458 8.95784 9.80734C9.41804 9.16884 10.0675 8.69133 10.8141 8.44244C11.5608 8.19355 12.3669 8.1859 13.1181 8.42057C13.8694 8.65525 14.5278 9.12035 15 9.75" stroke="#E5E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Copyright 2025 Stackchase Limited. All right reserved.
          </span>
        </div>

        <!-- Social Icons - Second on mobile, Second on desktop (right side) -->
        <div class="flex items-center gap-4 order-1 md:order-2 self-start md:self-center">
          <!-- Email -->
          <a href="#" class="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 5.25L12 13.5L3 5.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <!-- Facebook -->
          <a href="#" class="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.75 8.24999H14.25C13.9542 8.24875 13.6611 8.3061 13.3875 8.41873C13.114 8.53137 12.8654 8.69705 12.6563 8.90623C12.4471 9.11541 12.2814 9.36394 12.1688 9.63749C12.0561 9.91103 11.9988 10.2042 12 10.5V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 13.5H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <!-- Twitter -->
          <a href="#" class="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" fill="white"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 10.5V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25 10.5V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z" fill="white"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="#" class="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>