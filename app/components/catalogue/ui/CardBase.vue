<template>
  <UCard :class="['card-base', `card-type-${type}`]" :ui="cardStyle">
    <slot name="header">
      <div v-if="title" class="card-header">
        <h3 class="card-title">{{ title }}</h3>
      </div>
    </slot>
    <slot/>
    <slot name="footer"/>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    required: true
  },
  cardStyle: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>
.card-base {
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease-in-out;
}

.card-base:hover {
  transform: translateY(-2px);
}

.card-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-type-header {
  background-color: #f8f9fa;
}

.card-type-philosophy {
  background-color: #f0f4f8;
}

.card-type-formation {
  background-color: #fff;
  border-left: 4px solid #3b82f6;
}

.card-type-profile {
  background-color: #f3f4f6;
}

.card-type-details {
  background-color: #f9fafb;
}

.card-type-footer {
  background-color: #1e293b;
  color: white;
}
</style>
