<template>
  <UCard variant="subtle">
    <template #header>
      <h3>{{ details.title }}</h3>
    </template>
    <div class="details-content">
      <div v-for="(section, index) in details.sections" :key="`section-${index}`" class="details-section">
        <h4 class="section-title">{{ section.title }}</h4>
        <p class="section-content">{{ section.content }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { DetailsCard } from '../../domains/catalogue/schemas/card.schema';

defineProps({
  details: {
    type: Object as () => DetailsCard,
    required: true
  }
});
</script>

<style scoped>
.details-content {
  padding: 1rem 0;
}

.details-section {
  margin-bottom: 1.5rem;
}

.details-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.section-content {
  line-height: 1.6;
}
</style>
