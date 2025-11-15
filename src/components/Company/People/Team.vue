<script setup>
import Tcard from './Tcard.vue';
import man1 from '../../../assets/img/man1.png'
import woman1 from '../../../assets/img/woman1.png'
import woman2 from '../../../assets/img/woman2.png'
import man3 from '../../../assets/img/man3.png'



const team = [
  {
    id: 1,
    image: man1,
    name: 'Ayoola Hassan',
    title: 'C.E.O'
  },
  {
    id: 2,
    image: woman1,
    name: 'Lisa Teni',
    title: 'Lead Sales'
  },
  {
    id: 3,
    image: woman2,
    name: 'Ayoola Hassan',
    title: 'C.E.O'
  },
  {
    id: 4,
    image: man3,
    name: 'Lisa Teni',
    title: 'Lead Sales'
  }
]
</script>

<template>
    <section class="font-heading max-w-7xl mb-[100px] mx-auto">
    <!-- heading  -->
    <div class="text-center mb-12">
        <h1 class="text-5xl font-semibold text-[#00141F] mb-12 leading-[56px] tracking-[-0.5px]">
          Our Team
        </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Tcard
          v-for="team in team"
          :key="team.id"
          :image="team.image"
          :name="team.name"
          :title="team.title"
        />
      </div>
    </section>
</template>