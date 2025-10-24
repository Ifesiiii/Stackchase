<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>


<template>
  <div class="bg-white p-6 border-l border-[#BEBEBE] border-dashed hover:shadow-md transition-shadow duration-300">
    <h3 class="text-xl font-semibold text-[#131313] mb-3">
      {{ title }}
    </h3>
    <p class="text-[#131313] text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>



