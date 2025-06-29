<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import AppNavigation from '../components/landing/AppNavigation.vue'
const items = ref<NavigationMenuItem[]>([
  {
    label: 'Formations',
    icon: 'i-lucide-book-open',
    to: '/catalogue',

  },
  {
    label: 'Méthode',
    icon: 'i-lucide-database',
    to: '/catalogue',
  },
  {
    label: 'Participants',
    icon: 'i-lucide-box',
    to: '/catalogue',
  },
  {
    label: 'Offre',
    icon: 'i-lucide-file-text',
    to: '/catalogue',
  },
])
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <AppNavigation />
  <UContainer class="flex justify-between items-center">
  <NuxtImg src="/images/logo100x105.png" />
  <UNavigationMenu :items="items" class="w-full justify-center" />
</UContainer>
</div>
</template>
