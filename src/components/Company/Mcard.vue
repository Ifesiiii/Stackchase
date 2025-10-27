<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})
</script>

<template>
    <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <!-- Image -->
          <div class="aspect-video overflow-hidden">
            <img
              :src="image"
              alt="title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Content -->
          <div class="p-8 text-[#131313]">
            <h3 class="text-3xl font-semibold mb-4">
              {{ title }}
            </h3>
            <p class="leading-relaxed">
              {{ description }}
            </p>
          </div>
        </div>
</template>