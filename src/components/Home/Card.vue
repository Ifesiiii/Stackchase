<script setup>
defineProps({
  title: String,
  description: String
})
</script>



<template>
  <div class="bg-[#F1F2F6] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <!-- Icon -->
    <div class="mb-6">
      <slot name="icon">
        <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
      </slot>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-[#131313] mb-20">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-[#131313] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>



