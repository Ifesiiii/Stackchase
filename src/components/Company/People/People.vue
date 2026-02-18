<script setup>
import people from '../../../assets/img/people.png'
</script>


<template>
    <section class="font-heading px-8 my-[100px]">
      <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column -->
          <div>
            <h2 class="text-5xl font-semibold text-[#00141F] leading-[56px] tracking-[-0.5px]">
              Building Better <br> Systems Starts with <br>Us
            </h2>
          </div>

          <!-- Right Column -->
          <div class="text-xl space-y-6 text-[#00141F] leading-[30px]">
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