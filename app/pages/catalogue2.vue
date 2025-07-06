<template>
  <div class="catalogue-page">
    <div class="section-b">
      <UContainer class="section-lr">
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
              color="secondary"
              label="Prendre un rendez-vous"
              to="/rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl"
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
      :ui="{
        container: 'section-lr py-10 sm:py-16 lg:py-30 waves-bg',
        title: 'max-w-5xl mx-auto',
        description: 'sm:text-xl/6',
        headline: 'text-gray-900 font-bold',
      }"
    >
      <template #headline> LES 4 FORMATIONS </template>
      <template #title>
        Aujourd'hui, <i class="text-orange-800">l'art de s'exprimer</i> est un
        enjeu vital.
      </template>
      <template #description>
        Nathalie Pinot vous propose de travailler la parole dans tous ses états
        avec la créativité comme moteur de recherche. La parole est un outil,
        l'un des plus simples et l'un des plus complexes que nous ayons pour
        communiquer.
      </template>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navitems = ref<NavigationMenuItem[][]>([
  [
    {
      icon: "i-lucide-square-play",
      label: "Méthode",
      to: "/components",
    },
    {
      label: "Formations",
      to: "/getting-started",
    },
    {
      label: "Offre",
      to: "/composables",
    },
  ],
]);
</script>
