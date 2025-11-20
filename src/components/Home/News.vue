<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Ntile from './Ntile.vue'
import men from '../../assets/img/men.png'
import sky from '../../assets/img/skyscrapers.png'
import women from '../../assets/img/women.png'

const articles = ref([
  {
    id: 1,
    image: men,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 2,
    image: sky,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 3,
    image: women,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  }
])
</script>




<template>
  <section class="bg-gray-50 py-20 px-8">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-4xl md:text-5xl font-semibold text-[#131313]">
          Latest News
        </h2>
        <RouterLink 
          to="/blog" 
          class="border border-gray-400 border-dashed p-2 text-[#131313] hover:text-gray-500 
          hover:bg-gray-200 rounded-sm
          font-medium transition-colors duration-300 flex items-center gap-2 group"
        >
          View all
        </RouterLink>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Ntile
          v-for="article in articles"
          :key="article.id"
          :image="article.image"
          :date="article.date"
          :title="article.title"
          :link="article.link"
        />
      </div>
    </div>
  </section>
</template>



