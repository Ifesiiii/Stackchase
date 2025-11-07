<script setup>
const timelineEvents = [
  {
    year: '2003',
    title: 'Lopworks Founded',
    description:
      'Lopworks was established as an IT company delivering consulting and system‑integration services to enterprises across diverse industries.',
    position: 'bottom' 
  },
  {
    year: '2020',
    title: 'Stackchase Founded',
    description:
      'Stackchase, a Lopworks Limited company, emerged from a need for autonomy—to design and develop reliable IT platforms that we own.',
    position: 'top' 
  },
  {
    year: '2023',
    title: 'Started Ration Build',
    description:
      'Started developing Ration as an on‑premises email platform, first adopted by the Nigerian Army and then the Ogun State Government.',
    position: 'bottom' 
  },
  {
    year: '2025',
    title: 'Ration Launched',
    description:
      'Launching Ration Cloud as a secure messaging, meeting, and collaboration suite designed for modern teams.',
    position: 'top' 
  }
]
</script>

<template>
  <section class="bg-gray-50 py-16 px-6">
    <div class="mx-auto max-w-7xl">
      <!-- Section Title -->
      <h2 class="mb-16 px-4 text-center text-4xl font-semibold text-[#00141F] md:mb-20 md:text-5xl">
        A Journey—Transforming and<br class="hidden md:block"> Innovating Through Time
      </h2>

      <!-- Timeline -->
      <div class="relative mx-auto max-w-6xl" aria-label="Company timeline">
        <!-- Horizontal axis (desktop) -->
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 rounded-full md:block"
        >
          <div class="h-[10px] rounded-full bg-gradient-to-r from-gray-300 via-sky-400 to-sky-900 shadow-[0_6px_22px_rgba(2,132,199,0.25)]"></div>
        </div>

        <!-- Items -->
        <div class="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <article
            v-for="(event, idx) in timelineEvents"
            :key="`${event.year}-${idx}`"
            class="relative"
          >
            <div class="relative block md:hidden">
              <!-- Connector & dot (inside card, centered) -->
              <div
                class="absolute left-1/2 z-10 -translate-x-1/2"
                :class="event.position === 'top' ? 'top-0 -mt-6' : 'top-0'"
                aria-hidden="true"
              >
                <div v-if="event.position === 'top'" class="mb-2 h-6 w-px bg-gray-300"></div>
                <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                <div v-if="event.position === 'bottom'" class="mt-2 h-6 w-px bg-gray-300"></div>
              </div>

              <!-- Card content -->
              <div class="mx-auto max-w-md rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 class="mb-1 text-center text-4xl font-bold leading-none">{{ event.year }}</h3>
                <h4 class="mb-2 text-center text-lg font-semibold">{{ event.title }}</h4>
                <p class="text-center text-sm leading-relaxed text-gray-600">
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
                  <div v-if="event.position === 'top'" class="h-60 w-px bg-gray-300"></div>
                  <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                  <div v-if="event.position === 'bottom'" class="h-60 w-px bg-gray-300"></div>
                </div>
              </div>

              <!-- Year label (aligned with connector) -->
              <div
                class="absolute left-1/2 z-20 -translate-x-1/2 text-4xl font-bold"
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
                  <h4 class="mb-3 text-xl font-semibold">{{ event.title }}</h4>
                  <p class="text-sm leading-relaxed text-gray-600">
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
                  <h4 class="mb-3 text-xl font-semibold">{{ event.title }}</h4>
                  <p class="text-sm leading-relaxed text-gray-600">
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



