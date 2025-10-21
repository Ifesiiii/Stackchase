<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
})
</script>




<template>
  <article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <!-- Image -->
    <div class="aspect-square overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Date -->
      <p class="font-light text-[#616161] mb-3">
        {{ date }}
      </p>

      <!-- Title -->
      <h3 class="text-xl font-medium text-[#131313] mb-4 leading-snug">
        {{ title }}
      </h3>


      <a
        :href="link"
        class="inline-flex items-center gap-2 text-[#006699] font-semibold hover:gap-4 transition-all duration-300 group"
      >
        Read more
        <svg 
          class="w-5 h-5 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </article>
</template>



