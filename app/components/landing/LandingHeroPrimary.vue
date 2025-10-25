<template>
  <div class="section-b">
    <UPageHero
      class="section-b"
      :ui="{
        container: 'section-lr py-10 sm:py-16 lg:pb-16 lg:pt-25',
        title: ' mx-auto ',
        description: 'max-w-5xl text-lg/5 sm:text-xl/6 text-gray-900',
        headline: 'text-gray-900 font-bold',
      }"
    >
      <template #title>
        <p class="text-orange-500">LA CRÉATIVITÉ DANS LA PAROLE</p>
        <p class="pb-5">DES FORMATIONS SUR MESURE</p>
      </template>
      <template #description>
        <div class="rounded-full bg-white-500/40 sm:p-5 font-bold">
          <p class="pb-2">
            QUESTION :
            <span class="text-orange-500">QU'EST CE QUE LA CRÉATIVITÉ ?</span>
          </p>
          <p>
            RÉPONSE :
            <span class="text-orange-500"
              >LA RELATION ENTRE UN ÊTRE HUMAIN ET L'INSPIRATION</span
            >
          </p>
        </div>
      </template>
    </UPageHero>
  </div>
</template>
