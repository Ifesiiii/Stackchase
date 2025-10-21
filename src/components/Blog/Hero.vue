<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import Navbar from '../Navbar.vue';
import seminar from '../../assets/img/seminar.png'

const featuredArticle = ref({
  image: seminar,
  title: 'The Hidden Costs of Tool Switching (And How Ration Fixes It)',
  description: 'Ration is a messaging and collaboration platform that offers intuitive  is a messaging and collaboration platform that offers intuitive',
  route: '/blog/featured',
  date: 'July 12, 2025'
})
</script>

<template>
  <Navbar class="bg-[#13212F]" />
  <div>
    <!-- Header -->
    <section class="py-12 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-semibold text-[#00141F] mb-4">
            Blog
          </h1>
          <p class="text-[#484848] max-w-2xl mx-auto">
            Stay ahead with our latest articles on collaboration, workflow<br/> management, and API innovation.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Article Section -->
    <section class="pb-20 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="bg-gray-100 rounded-3xl p-8 md:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="rounded-2xl overflow-hidden">
              <img
                :src="featuredArticle.image"
                :alt="featuredArticle.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div>
              <!-- Badge -->
              <span class="inline-block text-sm text-[#616161] mb-4">
                Featured
              </span>

              <!-- Title -->
              <h2 class="text-3xl md:text-4xl font-medium text-[#131313] mb-6 leading-tight">
                {{ featuredArticle.title }}
              </h2>

              <!-- Description -->
              <p class="text-[#131313] leading-relaxed mb-6">
                {{ featuredArticle.description }}
              </p>

              <!-- Read More Link -->
              <RouterLink
                :to="featuredArticle.route"
                class="inline-flex items-center gap-2 text-[#006699] font-semibold hover:gap-4 transition-all duration-300 group mb-8"
              >
                Read more
                <svg 
                  class="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RouterLink>

              <!-- Date -->
              <p class="text-sm text-[#616161]">
                {{ featuredArticle.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>