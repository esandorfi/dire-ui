<template>
  <div class="catalogue-page">
    <NavigationPrimary />
    <LandingHeroPrimary :formation-cards="formationCards" />

    <div class="section-b">
      <UContainer class="section-lr py-10 relative">
        <UPageLogos
          title="Trusted by the best front-end teams"
          :items="[
            'i-simple-icons-github',
            'i-simple-icons-discord',
            'i-simple-icons-x',
            'i-simple-icons-instagram',
            'i-simple-icons-linkedin',
            'i-simple-icons-facebook',
          ]"
        />
      </UContainer>
    </div>

    <div class="section-b">
      <UContainer class="section-lr p-20 relative" />
    </div>

    <div
      v-for="(formation, idx) in orderedFormationCards"
      :key="formation.id || idx"
    >
      <div class="section-b">
        <UContainer class="section-lr section-b-dashed py-10 relative">
          <div class="section-number">
            {{ String(idx + 1).padStart(2, "0") }}
          </div>
          <UPageGrid class="lg:grid-cols-2">
            <div class="p-5 sm:p-10">
              <div class="text-xs font-bold text-orange-800 pb-2">
                FORMATION

                <span class="text-xs">
                  {{
                    formation.id == "formation-3-0"
                      ? "ACTEURS DU LIVRE"
                      : "COMMUNICATION"
                  }}
                </span>
              </div>
              <div class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900">
                {{ capitalize(formation.title) }}
              </div>

              <div class="mb-2 mt-10 text-gray-700 text-justify sm:max-w-sm">
                {{ formation.introduction }}
              </div>

              <div class="sm:max-w-sm">
                <div class="mb-2 mt-10 text-gray-700 text-justify">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Durée:
                  </div>
                  <div class="text-gray-700">2 jours (14h) / 3 jours (21h)</div>
                </div>
                <div
                  v-if="formation.publicDescription || publicSectionContent"
                  class="mb-2"
                >
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Public :
                  </div>
                  <div class="text-gray-700">
                    {{ formation.publicDescription || publicSectionContent }}
                  </div>
                </div>

                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Conditions de participation :
                  </div>
                  <div class="text-gray-700">Aucun prérequis</div>
                </div>
                <div>
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Session :
                  </div>
                  <div class="text-gray-700">En intra entreprise.</div>
                </div>
                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Groupe :
                  </div>
                  <div class="text-gray-700">2 à 14 participants</div>
                </div>
              </div>
            </div>
            <div class="pt-5 sm:pt-10">
              <div
                v-if="formation.objectifs && formation.objectifs.length"
                class="mb-2"
              >
                <div class="text-xs font-bold text-orange-800 uppercase">
                  Objectifs :
                </div>
                <ul class="list-disc ml-6">
                  <li v-for="(obj, oidx) in formation.objectifs" :key="oidx">
                    {{ obj }}
                  </li>
                </ul>
              </div>

              <div
                v-if="
                  formation.programSections && formation.programSections.length
                "
                class="mb-2"
              >
                <div class="text-xs font-bold text-orange-800 uppercase">
                  Programme :
                </div>
                <div
                  v-for="(section, sidx) in formation.programSections"
                  :key="sidx"
                  class="mb-2"
                >
                  <div class="font-semibold">{{ section.title }}</div>
                  <ul class="list-decimal ml-6">
                    <li v-for="(item, iidx) in section.items" :key="iidx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </UPageGrid>
        </UContainer>
        <UContainer class="section-lr section-b py-10 pb-20 relative">
          <div
            class="flex gap-x-4 px-5 sm:px-10 justify-center w-full items-center"
          >
            <UButton
              label="Devis sur demande"
              to="#devis"
              aria-label="devis"
              class="font-bold rounded-full text-base sm:text-xl bg-gray-900 text-white"
            />
            <UButton
              label="Prendre un rendez-vous"
              to="/rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl bg-orange-800 text-white"
            />
          </div>
        </UContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationPrimary from "@/components/landing/NavigationPrimary.vue";
import { onMounted, watch } from "vue";
import { useCatalogue } from "@/domains/catalogue/composables/useCatalogue";
import LandingHeroPrimary from "@/components/landing/LandingHeroPrimary.vue";
import { capitalize } from "@/shared/utils/string";

// Use the catalogue composable
const { loadCatalogue, formationCards, detailsCard, getSectionContent } =
  useCatalogue();

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

const publicSectionContent = computed(() => {
  return getSectionContent(detailsCard.value, "public :");
});

watch(publicSectionContent, (val) => {
  console.log("publicSectionContent:", val);
});

watch(
  detailsCard,
  (val) => {
    console.log("detailsCard loaded:", val);
    if (val && Array.isArray(val.sections)) {
      console.log(
        "Sections:",
        val.sections.map((s) => s.title),
      );
    }
  },
  { immediate: true },
);
</script>
