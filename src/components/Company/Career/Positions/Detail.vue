<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();

// Would put the API if there's one later
const positions = {
  1: {
    id: 1,
    title: 'Project Manager',
    location: 'Lagos',
    workType: 'Hybrid',
    employmentType: 'Full time',
    about: 'We are looking for a strategic, detail-oriented, and collaborative Product Manager to lead the development and growth of our products. You will work closely with engineering, design, marketing, and leadership to define product vision, prioritize features, and deliver solutions that meet user needs and business goals.',
    responsibilities: [
      'Define and communicate the product vision, strategy, and roadmap.',
      'Translate business objectives into clear product requirements and user stories.',
      'Work closely with engineering teams to ensure timely and high-quality product delivery.',
      'Conduct market research and competitor analysis to identify opportunities and product gaps.',
      'Collaborate with design teams to create intuitive, user-centric experiences.',
      'Lead product planning, sprint prioritization, and release management.',
      'Analyze product performance, usage metrics, and customer feedback to inform improvements.',
      'Drive cross-functional alignment between product, marketing, sales, and operations.',
      'Manage stakeholder expectations and communicate progress effectively.',
      'Ensure products meet compliance, security, and performance standards.'
    ],
    requirements: [
      "Bachelor's degree in Business, Computer Science, Engineering, or a related field.",
      '2-5 years of experience as a Product Manager or similar role.',
      'Strong understanding of product development lifecycle and agile methodologies.',
      'Excellent communication, analytical, and problem-solving skills.',
      'Ability to balance technical details with business priorities.',
      'Experience collaborating with cross-functional teams.',
      'Comfortable working in fast-paced, evolving environments.',
      'Familiarity with product analytics tools (e.g., Mixpanel, GA4, Hotjar) is a plus.'
    ],
    preferred: [
      'Experience in SaaS, collaboration tools, or digital platforms.',
      'Background in UX/UI principles.',
      'Experience managing API-driven or cloud-based products.',
      'Strong project management and stakeholder coordination skills.'
    ],
    offer: [
      'Competitive salary and performance-based bonuses.',
      'Flexible work environment (remote/hybrid).',
      'Health and wellness benefits.',
      'Opportunities for professional development and career growth.',
      'A culture that values innovation, autonomy, and collaboration.'
    ]
  },
  2: {
    id: 2,
    title: 'Full-stack Engineer',
    location: 'Lagos',
    workType: 'Hybrid',
    employmentType: 'Full time',
    about: 'Job description for Full-stack Engineer...',
    responsibilities: [],
    requirements: [],
    preferred: [],
    offer: []
  },
  // Add other positions...
};

const positionId = computed(() => parseInt(route.params.id));
const position = computed(() => positions[positionId.value]);
</script>

<template>
  <div class="font-heading bg-white min-h-screen py-12 px-8">
    <div class="max-w-4xl mx-auto">
      <div v-if="position">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-5xl font-bold text-[#131313] mb-4 leading-[56px] tracking-[-0.5px]">
            {{ position.title }}
          </h1>
          <p class="text-[#616161] text-xl leading-7">
              {{ position.location }} — {{ position.workType }} — {{ position.employmentType }}
          </p>
        </div>

        <!-- About the Role -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold text-[#131313] mb-4">About the Role</h2>
          <p class="text-[#131313] text-base leading-7">
            {{ position.about }}
          </p>
        </section>

        <!-- Responsibilities -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold text-[#131313] mb-4">Responsibilities</h2>
          <ul class="list-disc list-inside space-y-2 text-[#131313] text-base ml-4">
            <li v-for="(item, index) in position.responsibilities" :key="index">{{ item }}</li>
          </ul>
        </section>

        <!-- Requirements -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold text-[#131313] mb-4">Requirements</h2>
          <ul class="list-disc list-inside space-y-2 text-[#131313] text-base ml-4">
            <li v-for="(item, index) in position.requirements" :key="index">{{ item }}</li>
          </ul>
        </section>

        <!-- Preferred Qualifications -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold text-[#131313] mb-4">Preferred Qualifications</h2>
          <ul class="list-disc list-inside space-y-2 text-[#131313] text-base ml-4">
            <li v-for="(item, index) in position.preferred" :key="index">{{ item }}</li>
          </ul>
        </section>

        <!-- What We Offer -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold text-[#131313] mb-4">What We Offer</h2>
          <ul class="list-disc list-inside space-y-2 text-[#131313] text-base ml-4">
            <li v-for="(item, index) in position.offer" :key="index">{{ item }}</li>
          </ul>
        </section>

        <!-- Application Form -->
        <section class="mt-12">
          <h2 class="text-2xl font-semibold text-[#131313] mb-6">Apply for this job</h2>
          <p class="text-[#616161] text-xl leading-7">
                Interested candidates should send their resume to 
                <a 
                  href="mailto:careers@stackchase.com?subject=Application for {{ position.title }}" 
                  class="text-[#006699] hover:underline transition-all"
                >
                  careers@stackchase.com
                </a>
          </p> 
        </section>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-[#616161] text-xl">Position not found</p>
      </div>
    </div>
  </div>
</template>