<script setup>
const values = [
  {
    id: 1,
    number: '1',
    title: 'Unified Workflows',
    description: 'We believe work shouldn\'t feel like a juggling act. With Ration, we bring messaging, project tracking, and file sharing into one seamless hub. With Singular API, we unify complex API ecosystems into a single, manageable platform. No more bouncing between tools — just smooth, connected workflows that keep teams in sync.'
  },
  {
    id: 2,
    number: '2',
    title: 'Empowered Teams',
    description: 'We build technology that bends to the way your team works, not the other way around. Whether it\'s setting up a custom collaboration flow in Ration or managing API connections effortlessly in Singular API, our products put you in control so you can focus on delivering results — not fighting your tools.'
  },
  {
    id: 3,
    number: '3',
    title: 'Seamless Connectivity',
    description: 'Great work happens when people and systems are connected. Our platforms remove the friction between communication, data, and integrations — enabling you to move faster, make smarter decisions, and stay ahead in an increasingly connected world.'
  }
]
</script>



<template>
  <section class="bg-gray-50 py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-16">
        What we stand for
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


