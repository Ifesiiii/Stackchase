<script setup>

</script>


<template>
  <section class="font-heading relative bg-gray-100 py-20 px-6 overflow-hidden max-w-screen-[1366px] pb-[100px]">
    <!-- Decorative Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <!-- Top Left Pattern -->
      <div class="absolute top-0 left-0 w-64 h-64">
        <svg viewBox="0 0 200 200" class="w-full h-full">
          <defs>
            <pattern id="diagonalLines1" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#13212F" stroke-width="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#diagonalLines1)"/>
        </svg>
      </div>

      <!-- Top Right Pattern -->
      <div class="absolute top-0 right-0 w-96 h-96 transform translate-x-32 -translate-y-16">
        <svg viewBox="0 0 300 300" class="w-full h-full">
          <defs>
            <pattern id="diagonalLines2" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#13212F" stroke-width="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="300" height="300" fill="url(#diagonalLines2)"/>
        </svg>
      </div>

      <!-- Bottom Center Pattern -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80">
        <svg viewBox="0 0 250 250" class="w-full h-full">
          <defs>
            <pattern id="diagonalLines3" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#13212F" stroke-width="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="250" height="250" fill="url(#diagonalLines3)"/>
        </svg>
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Heading -->
        <div>
          <h2 class="text-4xl lg:text-5xl font-semibold text-[#00141F] leading-[56px] tracking-[-0.48px]">
            Book a demo
          </h2>
        </div>

        <!-- Right Column - Description and CTA -->
        <div class="flex flex-col items-start">
          <p class="text-4xl lg:text-5xl text-[#00141F] leading-[56px] tracking-[-0.48px] mb-12">
            Let's Power the Next Chapter of Digital Governance
          </p>
          <button class="bg-[#069] hover:bg-[#094A6B] text-white text-lg leading-[22px] px-8 py-4 rounded-md transition-colors duration-300 ">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
</template>



