<script setup>
const values = [
  {
    id: 1,
    number: '1',
    title: 'Engineering Culture',
    description: 'We’re product builders at heart. Precision, depth, and collaboration drive how we approach technology — from infrastructure to user experience.'
  },
  {
    id: 2,
    number: '2',
    title: 'Room to grow',
    description: 'We encourage ownership and experimentation. You’ll learn fast, lead projects, and grow through meaningful challenges.'
  },
  {
    id: 3,
    number: '3',
    title: 'Control',
    description: 'Every solution you build shapes how businesses communicate, collaborate, and thrive. Real impact from day one.'
  },
]
</script>



<template>
  <section class="font-heading px-8 mb-[100px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-12">
        Why Work At Stackchase
      </h2>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.id"
          class="bg-white p-6 rounded-2xl shadow-[rgba(10, 57, 176, 0.12)] border-3 border-[rgba(10, 57, 176, 0.12)] shadow-md"
        >
          <!-- Number -->
          <div class="text-[28px] font-semibold text-[#000000] mb-6 leading-7 bg-[#F5F9FB] w-12 h-12 flex items-center justify-center rounded-full">
            {{ value.number }}
          </div>

          <!-- Title -->
          <h3 class="text-[28px] font-semibold text-[#131313] mb-4 leading-8">
            {{ value.title }}
          </h3>

          <!-- Description -->
          <p class="text-xl text-[#131313] leading-7">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


