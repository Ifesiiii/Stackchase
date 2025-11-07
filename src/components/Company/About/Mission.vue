<script setup>
import { ref } from 'vue';
import Mcard from './Mcard.vue';
import happy from '../../../assets/img/happy.png'
import workspace from '../../../assets/img/workspace.png'



const goals = ref([
    {
    id: 1,
    image: happy,
    title: 'Mission',
    description: 'Create intuitive, reliable and scalable platforms that give people and organizations control, clarity and efficiency over their digital experiences.'
    },
    {
    id: 2,
    image: workspace,
    title: 'Vision',
    description: 'Beautiful, reliable and trusted platforms powering digital experiences globally.'
    },
])
</script>


<template>
  <section class="bg-white py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-16">
        Our Mission and Vision
      </h2>

    
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Mcard 
      v-for="goal in goals"
        :key="goal.id"
        :image="goal.image"
        :title="goal.title"
        :description="goal.description"
      />
        
      </div>
    </div>
  </section>
</template>