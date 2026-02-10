<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})
</script>



<template>
  <div class="rounded-md overflow-hidden shadow-sm hover:border hover:border-[#CCE0EB] hover:shadow-lg hover:shaadow-[#CCE0EB]">
    <!-- Image Container -->
    <div class="flex items-center justify-center">
      <img
        :src="image"
        :alt="title"
        class="w-[417px] h-[389px] object-cover"
      />
    </div>

    <!-- Content -->
    <div class="py-6 px-3">
      <h3 class="text-[32px] font-medium text-[#020202] mb-3 leading-8">
        {{ title }}
      </h3>
      <p class="text-[#484848] text-xl font-normal leading-6">
        {{ description }}
      </p>
    </div>
  </div>
</template>



