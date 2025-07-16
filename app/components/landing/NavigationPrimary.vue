<template>
  <div class="section-b">
    <UContainer class="section-lr bg-white">
      <UHeader
        :toggle="{
          color: 'secondary',

          class: 'rounded-full',
        }"
        class="border-none"
      >
        <template #title>
          <div class="text-lg sm:text-2xl">
            dire <span class="text-orange-800">est</span> un art
          </div>
        </template>

        <UNavigationMenu :items="navitems" class="-mx-2.5" />

        <template #right>
          <UButton
            label="Prendre un rendez-vous"
            to="#rdv"
            aria-label="rdv"
            class="font-bold rounded-full text-base sm:text-xl bg-orange-800 text-white hidden sm:block"
          />
        </template>

        <template #body>
          <UContainer>
            <UNavigationMenu
              :items="navitems"
              orientation="vertical"
              class="-mx-2.5"
              :ui="{
                link: 'font-bold text-base sm:text-xl',
              }"
            />
            <UButton
              label="Prendre un rendez-vous"
              to="#rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl bg-orange-800 text-white mt-5"
            />
          </UContainer>
        </template>
      </UHeader>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navitems = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Nathalie Pinot",
      to: "#nathalie-pinot",
    },
    {
      label: "Formations",
      to: "#formations",
    },

    {
      label: "Modalités",
      to: "#modalites",
    },
  ],
]);
</script>
