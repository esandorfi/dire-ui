<template>
  <div class="catalogue-page">
    <NavigationPrimary />
    <LandingHeroPrimary :formation-cards="formationCards" />

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
            <div>
              <h2 class="text-2xl font-bold mb-2">{{ formation.title }}</h2>
              <div class="mb-2 text-gray-700 text-justify">
                {{ formation.introduction }}
              </div>
            </div>
            <div>
              <div
                v-if="formation.objectifs && formation.objectifs.length"
                class="mb-2"
              >
                <strong>Objectifs :</strong>
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
                <strong>Programme :</strong>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationPrimary from "../components/landing/NavigationPrimary.vue";
import { onMounted } from "vue";
import { useCatalogue } from "../domains/catalogue/composables/useCatalogue";
import LandingHeroPrimary from "../components/landing/LandingHeroPrimary.vue";

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
</script>
