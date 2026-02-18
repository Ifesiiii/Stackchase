<script setup>
import ogun from '../../assets/img/ogun.png'
import army from '../../assets/img/army.png'
</script>


<template>
  <section class="px-6 max-w-screen-[1366px] mb-[100px] font-heading">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Heading -->
        <div>
          <h2 class="text-4xl lg:text-5xl font-semibold leading-[56px] tracking-[-0.48px] text-[#00141F]">
            Real-World<br> Adoption
          </h2>
        </div>

        <!-- Right Column - Description and Logos -->
        <div>
          <p class="text-xl leading-[30px] text-[#00141F] mb-6">
            Our platforms are already powering digital transformation initiatives in leading public institutions, including the Ogun State Government and Nigerian Army — helping them communicate securely, share data efficiently, and operate with digital confidence.
          </p>

          <!-- Logos -->
          <div class="flex items-center gap-6">
            <!-- Ogun State Logo -->
            <div class="w-16 h-16 flex-shrink-0">
              <img 
                :src="ogun" 
                alt="Ogun state logo" 
                class="w-full h-full object-contain"
              />
            </div>
              
            <!-- Nigerian Army Logo -->
            <div class="w-14 h-14 flex-shrink-0">
              <img 
                :src="army" 
                alt="Nigerian Army" 
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


