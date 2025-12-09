<script setup>
import { ref } from 'vue';
import Stackchase from '../../../assets/img/lg1.png'
import Primary from '../../../assets/img/lg2.png'
import Primarty from '../../../assets/img/lg3.png'
import Transparent from '../../../assets/img/lg4.png'
import Icon from '../../../assets/img/lg5.png'
import Brand1 from '../../../assets/img/Bm1.png'
import M1 from '../../../assets/img/m1.png'
import M2 from '../../../assets/img/m2.png'
import M3 from '../../../assets/img/m3.png'
import M4 from '../../../assets/img/m4.png'




const activeTab = ref('logo-packs');

const logoPacksAssets = ref([
  {
    id: 1,
    title: 'Stackchase Logo',
    image: Stackchase,
    bgColor: 'bg-[#F5F9FB]',
    filename: 'stackchase-logo.png'
  },
  {
    id: 2,
    title: 'Primary logo',
    image: Primary,
    bgColor: 'bg-[#F5F9FB]',
    filename: 'primary-logo.png'
  },
  {
    id: 3,
    title: 'Primary logo transparent',
    image: Primarty,
    bgColor: 'bg-[#069]',
    filename: 'primary-logo-transparent.png'
  },
  {
    id: 4,
    title: 'Transparent logo icon',
    image: Transparent,
    bgColor: 'bg-[#069]',
    filename: 'transparent-logo-icon.png'
  },
  {
    id: 5,
    title: 'Logo icon',
    image: Icon,
    bgColor: 'bg-[#F5F9FB]',
    filename: 'logo-icon.png'
  }
]);

const brandManuals = ref([
  {
    id: 1,
    title: 'Brand manual (pdf)',
    image: Brand1,
    filename: 'brand-manual.pdf'
  }
]);

const productImages = ref([
  {
    id: 1,
    title: 'Postcard front view',
    image: M1,
    filename: 'postcard-front-1.jpg'
  },
  {
    id: 2,
    title: 'Postcard back view',
    image: M2,
    filename: 'postcard-back-1.jpg'
  },
  {
    id: 3,
    title: 'Postcard front view',
    image: M3,
    filename: 'postcard-front-2.jpg'
  },
  {
    id: 4,
    title: 'Postcard back view',
    image: M4,
    filename: 'postcard-back-2.jpg'
  }
]);

const handleDownload = (filename) => {
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = `/downloads/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Downloading: ${filename}`);
};

const handleDownloadAll = (type) => {
  let assets = [];
  
  if (type === 'logos') {
    assets = logoPacksAssets.value;
  } else if (type === 'manuals') {
    assets = brandManuals.value;
  } else if (type === 'products') {
    assets = productImages.value;
  }
  
  // Download each asset
  assets.forEach(asset => {
    setTimeout(() => handleDownload(asset.filename), 100);
  });
  
  console.log(`Downloading all ${assets.length} ${type}`);
};
</script>





<template>
  <div class="font-heading bg-white p-8 mb-[50px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Tabs -->
      <div class="flex gap-2 mb-12">
        <button
          @click="activeTab = 'logo-packs'"
          :class="[
            'px-6 py-3 rounded-lg text-xl leading-6 tracking-[-0.5px] transition-colors',
            activeTab === 'logo-packs'
              ? 'bg-[#023] text-white'
              : 'bg-white text-[#023] border border-gray-300 hover:bg-gray-50'
          ]"
        >
          Logo packs
        </button>
        <button
          @click="activeTab = 'product-images'"
          :class="[
            'px-6 py-3 rounded-lg text-xl leading-6 tracking-[-0.5px] transition-colors',
            activeTab === 'product-images'
              ? 'bg-[#023] text-white'
              : 'bg-white text-[#023] border border-gray-300 hover:bg-gray-50'
          ]"
        >
          Product images
        </button>
      </div>

      <!-- Logo Packs Tab -->
      <template v-if="activeTab === 'logo-packs'">
        <!-- Logos Section -->
        <div class="mb-16">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-5xl text-[#131313] leading-[56px] tracking-[-0.5px]">Logos</h2>
            <button
              @click="handleDownloadAll('logos')"
              class="flex text-[#131313] text-xl leading-6 tracking-[-0.5px] items-center gap-2 px-4 py-2 border border-[#DDD] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <span>Download all</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="asset in logoPacksAssets" :key="asset.id" class="group">
              <div :class="[asset.bgColor,'rounded-lg overflow-hidden mb-4 aspect-video flex items-center justify-center']">
                <img
                  :src="asset.image"
                  :alt="asset.title"
                  class="w-[200px] h-[101px] object-contain"
                />
              </div>
              <div class="flex justify-between items-center">
                <h3 class="text-[#131313] text-[28px] leading-[34px]">{{ asset.title }}</h3>
                <button
                  @click="handleDownload(asset.filename)"
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  :aria-label="`Download ${asset.title}`"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Brand Manual Section -->
        <div>
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-5xl text-[#131313] leading-[56px] tracking-[-0.5px]">Brand Manual</h2>
            <button
              @click="handleDownloadAll('manuals')"
              class="flex text-[#131313] text-xl leading-6 tracking-[-0.5px] items-center border border-[#DDD] rounded-lg hover:bg-gray-50 transition-colors"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <span>Download all</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="asset in brandManuals" :key="asset.id" class="group">
              <div class="rounded-lg overflow-hidden mb-4  flex items-center justify-center">
                <img
                  :src="asset.image"
                  :alt="asset.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex justify-between items-center">
                <h3 class="text-[#131313] text-[28px] leading-[34px]">{{ asset.title }}</h3>
                <button
                  @click="handleDownload(asset.filename)"
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  :aria-label="`Download ${asset.title}`"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Product Images Tab -->
      <template v-if="activeTab === 'product-images'">
        <div>
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-5xl text-[#131313] leading-[56px] tracking-[-0.5px]">Marketing</h2>
            <button
              @click="handleDownloadAll('products')"
              class="flex text-[#131313] text-xl leading-6 tracking-[-0.5px] items-center gap-2 px-4 py-2 border border-[border-[#DDD]] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <span>Download all</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="asset in productImages" :key="asset.id" class="group">
              <div class="rounded-lg overflow-hidden mb-4">
                <img
                  :src="asset.image"
                  :alt="asset.title"
                  class="w-full h-64 object-cover"
                />
              </div>
              <div class="flex justify-between items-center">
                <h3 class="text-[#131313] text-[28px] leading-[34px]">{{ asset.title }}</h3>
                <button
                  @click="handleDownload(asset.filename)"
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  :aria-label="`Download ${asset.title}`"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3.75V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>