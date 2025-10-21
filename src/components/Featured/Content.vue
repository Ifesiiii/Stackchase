<script setup>
import { ref } from 'vue'
import seminar2 from '../../assets/img/seminar.png'
import men5 from '../../assets/img/men5.png'

const content = ref({
  title: 'The Hidden Costs of Tool Switching (And How Ration Fixes it)',
  contentImage:
    seminar2,
  contentImageAlt: 'Person presenting on stage',
  contentCaption:
    'How fragmented tools drain productivity and why a unified hub matters.',
  sections: [
    {
      heading: "The Everyday Problem You Didn't Realize Was So Costly",
      content: [
        {
          type: 'paragraph',
          text: "Imagine this: You're in the middle of planning a project.",
        },
        {
          type: 'paragraph',
          text: "You've got your chat app open to coordinate tasks, your project board to track progress, your document editor for specs, and your file-sharing tool for assets.",
        },
        {
          type: 'paragraph',
          text: "Five minutes in, you've switched tabs three times, lost your train of thought twice, and... wait, where did that file go? This might feel normal — but it's quietly draining time, focus, and energy right over your team.",
        },
      ],
    },
    {
      heading: 'The Real Cost of Tool Switching',
      content: [
        {
          type: 'paragraph',
          text: "Tool switching isn't just an annoyance. It's a productivity killer backed by research. Studies show that:",
        },
        {
          type: 'list',
          items: [
            {
              medium: '23 minutes',
              text: ' — the average time it takes to regain full focus after an interruption.',
            },
            {
              medium: 'Up to 40% of productivity',
              text: ' can be lost when people constantly shift between apps.',
            },
            {
              medium: 'Hidden mental load',
              text: ' — even if the switch takes seconds, the cognitive effort of reorienting is exhausting.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'When you multiply this across an entire team, the costs are staggering:',
        },
        {
          type: 'list',
          items: [
            'Deadlines slip because updates live in silos.',
            'Duplicate work happens because visibility is low.',
            'Morale drops because everything feels harder than it should be.',
          ],
        },
      ],
    },
    {
      heading: 'Why Teams Fall Into the Trap',
      content: [
        {
          type: 'paragraph',
          text: "Teams don't start with a dozen disconnected tools — they accumulate them over time:",
        },
        {
          type: 'list',
          items: [
            'One app for quick messaging.',
            'Another for project tracking.',
            'A third for cloud documents.',
            'A niche tool for that "one unique need."',
          ],
        },
        {
          type: 'paragraph',
          text: 'Before you know it, your workflow is a patchwork quilt stitched together by copy-pasting links between apps.',
        },
      ],
    },
    {
      image:
        men5,
      imageAlt: 'Team collaboration',
      heading: 'The Unified Hub Solution',
      content: [
        { type: 'paragraph', text: "That's where Ration changes everything." },
        {
          type: 'paragraph',
          text: "Instead of jumping between tabs and logins, Ration centralizes your team's core work into one seamless hub:",
        },
        {
          type: 'list',
          items: [
            { medium: 'Messaging + Tasks + Files', text: ' in a single interface.' },
            {
              medium: 'Real-time updates',
              text: ' that keep everyone on the same page — literally.',
            },
            {
              medium: 'Integrated search',
              text: ' to find anything across chats, projects, and files instantly.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'No more silos. No more "Where was that again?" moments. Just one place where work lives, moves, and gets done.',
        },
      ],
    },
    {
      heading: 'Why This Matters Now More Than Ever',
      content: [
        {
          type: 'paragraph',
          text: 'In a world where remote and hybrid work are the norm, clarity is currency.',
        },
        { type: 'paragraph', text: 'A unified hub like Ration:' },
        {
          type: 'list',
          items: [
            'Reduces context switching so your team can focus deeply.',
            'Gives leadership real visibility into progress without micromanaging.',
            'Boosts team morale by removing everyday friction.',
          ],
        },
      ],
    },
    {
      heading: 'Bottom Line',
      content: [
        {
          type: 'paragraph',
          text: "Your team’s most valuable resource isn’t software — it’s time and attention.  Tool switching quietly eats both. Ration gives them back."
        },
      ],
    },
  ],
})
</script>




<template>
  <article class="bg-white">
    <!-- Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <h1 class="text-4xl md:text-5xl font-medium text-[#00141F] text-center mb-8">
        {{ content.title }}
      </h1>
      
      <img 
        :src="content.contentImage"
        :alt="content.contentImageAlt" 
        class="w-full rounded-lg mb-6"
      />
      
      <p class="text-sm font-sm text-[#000000] italic mb-8">
        {{ content.contentCaption }}
      </p>

      <!-- Content Sections -->
      <div class="space-y-12">
        <section 
          v-for="(section, index) in content.sections" 
          :key="index"
          class="space-y-2" 
        >
          <img 
            v-if="section.image"
            :src="section.image"
            :alt="section.imageAlt" 
            class="w-full rounded-lg mb-6"
          />
          
          <h2 class="text-2xl md:text-3xl font-medium text-[#131313]">
            {{ section.heading }}
          </h2>
          
          <template v-for="(item, idx) in section.content" :key="idx">
            <p v-if="item.type === 'paragraph'" class="text-[#2E2E2E] leading-relaxed">
              {{ item.text }}
            </p>
            
            <ul v-if="item.type === 'list'" class="space-y-1 ml-6 list-disc">
              <li 
                v-for="(listItem, lIdx) in item.items" 
                :key="lIdx"
                class="text-[#2E2E2E] leading-relaxed"
              >
                <span v-if="typeof listItem === 'object' && listItem.medium" class="font-sm">{{ listItem.medium }}</span>
                <template v-if="typeof listItem === 'object' && listItem.text">{{ listItem.text }}</template>
                <template v-else>{{ listItem }}</template>
              </li>
            </ul>
          </template>
        </section>
      </div>
    </div>
  </article>
</template>

