<script setup>
import { ref, onMounted } from 'vue'
import Ntile from '../Home/Ntile.vue'
import meeting from '../../assets/img/meeting.png'
import skyscrapers from '../../assets/img/skyscrapers.png'
import women from '../../assets/img/women.png'
import man from '../../assets/img/man.png'
import Bwomen from '../../assets/img/Bwomen.png'
import design from '../../assets/img/design.png'
import red from '../../assets/img/red.png'
import shoot from '../../assets/img/photoshoot.png'
import lecture from '../../assets/img/lecture.png'

const activeTab = ref('all')
const showSortDropdown = ref(false)

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'News' },
  { id: 'features', label: 'Features' },
  { id: 'announcements', label: 'Announcements' }
]

const articles = [
  {
    id: 1,
    image: meeting,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 2,
    image: skyscrapers,
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
  },
  {
    id: 4,
    image: man,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 5,
    image: Bwomen,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 6,
    image: design,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 7,
    image: red,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 8,
    image: shoot,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  },
  {
    id: 9,
    image: lecture,
    date: 'July 12, 2025',
    title: 'Ration is a messaging and collaboration platform that offers intuitive',
    link: '#'
  }
]

const displayedArticles = ref([])

onMounted(() => {
  displayedArticles.value = articles
})

const loadMore = () => {
  console.log('Load more articles')
  // Will add logic later
}
</script>



<template>
  <section class="bg-white py-12 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Filter Tabs and Sort -->
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <!-- Tabs -->
        <div class="flex items-center gap-2 flex-wrap">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-6 py-2 rounded-md transition-all duration-300',
              activeTab === tab.id
                ? 'bg-[#002233] text-white'
                : 'bg-white text-[#131313] border border-gray-300 hover:border-gray-400'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Sort Dropdown -->
        <div class="relative">
          <button
            @click="showSortDropdown = !showSortDropdown"
            class="flex items-center gap-2 px-4 py-2 text-[#131313] hover:text-gray-600 transition-colors"
          >
            Sort by
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Ntile
          v-for="article in articles"
          :key="article.id"
          :image="article.image"
          :date="article.date"
          :title="article.title"
          :link="article.link"
        />
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center">
        <button
          @click="loadMore"
          class="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Load More Post
        </button>
      </div>
    </div>
  </section>
</template>



