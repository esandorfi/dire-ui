<template>
  <UCard variant="subtle">
    <div class="main-offer-content">
      <h2 class="main-offer-title">{{ mainOffer.title }}</h2>
      <div class="formations-count">
        <UBadge color="primary" size="lg">{{ mainOffer.formationsCount }}</UBadge>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { MainOfferCard } from '../../domains/catalogue/schemas/card.schema';

defineProps({
  mainOffer: {
    type: Object as () => MainOfferCard,
    required: true
  }
});
</script>

<style scoped>
.main-offer-content {
  padding: 1.5rem 0;
  text-align: center;
}

.main-offer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  color: #1e293b;
  text-transform: uppercase;
}

.formations-count {
  margin-top: 1rem;
}
</style>
