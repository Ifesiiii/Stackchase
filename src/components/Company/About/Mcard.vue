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
          <div class="aspect-auto overflow-hidden">
            <img
              :src="image"
              alt="title"
              class="w-[628px] h-[499px] object-cover"
            />
          </div>

          <!-- Content -->
          <div class="p-8 text-[#131313]">
            <h3 class="text-[28px] font-semibold mb-5 leading-8 tracking-[-0.14px]">
              {{ title }}
            </h3>
            <p class="text-xl leading-7">
              {{ description }}
            </p>
          </div>
        </div>
</template>