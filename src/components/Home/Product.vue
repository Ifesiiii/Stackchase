<script setup>
import { useProductAnimations } from '../../composables/useSmoothScroll'
import Tile from './Tile.vue'
import chat from '../../assets/img/chat3.png'
import mcube from '../../assets/img/mcube.png'
import musi from '../../assets/img/musi.png'


useProductAnimations()

const products = [
  {
    id: 1,
    image: chat,
    title: 'Ration',
    description: 'A messaging, meeting and collaboration platform that offers intuitive, flexible and extensible set of features for all businesses.'
  },
  {
    id: 2,
    image: mcube,
    title: 'Singular API',
    description: 'Our unified API management platform that connects multiple data sources into one secure, scalable interface.'
  },
  {
    id: 3,
    image: musi,
    title: 'Musi.ng',
    description: 'A dynamic UGC platform that blends the best of social expression – posts, visuals, and short videos – all in one place.'
  }
]
</script>

<template>
  <section class="py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-16 leading-[56px] tracking-[-0.5px]">
        Our Products
      </h2>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="product-card"
        >
          <Tile
            :image="product.image"
            :title="product.title"
            :description="product.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>