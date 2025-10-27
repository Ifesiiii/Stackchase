<script setup>
const values = [
  {
    id: 1,
    number: '1',
    title: 'Unified Workflows',
    description: 'We believe work should flow, not fight back. With our technologies, we bring messaging, meetings, and communication into one connected ecosystem. Whether through Ration or Ration Pulse, Stackchase unites tools, teams, and systems into a single rhythm so businesses can focus on progress, not platform-switching.'
  },
  {
    id: 2,
    number: '2',
    title: 'Empowered Teams',
    description: 'We build technology that adapts to people, not the other way around. Every product we design gives teams the flexibility to work their own way — from tailored collaboration flows in Ration to streamlined communication management in Ration Pulse. When teams are empowered, innovation becomes effortless.'
  },
  {
    id: 3,
    number: '3',
    title: 'Seamless Connectivity',
    description: 'We believe great work happens when everything and everyone connects. Our platforms remove the friction between communication, data, and systems, enabling teams to move faster, think clearer, and make smarter decisions in a world that never slows down.'
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


