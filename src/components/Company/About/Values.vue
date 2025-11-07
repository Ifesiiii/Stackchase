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
  <section class="bg-gray-50 py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-16">
        Stackchase Core Values
      </h2>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.id"
          class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Number -->
          <div class="text-3xl font-semibold text-[#000000] mb-6">
            {{ value.number }}
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-semibold text-[#131313] mb-4">
            {{ value.title }}
          </h3>

          <!-- Description -->
          <p class="text-[#131313] leading-relaxed">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


