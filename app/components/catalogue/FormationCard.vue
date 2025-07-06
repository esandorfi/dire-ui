<template>
  <CardBase :title="formation.title" type="formation">
    <div class="formation-content">
      <UBadge color="primary" class="formation-category">{{
        formation.category
      }}</UBadge>

      <p class="formation-introduction">{{ formation.introduction }}</p>

      <div class="formation-objectifs">
        <h4>{{ "OBJECTIFS" }}</h4>
        <ul>
          <li
            v-for="(objectif, index) in formation.objectifs"
            :key="`objectif-${index}`"
          >
            {{ objectif }}
          </li>
        </ul>
      </div>

      <div class="formation-programme">
        <h4>{{ "PROGRAMME" }}</h4>
        <div
          v-for="(section, sIndex) in formation.programSections"
          :key="`section-${sIndex}`"
          class="programme-section"
        >
          <h5>{{ section.title }}</h5>
          <ul>
            <li
              v-for="(item, iIndex) in section.items"
              :key="`item-${sIndex}-${iIndex}`"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="formation.publicDescription" class="formation-public">
        <h4>{{ "PUBLIC" }}</h4>
        <p>{{ formation.publicDescription }}</p>
      </div>
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import type { FormationCard } from "../../domains/catalogue/schemas/card.schema";
import CardBase from "./ui/CardBase.vue";

defineProps({
  formation: {
    type: Object as () => FormationCard,
    required: true,
  },
});
</script>

<style scoped>
.formation-content {
  padding: 1rem 0;
}

.formation-category {
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.formation-introduction {
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.formation-objectifs,
.formation-programme,
.formation-public {
  margin-bottom: 1.5rem;
}

.formation-objectifs h4,
.formation-programme h4,
.formation-public h4 {
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1e293b;
}

.programme-section {
  margin-bottom: 1rem;
}

.programme-section h5 {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #334155;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
</style>
