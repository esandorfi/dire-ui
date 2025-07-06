<template>
  <CardBase type="philosophy">
    <div class="philosophy-content">
      <div class="philosophy-statements">
        <p
          v-for="(statement, index) in philosophy.statements"
          :key="`statement-${index}`"
          class="statement"
        >
          {{ statement }}
        </p>
      </div>
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import type { PhilosophyCard } from "../../domains/catalogue/schemas/card.schema";
import CardBase from "./ui/CardBase.vue";

defineProps({
  philosophy: {
    type: Object as () => PhilosophyCard,
    required: true,
  },
});
</script>

<style scoped>
.philosophy-content {
  padding: 1.5rem 0;
}

.philosophy-statements {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.statement {
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
}

.statement::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #3b82f6;
  border-radius: 50%;
}
</style>
