<script setup>
import { ref } from 'vue';
import Mcard from './Mcard.vue';
import happy from '../../assets/img/happy.png'
import workspace from '../../assets/img/workspace.png'



const goals = ref([
    {
    id: 1,
    image: happy,
    title: 'Mission',
    description: 'To simplify how teams and systems work together by creating secure, high-performance software that empowers people to collaborate seamlessly, communicate effectively, and achieve more with less friction.'
    },
    {
    id: 2,
    image: workspace,
    title: 'Vision',
    description: 'To become the global standard for connected work — where communication, collaboration, and innovation flow naturally, and technology empowers people to focus on what matters most.'
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