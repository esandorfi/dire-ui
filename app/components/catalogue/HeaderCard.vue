<template>
  <UCard variant="subtle">
    <div class="header-content">
      <blockquote class="header-quote">
        <p>{{ header.quote }}</p>
        <footer>
          <cite>{{ header.author }}</cite>
        </footer>
      </blockquote>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { HeaderCard } from '../../domains/catalogue/schemas/card.schema';

defineProps({
  header: {
    type: Object as () => HeaderCard,
    required: true
  }
});
</script>

<style scoped>
.header-content {
  padding: 1.5rem 0;
}

.header-quote {
  font-style: italic;
  position: relative;
  padding: 1rem 2rem;
  border-left: 4px solid #3b82f6;
}

.header-quote p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.header-quote footer {
  text-align: right;
  font-size: 1rem;
}

.header-quote cite {
  font-style: normal;
  font-weight: 600;
}
</style>
