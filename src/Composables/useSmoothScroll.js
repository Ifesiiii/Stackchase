import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  let ctx

  onMounted(() => {
    ctx = gsap.context(() => {
      gsap.to('html', {
        scrollBehavior: 'smooth',
        duration: 0
      })
    })
  })

  onUnmounted(() => {
    if (ctx) ctx.revert()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { ctx }
}

// Timeline animations
export function useTimelineAnimations() {
  onMounted(() => {
    const ctx = gsap.context(() => {
      // Animate timeline events
      gsap.utils.toArray('.timeline-event').forEach((event, index) => {
        gsap.from(event, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: event,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Animate the timeline axis
      gsap.from('.timeline-axis', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.timeline-axis',
          start: 'top 100%',
          end: 'bottom 40%',
          scrub: 1
        }
      })
    })

    onUnmounted(() => ctx.revert())
  })
}

// Product cards animations
export function useProductAnimations() {
  onMounted(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.product-card').forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1.3,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    })

    onUnmounted(() => ctx.revert())
  })
}

// Innovation section animations
export function useInnovationAnimations() {
  onMounted(() => {
    const ctx = gsap.context(() => {
      // Feature cards stagger animation
      gsap.from('.feature-card', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.feature-cards-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Slide image with scale effect
      gsap.from('.innovation-slide', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.innovation-slide',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    onUnmounted(() => ctx.revert())
  })
}

// Talk section with parallax
export function useTalkAnimations() {
  onMounted(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.talk-background', {
        yPercent: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.talk-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Content fade in
      gsap.from('.talk-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.talk-section',
          start: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    onUnmounted(() => ctx.revert())
  })
}