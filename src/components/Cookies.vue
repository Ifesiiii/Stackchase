<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const showCookieBanner = ref(false);

onMounted(() => {
  // Check if user has already accepted/rejected cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) {
    showCookieBanner.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted');
  showCookieBanner.value = false;
};

const rejectCookies = () => {
  localStorage.setItem('cookieConsent', 'rejected');
  showCookieBanner.value = false;
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
      class="fixed bottom-6 right-20 max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6 border border-gray-200"
    >
      <!-- Close Button -->
      <button
        @click="rejectCookies"
        class="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Content -->
      <div class="mb-4 pr-6">
        <p class="text-[#00141F] text-xl leading-7">
          We use cookies to enhance your experience, analyze site traffic and deliver personalized content. Read our 
          <RouterLink to="/privacy-policy" class="text-[#069] hover:text-blue-500 underline">
            Privacy Policy
          </RouterLink>.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3">
        <button
          @click="rejectCookies"
          class="flex-1 px-4 py-2.5 bg-[#F4F4F4] text-[#023] rounded-lg hover:bg-gray-50 transition-colors text-sm font-bold leading-[22px]"
        >
          Reject All
        </button>
        <button
          @click="acceptCookies"
          class="flex-1 px-4 py-2.5 bg-[#069] text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-bold leading-[22px]"
        >
          Accept All
        </button>
      </div>
    </div>
  </Transition>
</section>
</template>