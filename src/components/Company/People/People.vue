<script setup>
import people from '../../../assets/img/people.png'
</script>


<template>
    <section class="font-heading px-8 mb-[100px]">
      <div class="max-w-7xl mx-auto">
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column -->
          <div>
            <h2 class="text-5xl font-semibold text-[#00141F] leading-[56px] tracking-[-0.5px]">
              Built by People Who<br> Care About Progress 
            </h2>
          </div>

          <!-- Right Column -->
          <div class="text-2xl space-y-6 text-[#00141F] leading-[30px]">
            <p>
              Every engineer, designer, and strategist at Stackchase shares one thing in common: a relentless drive to create technologies that make businesses better, faster, and more connected.
            </p>
            
            <img
            :src="people"
            class="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
</template>