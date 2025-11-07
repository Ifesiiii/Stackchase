<script setup>
defineProps({
  image: String,
  name: String,
  title: String
})
</script>

<template>
  <div class="bg-[#F7F7F7] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <!-- Image Container -->
    <div class="aspect-auto flex items-center justify-center hover:scale-105 transition-transform duration-500">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="text-2xl font-semibold text-[#131313]">
        {{ name }}
      </h3>
      <p class="text-[#616161] font-normal leading-relaxed">
        {{ title }}
      </p>
    </div>
  </div>
</template>
