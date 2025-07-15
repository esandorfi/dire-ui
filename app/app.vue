<template>
  <UApp>
    <Analytics />
    <SpeedInsights />
    <NuxtPage />
  </UApp>
</template>
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
