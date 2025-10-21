<script setup>
import Tcard from './Tcard.vue';
import man1 from '../../assets/img/man1.png'
import woman1 from '../../assets/img/woman1.png'
import man2 from '../../assets/img/man2.png'
import woman2 from '../../assets/img/woman2.png'
import man3 from '../../assets/img/man3.png'
import man4 from '../../assets/img/man4.png'


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
    image: man2,
    name: 'Ben Eze',
    title: 'Lead Programs'
  },
  {
    id: 4,
    image: woman2,
    name: 'Ayoola Hassan',
    title: 'C.E.O'
  },
  {
    id: 5,
    image: man3,
    name: 'Lisa Teni',
    title: 'Lead Sales'
  },
  {
    id: 6,
    image: man4,
    name: 'Ben Eze',
    title: 'Lead Programs'
  }
]
</script>

<template>
    <section class="py-20 px-16">
    <!-- heading  -->
    <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-semibold text-[#00141F] mb-4">
          Our Executive Team
        </h1>
        <p class="text-[#484848] max-w-2xl mx-auto">
          Stackchase is the powerhouse behind Ration Collaboration Suite and<br/> Singular API, providing cutting-edge solutions for s
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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