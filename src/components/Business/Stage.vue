<script setup>
const stages = [
  {
    icon: 1,
    number: '1',
    title: 'Startups',
    description: 'Accelerate product development, reduce engineering overhead.'
  },
  {
    id: 2,
    number: '2',
    title: 'SMEs',
    description: 'Modernize operations with reliable tools and automation.'
  },
  {
    id: 3,
    number: '3',
    title: 'Fintechs',
    description: 'Secure inter-department communication and transaction data management.'
  },
  {
    id: 4,
    number: '4',
    title: 'Enterprises',
    description: 'Governance, security, scale, and high availability.'
  },
  {
    id: 5,
    number: '5',
    title: 'Education',
    description: 'Simplified collaboration and internal document sharing.'
  },
  {
    id: 6,
    number: '6',
    title: 'Professionals',
    description: 'Enhanced client communications and project tracking.'
  }
]

const getIcon = (title) => {
  const icons = {
    'Startups': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z" fill="#131313"/></svg>`,
    'SMEs': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z" fill="#131313"/></svg>`,
    'Fintechs': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.23607V9H20V8.23607L12 4.23607L4 8.23607ZM12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z" fill="#131313"/></svg>`,
    'Enterprises': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 6H23V8H22V19H23V21H1V19H2V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6ZM20 8H4V19H7V12H9V19H11V12H13V19H15V12H17V19H20V8ZM6 5V6H18V5H6Z" fill="#131313"/></svg>`,
    'Education': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 0.585693L18 6.58569V9H22V19H23V21H1V19H2V9H6V6.58569L12 0.585693ZM18 19H20V11H18V19ZM6 11H4V19H6V11ZM8 7.41412V18.9999H11V12H13V18.9999H16V7.41412L12 3.41412L8 7.41412Z" fill="#131313"/></svg>`,
    'Professionals': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z" fill="#131313"/></svg>`
  }
  return icons[title] || ''
}
</script>



<template>
  <section class="font-heading px-8 py-[50px] mb-[100px]">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl font-semibold text-center text-[#131313] mb-12">
        Built for Every Stage of Business
      </h2>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="stage in stages"
          :key="stage.id"
          class="bg-white p-8 rounded-2xl border-4 border-[#F5F9FB] shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Icon -->
          <div class="bg-[#F5F9FB] text-[#131313] mb-6 w-12 h-12 flex items-center justify-center rounded-full" v-html="getIcon(stage.title)"></div>

          <!-- Title -->
          <h3 class="text-[28px] font-semibold text-[#131313] mb-4 leading-8">
            {{ stage.title }}
          </h3>

          <!-- Description -->
          <p class="text-xl text-[#131313] leading-7">
            {{ stage.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>