<script setup>
import Tile from './Tile.vue'
import chat from '../../assets/img/chat.png'
import mcube from '../../assets/img/mcube.png'
import cube from '../../assets/img/cube.png'


const products = [
  {
    id: 1,
    image: chat,
    title: 'Ration',
    description: 'Ration is a messaging and collaboration platform that offers intuitive'
  },
  {
    id: 2,
    image: mcube,
    title: 'Singular API',
    description: 'Ration is a messaging and collaboration platform that offers intuitive'
  },
  {
    id: 3,
    image: cube,
    title: 'Ration',
    description: 'Ration is a messaging and collaboration platform that offers intuitive'
  }
]
</script>


<template>
  <section class="py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-16">
        Our Products
      </h2>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Tile
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>



