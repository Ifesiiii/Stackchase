<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button'
  }
});

const emit = defineEmits(['click']);

const handleButtonClick = () => {
  emit('click');
};
</script>

<template>
  <button 
    class="bg-white text-[#131313] px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:gap-5 group"
    @click="handleButtonClick"
  >
    {{ text }}
    <svg 
      class="w-6 h-6 transition-transform group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</template>