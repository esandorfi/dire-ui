<template>
  <div class="catalogue-page">
    <div class="section-b">
      <UContainer class="section-lr">
        <UHeader
          :toggle="{
            color: 'primary',
            variant: 'subtle',
            class: 'rounded-full',
          }"
        >
          <template #title>
            <Logo class="h-6 w-auto" />
          </template>

          <UNavigationMenu :items="navitems" />

          <template #right>
            <UColorModeButton />

            <UButton
              color="neutral"
              label="Prendre un rendez-vous"
              variant="ghost"
              to="/rdv"
              aria-label="rdv"
            />
          </template>

          <template #body>
            <UNavigationMenu
              :items="navitems"
              orientation="vertical"
              class="-mx-2.5"
            />
          </template>
        </UHeader>
      </UContainer>
    </div>

    <UPageHero
      class="section-b"
      :ui="{ container: 'section-lr' }"
      title="Ultimate Vue UI library"
      description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
      headline="New release"
      :links="herolinks"
    />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navitems = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      to: "/getting-started",
    },
    {
      label: "Composables",
      icon: "i-lucide-database",
      to: "/composables",
    },
    {
      label: "Components",
      icon: "i-lucide-box",
      to: "/components",
      active: true,
    },
  ],
]);

const herolinks = ref([
  {
    label: "Get started",
    to: "/getting-started",
    icon: "i-lucide-square-play",
  },
  {
    label: "Learn more",
    to: "/getting-started/theme",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>
