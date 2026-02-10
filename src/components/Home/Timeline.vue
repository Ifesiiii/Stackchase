<script setup>
import { useTimelineAnimations } from '../../composables/useSmoothScroll'


useTimelineAnimations()

const timelineEvents = [
  {
    year: '2003',
    title: 'Lopworks Founded',
    description:
      'Lopworks provides IT consulting and system integration services.',
    position: 'bottom',
    color: '#CCE0EB'
  },
  {
    year: '2020',
    title: 'Stackchase Founded',
    description:
      'Stackchase was created to build and own reliable IT platforms.',
    position: 'top',
    color: '#80B3CC'
  },
  {
    year: '2023',
    title: 'Started Ration Build',
    description:
      'Developed Ration as an on-premise email platform.',
    position: 'bottom',
    color: '#2A80AA'
  },
  {
    year: '2025',
    title: 'Ration Launched',
    description:
      'Launched Ration Cloud, a secure collaboration suite.',
    position: 'top',
    color: '#069'
  }
]
</script>

<template>
  <section class="font-heading bg-gray-50 px-4 sm:px-8 lg:px-16 md:py-12 sm:py-[56px] lg:py-[100px] max-w-screen-[1366px]">
    <div class="mx-auto max-w-7xl">
      <!-- Section Title -->
      <h2 class="px-4 text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00141F] mb-12 sm:mb-16 md:mb-20 leading-[38px] sm:leading-10">
        A Journey—Transforming and<br class="hidden md:block"> Innovating Through Time
      </h2>

      <!-- Timeline -->
      <div class="relative mx-auto max-w-6xl" aria-label="Company timeline">
        <!-- Horizontal axis (desktop) -->
        <div
          aria-hidden="true"
          class="timeline-axis absolute inset-x-0 top-1/2 hidden -translate-y-1/2 rounded-full md:block"
          style="transform-origin: left center"
        >
          <div class="h-[10px] rounded-full bg-gradient-to-r from-gray-300 via-sky-400 to-sky-900 shadow-[0_6px_22px_rgba(2,132,199,0.25)]"></div>
        </div>

        <!-- Vertical line (mobile) -->
        <div
          aria-hidden="true"
          class="absolute left-[6px] top-0 bottom-0 w-px bg-gray-300 md:hidden"
        ></div>

        <!-- Items - Add timeline-event class -->
        <div class="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-4 md:gap-6">
          <article
            v-for="(event, idx) in timelineEvents"
            :key="`${event.year}-${idx}`"
            class="timeline-event relative"
          >
            <div class="relative block md:hidden">
              <!-- Dot on vertical line -->
              <div
                class="absolute left-0 z-10"
                aria-hidden="true"
              >
                <div 
                  class="h-3 w-3 rounded-full border-2 border-white shadow-md"
                  :style="{ backgroundColor: event.color }"
                ></div>
              </div>

              <!-- Card content -->
              <div class="ml-6 bg-white">
                <h3 class="mb-2 text-left text-3xl sm:text-4xl font-bold leading-none text-[#00141F]">{{ event.year }}</h3>
                <h4 class="mb-3 text-left text-lg sm:text-xl font-semibold text-[#00141F]">{{ event.title }}</h4>
                <p class="text-left text-sm leading-6 text-gray-600">
                  {{ event.description }}
                </p>
              </div>
            </div>

            
            <div class="relative hidden h-[420px] md:block">
              <!-- Connector + Dot -->
              <div
                class="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <div class="flex flex-col items-center">
                  <div v-if="event.position === 'top'" class="h-60 w-px bg-gray-200"></div>
                  <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                  <div v-if="event.position === 'bottom'" class="h-60 w-px bg-gray-300"></div>
                </div>
              </div>

              <!-- Year label (aligned with connector) -->
              <div
                class="absolute left-1/2 z-20 -translate-x-1/2 text-[56px] font-bold"
                :class="event.position === 'top' ? 'top-1/2 translate-y-3' : 'bottom-1/2 -translate-y-3'"
              >
                {{ event.year }}
              </div>

              <!-- Content ABOVE axis -->
              <div
                v-if="event.position === 'top'"
                class="absolute bottom-1/2 left-0 right-0 z-20 flex justify-center pb-16"
              >
                <div class="max-w-xs px-4">
                  <h4 class="mb-3 text-2xl font-semibold">{{ event.title }}</h4>
                  <p class="text-base leading-relaxed text-gray-600">
                    {{ event.description }}
                  </p>
                </div>
              </div>

              <!-- Content BELOW axis -->
              <div
                v-if="event.position === 'bottom'"
                class="absolute left-0 right-0 top-1/2 z-20 flex justify-center pt-16"
              >
                <div class="max-w-xs px-4">
                  <h4 class="mb-3 text-2xl font-semibold">{{ event.title }}</h4>
                  <p class="text-base leading-relaxed text-gray-600">
                    {{ event.description }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>