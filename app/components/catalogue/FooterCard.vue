<template>
  <CardBase type="footer">
    <div class="footer-content">
      <div class="legal-text">
        <p>{{ footer.legalText }}</p>
      </div>
      
      <div class="website">
        <p>{{ footer.website }}</p>
      </div>
      
      <div v-if="footer.partners && footer.partners.length" class="partners">
        <h4>Partenaires</h4>
        <div class="partners-list">
          <span v-for="(partner, index) in footer.partners" :key="`partner-${index}`" class="partner">
            {{ partner }}
          </span>
        </div>
      </div>
      
      <div v-if="footer.callToAction" class="call-to-action">
        <button class="btn btn-lg btn-primary">{{ footer.callToAction }}</button>
      </div>
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import type { FooterCard } from '../../domains/catalogue/schemas/card.schema';
import CardBase from './ui/CardBase.vue';

defineProps({
  footer: {
    type: Object as () => FooterCard,
    required: true
  }
});
</script>

<style scoped>
.footer-content {
  padding: 1.5rem 0;
}

.legal-text {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.website {
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.partners {
  margin-bottom: 1.5rem;
}

.partners h4 {
  color: #f8fafc;
  margin-bottom: 0.75rem;
}

.partners-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.partner {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.call-to-action {
  margin-top: 1.5rem;
  text-align: center;
}
</style>
