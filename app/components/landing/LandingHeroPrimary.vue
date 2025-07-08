<template>
  <div class="section-b">
    <UPageHero
      class="section-b"
      :ui="{
        container: 'section-lr py-10 sm:py-16 lg:py-30 waves-bg',
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
        Nathalie Pinot vous propose de travailler la parole dans tous ses états
        avec la créativité comme moteur de recherche.<br />
        <strong>La parole est un outil</strong>, l'un des plus simples et l'un
        des plus complexes que nous ayons pour communiquer. <br />
        Provoquer <strong>votre éloquence</strong> dans la sphère publique,
        c'est conjuguer écoute, efficacité et éthique.
      </template>

      <template #footer>
        <UPageGrid class="lg:grid-cols-2">
          <UPageCard
            v-for="(card, index) in heroFormationCards"
            :key="index"
            v-bind="card"
            variant="outline"
            :to="`#${card.id}`"
            :ui="{
              footer: 'text-right text-xs absolute right-2 bottom-2',
              body: 'w-full',
              root: 'border-orange-800 px-10',
              container: 'py-6 sm:py-20',
            }"
            spotlight
            spotlight-color="primary"
          >
            <template #title>
              <div class="text-xs font-bold text-orange-800 pb-2">
                FORMATION

                <span class="text-xs">
                  {{
                    card.id == "formation-3-0"
                      ? "ACTEURS DU LIVRE"
                      : "COMMUNICATION"
                  }}
                </span>
              </div>
              <div class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900">
                {{ capitalize(card.title) }}
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
</template>

<script setup lang="ts">
import { computed } from "vue";
import { capitalize } from "@/shared/utils/string";
import type { FormationCard } from "@/domains/catalogue/schemas/card.schema";
const props = defineProps<{ formationCards: FormationCard[] }>();

const heroOrder = [
  "formation-3-2",
  "formation-3-3",
  "formation-3-0",
  "formation-3-1",
];

const heroFormationCards = computed(() =>
  props.formationCards
    .slice()
    .sort((a, b) => heroOrder.indexOf(a.id) - heroOrder.indexOf(b.id)),
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
