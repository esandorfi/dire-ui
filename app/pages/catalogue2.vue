<template>
  <div class="catalogue-page">
    <MainHeader />
    <div class="section-b">
      <UPageHero
        class="section-b"
        :ui="{
          container: 'section-lr py-10 sm:py-16 lg:py-30 waves-bg',
          title: 'max-w-5xl mx-auto',
          description: 'sm:text-xl/6',
          headline: 'text-gray-900 font-bold',
        }"
      >
        <template #title>
          Aujourd'hui, <i class="text-orange-800">l'art de s'exprimer</i> est un
          enjeu vital.
        </template>
        <template #description>
          Nathalie Pinot vous propose de travailler la parole dans tous ses
          états avec la créativité comme moteur de recherche.<br />
          <strong>La parole est un outil</strong>, l'un des plus simples et l'un
          des plus complexes que nous ayons pour communiquer. <br />
          Provoquer <strong>votre éloquence</strong> dans la sphère publique,
          c'est conjuguer écoute, efficacité et éthique.
        </template>

        <template #footer>
          <UPageGrid class="lg:grid-cols-4">
            <UPageCard
              v-for="(card, index) in formationCards"
              :key="index"
              v-bind="card"
              variant="outline"
              :to="`#${card.id}`"
              :ui="{ footer: 'text-right text-xs absolute right-2 bottom-2' }"
            >
              <template #title>
                <div class="text-xs font-bold text-orange-800 pb-2">
                  FORMATION

                  <div class="text-xs">
                    {{
                      card.id == "formation-3-0"
                        ? "ACTEURS DU LIVRE"
                        : "COMMUNICATION"
                    }}
                  </div>
                </div>
                <div class="text-2xl/6 font-bold text-gray-600">
                  {{ card.title }}
                </div>
              </template>
              <template #footer>
                {{ getNumber(card.id) }}
              </template>
            </UPageCard>
          </UPageGrid>
        </template>
      </UPageHero>
    </div>

    <div class="section-b">
      <UContainer class="section-lr section-b-dashed py-10 relative">
        <div class="section-number">01</div>
        <UPageFeature
          :ui="{ title: 'text-xl sm:text-2xl', description: 'text-base/6' }"
        >
          <template #title> Nos formations </template>
          <template #description>
            Elles sont ouvertes à toute personne souhaitant mieux communiquer
            dans la sphère professionnelle; "Le livre en scène" est ouvert à
            tous les acteurs du livre.
          </template>
        </UPageFeature>
        <div class="pt-10" />
        <UPageCard
          v-for="(card, index) in orderedFormationCards"
          :key="index"
          orientation="horizontal"
          :ui="{ root: 'px-0 mb-3', title: 'font-black text-xl sm:text-4xl' }"
          v-bind="card"
        >
          <template #title>
            {{ card.title }}
          </template>

          <template #description>
            <div class="text-justify text-base/5">{{ card.introduction }}</div>
          </template>
        </UPageCard>
      </UContainer>

      <UContainer class="section-lr">
        <UPageFeature
          :ui="{ title: 'text-xl sm:text-2xl', description: 'text-base/6' }"
        >
          <template #title> Nos formations </template>
          <template #description>
            Elles sont ouvertes à toute personne souhaitant mieux communiquer
            dans la sphère professionnelle; "Le livre en scène" est ouvert à
            tous les acteurs du livre.
          </template>
        </UPageFeature>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "../components/landing/MainHeader.vue";
import { onMounted } from "vue";
import { useCatalogue } from "../domains/catalogue/composables/useCatalogue";

// Use the catalogue composable
const { loadCatalogue, formationCards } = useCatalogue();

onMounted(() => {
  loadCatalogue();
});

const desiredOrder = [
  "formation-3-2",
  "formation-3-3",
  "formation-3-1",
  "formation-3-0",
];

const orderedFormationCards = computed(() =>
  formationCards.value
    .slice()
    .sort((a, b) => desiredOrder.indexOf(a.id) - desiredOrder.indexOf(b.id)),
);

// Example: get a specific card by ID (if needed)
// const someCard = getCardById('your-card-id');

function getNumber(id: string): string {
  const last = id.split("-").pop();
  const num = Number(last);
  if (isNaN(num)) return "";
  return String(num + 1).padStart(2, "0");
}
</script>
