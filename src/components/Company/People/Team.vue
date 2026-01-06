<script setup>
import { ref } from 'vue';
import Tcard from './Tcard.vue';
import man1 from '../../../assets/img/CEO2.png'
import woman1 from '../../../assets/img/woman1.png'
import woman2 from '../../../assets/img/woman2.png'
import man3 from '../../../assets/img/man3.png'

const showModal = ref(false);
const selectedMember = ref(null);

const team = [
  {
    id: 1,
    image: man1,
    name: 'Ademola Osindero',
    title: 'C.E.O',
    bio: 'Founded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.\n\nFounded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.',
    linkedin: '#'
  },
  // {
  //   id: 2,
  //   // image: woman1,
  //   name: 'Lisa Teni',
  //   title: 'Lead Sales',
  //   bio: 'Founded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.\n\nFounded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.',
  //   linkedin: '#'
  // },
  // {
  //   id: 3,
  //   // image: woman2,
  //   name: 'Ayoola Hassan',
  //   title: 'C.E.O',
  //   bio: 'Founded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.\n\nFounded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.',
  //   linkedin: '#'
  // },
  // {
  //   id: 4,
  //   // image: man3,
  //   name: 'Lisa Teni',
  //   title: 'Lead Sales',
  //   bio: 'Founded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.\n\nFounded in 2020, Stackchase began with a simple conviction: technology should empower, not restrict. A small team driven by curiosity became a company focused on giving businesses control, reliability, and room to grow.',
  //   linkedin: '#'
  // }
];

const openModal = (member) => {
  selectedMember.value = member;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  selectedMember.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<template>
   <section class="font-heading max-w-7xl max-w-screen-[1366px] mb-[100px] mx-auto px-8">
    <!-- heading  -->
    <div class="text-center mb-12">
        <h1 class="text-5xl font-semibold text-[#00141F] mb-12 leading-[56px] tracking-[-0.5px]">
          Our Team
        </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <Tcard
      v-for="member in team"
      :key="member.id"
      :image="member.image"
      :name="member.name"
      :title="member.title"
      @click="openModal(member)"
      class="cursor-pointer"
    />
    </div>

      <!-- Modal -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showModal"
          @click="closeModal"
          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="selectedMember"
              @click.stop
              class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide"
            >
              <!-- Close Button -->
              <button
                @click="closeModal"
                class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="#131313" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

              <!-- Modal Content -->
              <div class="p-6">
                <!-- Image -->
                <div class="mb-6 rounded-xl overflow-hidden">
                  <img
                    :src="selectedMember.image"
                    :alt="selectedMember.name"
                    class="w-full h-auto object-cover"
                  />
                </div>

                <!-- Name and Title -->
                <h2 class="text-[40px] font-semibold text-[#131313] mb-1 leading-[56px]">
                  {{ selectedMember.name }}
                </h2>
                <p class="text-[#616161] text-[28px] mb-4 uppercase leading-8">
                  {{ selectedMember.title }}
                </p>

                <!-- Bio -->
                <div class="text-[#424242] text-xl leading-[30px] mb-6 space-y-4">
                  <p v-for="(paragraph, index) in selectedMember.bio.split('\n\n')" :key="index">
                    {{ paragraph }}
                  </p>
                </div>

                <!-- LinkedIn Link -->
                <a
                  :href="selectedMember.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M26.5 3.5H5.5C4.96957 3.5 4.46086 3.71071 4.08579 4.08579C3.71071 4.46086 3.5 4.96957 3.5 5.5V26.5C3.5 27.0304 3.71071 27.5391 4.08579 27.9142C4.46086 28.2893 4.96957 28.5 5.5 28.5H26.5C27.0304 28.5 27.5391 28.2893 27.9142 27.9142C28.2893 27.5391 28.5 27.0304 28.5 26.5V5.5C28.5 4.96957 28.2893 4.46086 27.9142 4.08579C27.5391 3.71071 27.0304 3.5 26.5 3.5ZM12 22C12 22.2652 11.8946 22.5196 11.7071 22.7071C11.5196 22.8946 11.2652 23 11 23C10.7348 23 10.4804 22.8946 10.2929 22.7071C10.1054 22.5196 10 22.2652 10 22V14C10 13.7348 10.1054 13.4804 10.2929 13.2929C10.4804 13.1054 10.7348 13 11 13C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V22ZM11 11.5C10.7033 11.5 10.4133 11.412 10.1666 11.2472C9.91997 11.0824 9.72771 10.8481 9.61418 10.574C9.50065 10.2999 9.47094 9.99834 9.52882 9.70736C9.5867 9.41639 9.72956 9.14912 9.93934 8.93934C10.1491 8.72956 10.4164 8.5867 10.7074 8.52882C10.9983 8.47094 11.2999 8.50065 11.574 8.61418C11.8481 8.72771 12.0824 8.91997 12.2472 9.16665C12.412 9.41332 12.5 9.70333 12.5 10C12.5 10.3978 12.342 10.7794 12.0607 11.0607C11.7794 11.342 11.3978 11.5 11 11.5ZM23 22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23C21.7348 23 21.4804 22.8946 21.2929 22.7071C21.1054 22.5196 21 22.2652 21 22V17.5C21 16.837 20.7366 16.2011 20.2678 15.7322C19.7989 15.2634 19.163 15 18.5 15C17.837 15 17.2011 15.2634 16.7322 15.7322C16.2634 16.2011 16 16.837 16 17.5V22C16 22.2652 15.8946 22.5196 15.7071 22.7071C15.5196 22.8946 15.2652 23 15 23C14.7348 23 14.4804 22.8946 14.2929 22.7071C14.1054 22.5196 14 22.2652 14 22V14C13.9993 13.7539 14.0894 13.5162 14.253 13.3324C14.4166 13.1485 14.6423 13.0315 14.8868 13.0036C15.1313 12.9758 15.3775 13.039 15.5783 13.1814C15.7791 13.3237 15.9203 13.535 15.975 13.775C16.6516 13.3163 17.4405 13.0506 18.2567 13.0064C19.073 12.9622 19.8859 13.1412 20.6081 13.5242C21.3303 13.9071 21.9346 14.4796 22.356 15.18C22.7774 15.8805 23 16.6825 23 17.5V22Z" fill="#B6B6B6"/>
                  </svg>
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </section>
</template>



<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>