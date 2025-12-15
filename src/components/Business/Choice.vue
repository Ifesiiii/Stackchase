<script setup>
import { ref } from 'vue';
import Africa from '../../assets/img/Africa.png'

const openItem = ref('dataSovereignty');

const toggleAccordion = (item) => {
  openItem.value = openItem.value === item ? null : item;
};
</script>



<template>
  <section class="bg-[#F8FBFC] px-6 max-w-screen-[1366px] pt-[50px] pb-[50px] font-heading">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Image -->
        <div class="w-full">
          <img 
            :src="Africa" 
            alt="Business handshake" 
            class="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <!-- Right Column - Content -->
        <div class="w-full">
          <h2 class="text-4xl lg:text-5xl font-semibold mb-3 text-[#131313] leading-[56px] tracking-[-0.5px]">
            Why Businesses Choose Stackchase
          </h2>

          <!-- Accordion Items -->
          <div class="">
            <!-- Data Sovereignty -->
            <div class="bg-white rounded-lg overflow-hidden">
              <button 
                @click="toggleAccordion('dataSovereignty')"
                class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div class="flex-1">
                  <h3 class="text-xl lg:text-[28px] font-semibold text-[#131313] mb-2 leading-[56px] tracking-[-0.14px]">
                    Reliability You Can Build On
                  </h3>
                  <p 
                    v-show="openItem === 'dataSovereignty'" 
                    class="text-lg text-[#424242] leading-7 mt-2"
                  >
                    High-performance infrastructure and uptime for mission-critical operations
                  </p>
                </div>
                <svg 
                  :class="{ 'rotate-180': openItem === 'dataSovereignty' }" 
                  class="w-6 h-6 text-[#13212F] transition-transform duration-300 flex-shrink-0 ml-4"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Security & Compliance -->
            <div class="bg-white rounded-lg overflow-hidden">
              <button 
                @click="toggleAccordion('security')"
                class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div class="flex-1">
                  <h3 class="text-xl lg:text-[28px] font-semibold text-[#131313] mb-2 leading-[56px] tracking-[-0.14px]">
                    Security & Control
                  </h3>
                  <p 
                    v-show="openItem === 'security'" 
                    class="text-lg text-[#424242] leading-7 mt-2"
                  >
                    Enterprise-grade encryption, multi-factor authentication, and customizable access policies.
                  </p>
                </div>
                <svg 
                  :class="{ 'rotate-180': openItem === 'security' }" 
                  class="w-6 h-6 text-[#13212F] transition-transform duration-300 flex-shrink-0 ml-4"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Scalability & Reliability -->
            <div class="bg-white rounded-lg overflow-hidden">
              <button 
                @click="toggleAccordion('scalability')"
                class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div class="flex-1">
                  <h3 class="text-xl lg:text-[28px] font-semibold text-[#131313] mb-2 leading-[56px] tracking-[-0.14px]">
                    Scalable by Design
                  </h3>
                  <p 
                    v-show="openItem === 'scalability'" 
                    class="text-lg text-[#424242] leading-7 mt-2"
                  >
                    Built on robust architecture that grows with national and agency-level workloads.
                  </p>
                </div>
                <svg 
                  :class="{ 'rotate-180': openItem === 'scalability' }" 
                  class="w-6 h-6 text-[#13212F] transition-transform duration-300 flex-shrink-0 ml-4"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Operational Efficiency -->
            <div class="bg-white rounded-lg overflow-hidden">
              <button 
                @click="toggleAccordion('efficiency')"
                class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div class="flex-1">
                  <h3 class="text-xl lg:text-[28px] font-semibold text-[#131313] mb-2 leading-[56px] tracking-[-0.14px]">
                    Ease of Integration
                  </h3>
                  <p 
                    v-show="openItem === 'efficiency'" 
                    class="text-lg text-[#424242] leading-7 mt-2"
                  >
                    Reduces administrative bottlenecks through integrated communication and collaboration tools.
                  </p>
                </div>
                <svg 
                  :class="{ 'rotate-180': openItem === 'efficiency' }" 
                  class="w-6 h-6 text-[#13212F] transition-transform duration-300 flex-shrink-0 ml-4"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



