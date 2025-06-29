<template>
  <UCard variant="subtle">
    <div class="profile-content">
      <p class="profile-text">{{ profile.content }}</p>
      <div class="profile-signature">
        <p>{{ profile.signature }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { ProfileCard } from '../../domains/catalogue/schemas/card.schema';

defineProps({
  profile: {
    type: Object as () => ProfileCard,
    required: true
  }
});
</script>

<style scoped>
.profile-content {
  padding: 1.5rem 0;
}

.profile-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.profile-signature {
  text-align: right;
  font-weight: 600;
  font-style: italic;
}
</style>
