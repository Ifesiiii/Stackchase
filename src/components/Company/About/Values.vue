<script setup>
const values = [
  {
    id: 1,
    number: '1',
    title: 'Clarity',
    description: 'We design for understanding. Every interface and experience must be simple, intuitive and purposeful. Users should always see what they need.'
  },
  {
    id: 2,
    number: '2',
    title: 'Reliability',
    description: 'We build for trust. Our platforms are engineered for consistency, performance and resilience — because dependability defines great technology.'
  },
  {
    id: 3,
    number: '3',
    title: 'Control',
    description: 'We empower people and organizations to own their technology. Sovereignty and autonomy are core to how we build and deploy our systems.'
  },
  {
    id: 4,
    number: '4',
    title: 'Efficiency',
    description: 'We remove friction. Every feature, workflow and design choice is crafted to save time, reduce complexity and enhance productivity.'
  },
  {
    id: 5,
    number: '5',
    title: 'Excellence',
    description: 'We pursue perfection in craft. From architecture to aesthetics, we hold ourselves to the highest standards in design, security and usability.'
  },
  {
    id: 6,
    number: '6',
    title: 'Integrity',
    description: 'We build with transparency and respect — for users, data, and the ecosystems we serve.'
  }
]
</script>



<template>
  <section class="font-heading bg-[#F8FBFC] px-8 py-[100px] mb-[100px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-12">
        Stackchase Core Values
      </h2>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.id"
          class="bg-white p-8 rounded-2xl shadow-[rgba(10, 57, 176, 0.12)] border-3 border-[rgba(10, 57, 176, 0.12)] shadow-md"
        >
          <!-- Number -->
          <div class="bg-[#F5F9FB] text-[28px] font-semibold text-[#000000] mb-6 leading-7 w-10 h-10 flex items-center justify-center rounded-full">
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


