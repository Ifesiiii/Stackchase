<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const showCookieBanner = ref(false);

const handleScroll = () => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  // Show banner when footer is about to enter viewport (within 200px)
  showCookieBanner.value = footerTop <= windowHeight + 200;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const acceptCookies = () => {
  showCookieBanner.value = false;
  window.removeEventListener('scroll', handleScroll);
};

const rejectCookies = () => {
  showCookieBanner.value = false;
  window.removeEventListener('scroll', handleScroll);
};
</script>

<template>
  <section class="font-heading">
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="showCookieBanner"
        class="fixed bottom-0 left-0 right-0 bg-[#13131366] z-50 px-6 py-4"
      >
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <!-- Content -->
          <div class="flex-1">
            <p class="text-white text-base leading-6">
              We use cookies to enhance your experience, analyze site traffic and deliver personalized content. Read our 
              <RouterLink to="/policy" class="text-[#2A80AA] hover:text-blue-500 underline">
                Privacy Policy
              </RouterLink>.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 flex-shrink-0">
            <button
              @click="rejectCookies"
              class="px-6 py-2 bg-white text-[#003854] rounded hover:bg-gray-200 transition-colors text-sm font-bold"
            >
              Reject All
            </button>
            <button
              @click="acceptCookies"
              class="px-6 py-2 bg-[#069] text-white rounded hover:bg-blue-700 transition-colors text-sm font-bold"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>