<template>
  <div class="section-b">
    <UPageHero
      class="section-b"
      :ui="{
        container: 'section-lr py-10 sm:py-16 lg:py-20 lg:py-50 waves-bg',
        title: 'max-w-4xl mx-auto',
        description: 'max-w-5xl text-lg/5 sm:text-xl/6 text-gray-900 sm:pt-10',
        headline: 'text-gray-900 font-bold',
      }"
    >
      <template #title>
        Aujourd'hui, <i class="text-orange-900">l'art de s'exprimer</i> est un
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
