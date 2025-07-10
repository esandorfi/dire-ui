<template>
  <div class="section-b">
    <UPageHero
      class="section-b"
      :ui="{
        container: 'section-lr py-10 sm:py-16 lg:py-20 lg:pt-30 xwaves-bg',
        title: 'max-w-5xl mx-auto',
        description: 'text-lg/5 sm:text-xl/6 text-gray-900',
        headline: 'text-gray-900 font-bold',
      }"
    >
      <template #title>
        Aujourd'hui, <i class="text-orange-800">l'art de s'exprimer</i> est un
        enjeu vital.
      </template>
      <template #description>
        <strong
          >Nathalie Pinot vous propose de travailler la parole dans tous ses
          états avec la créativité comme moteur de recherche.</strong
        >
      </template>
    </UPageHero>
  </div>
</template>
