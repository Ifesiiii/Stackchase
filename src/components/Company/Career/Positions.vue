<script setup>



const positions = [
    {
        id: 1,
        title: 'Mobile Developer',
        location: 'Lagos',
        workType: 'Hybrid',
        employmentType: 'Full time'
    },
    {
        id: 2,
        title: 'Full-stack Developer(Elixir)',
        location: 'Lagos',
        workType: 'Hybrid',
        employmentType: 'Full time'
    },
    {
        id: 3,
        title: 'Marketing Associate',
        location: 'Lagos',
        workType: 'Hybrid',
        employmentType: 'Full time'
    },
    {
        id: 4,
        title: 'DevOps Engineer',
        location: 'Lagos',
        workType: 'Hybrid',
        employmentType: 'Full time'
    },
]
</script>

<template>
    <div id="open-positions" class="font-heading max-w-7xl max-w-screen-[1366px] mx-auto mb-[100px] sm:px-8 scroll-mt-8">
      <h1 class="text-5xl font-bold mb-[68px] leading-[56px] tracking-[-0.5px]">
        Open Positions. <span>({{ positions.length }})</span>
      </h1>

      <div class="space-y-0">
        <div 
          v-for="position in positions" 
          :key="position.id"
          class="block border-b border-[#E7E7E7] py-8 first:pt-0 last:border-b-0 hover:opacity-80 transition-opacity"
        >
          <div class="flex items-start gap-4">
            <span class="text-[#131313] text-[40px] font-semibold leading-[50px] tracking-[-0.5px]">
              ({{ position.id }})
            </span>
            <div>
              <h2 class="text-[#131313] text-[40px] font-semibold mb-3 leading-[50px] tracking-[-0.5px]">
                {{ position.title }}
              </h2>
              <p class="text-[#616161] text-xl leading-7">
                {{ position.location }} — {{ position.workType }} — {{ position.employmentType }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>