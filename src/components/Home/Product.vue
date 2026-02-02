<script setup>
import { useProductAnimations } from '../../composables/useSmoothScroll'
import Tile from './Tile.vue'
import ration from '../../assets/img/ration.png'
import hawk from '../../assets/img/Redhawk.png'
import musi from '../../assets/img/musi.png'


useProductAnimations()

const products = [
  {
    id: 1,
    image: ration,
    title: 'Ration',
    description: 'A messaging, meeting and collaboration platform that offers intuitive, flexible and extensible set of features for all businesses.'
  },
  {
    id: 2,
    image: hawk,
    title: 'Red Hawk',
    description: 'A next-generation flow engine and API Gateway runtime, built with a modern, high-performance, cloud-native execution model'
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
  <section class="font-heading px-8 bg-[#F8FBFC] py-[50px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-[62px] leading-[56px] tracking-[-0.5px]">
        Our Products
      </h2>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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