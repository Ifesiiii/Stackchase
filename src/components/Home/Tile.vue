<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})
</script>



<template>
  <div class="bg-[#EFEFEF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <!-- Image Container -->
    <div class="aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-500">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-2xl font-medium text-[#020202] mb-3">
        {{ title }}
      </h3>
      <p class="text-[#484848] font-normal leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>



