<script setup>
import team from '../../../assets/img/Team.png'
</script>


<template>
    <section class="font-heading bg-white px-8 mb-[100px]">
      <div class="max-w-7xl max-w-screen-[1366px] mx-auto">
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Left Column -->
          <div>
            <h2 class="text-5xl font-semibold text-[#00141F] mb-8 leading-[56px] tracking-[-0.48px]">
              Life At Stackchase 
            </h2>
            <div class="text-2xl space-y-6 text-[#00141F] leading-[30px]">
            <p>
             We’re a tight‑knit tribe. Our people come first; we coach<br> and celebrate one another. Inclusion, respect, and<br> recognition aren’t slogans—they’re how we work.
            </p>
            
            <p>
              Across Africa and our global hubs, everyone brings their<br> whole self. Different voices fuel better ideas and faster<br> shipping. Together we create a supportive, inclusive<br> environment that lets bold ideas surface quickly and<br> great teams move even faster. 
            </p>
            
            <p>
              United by one mission, we’re the Stackchase Tribe— <br> builders of Africa’s technology backbone. From platform<br> APIs to data pipelines, we turn complex problems into<br> reliable systems others build on. If you’re ready to grow,<br> you’ll find mentors, stretch roles, and clear paths. 
            </p>
            </div>
          </div>

          <!-- Right Column -->
          <div >
            <img 
            :src="team"
            class="w-[634px] rounded-xl"
            />
          </div>
          </div>
      </div>
    </section>
</template>