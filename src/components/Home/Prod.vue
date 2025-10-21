<script setup>
import office from '../../assets/img/office.png'
import Card from './Card.vue';
</script>

<template>
  <section class="bg-white py-20 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-medium text-center text-[#00141F] mb-16 max-w-3xl mx-auto">
        Powering Productivity, Simplifying Work
      </h2>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Office Image -->
        <div class="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
          <img
            :src="office"
            alt="Modern office workspace"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Cards Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <Card
            title="Unifying Workflows & Collaboration"
            description="We simplify the way teams and businesses work by bringing together essential tools in one powerful hub. From communication to task management, Stackchase enables seamless collaboration and productivity."
          >
            <template #icon>
              <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826m1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.305-3.535-3.534-1.06 1.06a3 3 0 0 1-4.244-4.242l2.102-2.103a4.5 4.5 0 0 0-5.837.189zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078z"/></svg>
              </div>
            </template>
          </Card> 

          <!-- Card 2: Seamless Integration -->
          <Card
            title="Seamless Integration & API Connectivity"
            description="Stackchase bridges the gap between applications, allowing businesses and developers to integrate APIs effortlessly. Our platform ensures smooth interoperability between different systems."
          >
            <template #icon>
              <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.99988C14.2091 2.99988 16 4.79074 16 6.99988C16 7.54431 15.8917 8.06177 15.6958 8.53327C14.0548 8.70904 12.5038 9.5584 11.4804 10.9666C10.2212 10.8033 9.14476 10.0545 8.53417 8.99859C8.19462 8.41137 7.99998 7.72986 7.99998 6.99988C7.99998 4.79074 9.79084 2.99988 12 2.99988ZM17.7635 8.67236C17.9175 8.14099 18 7.57964 18 6.99988C18 3.68617 15.3137 0.999879 12 0.999878C8.68627 0.999877 5.99998 3.68617 5.99998 6.99988C5.99998 7.57966 6.08247 8.14104 6.23647 8.67242C5.69935 8.80476 5.172 9.01399 4.66995 9.30385C1.80019 10.9607 0.81694 14.6302 2.47379 17.5C4.13065 20.3698 7.80019 21.353 10.6699 19.6962C11.172 19.4063 11.6169 19.0542 12 18.6552C12.3832 19.0542 12.828 19.4062 13.33 19.6961C16.1998 21.3529 19.8693 20.3697 21.5262 17.4999C23.183 14.6302 22.1998 10.9606 19.33 9.30377C18.828 9.01392 18.3006 8.80469 17.7635 8.67236ZM13.1543 16.9342C13.8227 15.4251 13.8627 13.6571 13.1549 12.0667C13.9259 11.0577 15.1125 10.4999 16.3322 10.4991C17.0104 10.4987 17.6979 10.6709 18.33 11.0358C20.2432 12.1404 20.8987 14.5868 19.7941 16.4999C18.6895 18.4131 16.2432 19.0686 14.33 17.964C13.8586 17.6919 13.4647 17.3395 13.1543 16.9342ZM11.3649 12.9668C11.8532 14.139 11.7429 15.4456 11.1337 16.5023C10.7949 17.0899 10.3021 17.5991 9.66995 17.9641C7.75678 19.0687 5.31042 18.4132 4.20585 16.5C3.10128 14.5868 3.75678 12.1405 5.66995 11.0359C6.14142 10.7637 6.64366 10.5987 7.1499 10.5326C8.12267 11.8659 9.63373 12.7845 11.3649 12.9668Z"></path></svg>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>