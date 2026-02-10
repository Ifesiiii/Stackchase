<script setup>
import { ref } from 'vue';
import Mcard from './Mcard.vue';
import high from '../../../assets/img/high.png'
import workspace from '../../../assets/img/workspace.png'



const goals = ref([
    {
    id: 1,
    image: high,
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
  <section class="font-heading bg-white px-8 mb-[100px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <h2 class="text-[56px] font-semibold text-center text-[#131313] mb-12 leading-[56px] tracking-[-0.5px]">
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