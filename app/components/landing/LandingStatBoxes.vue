<template>
  <ul class="flex flex-row h-full w-full justify-between">
    <li
      v-for="(stat, idx) in stats"
      :key="idx"
      :class="[
        'flex-1 flex flex-col items-center py-10',
        idx < stats.length - 1 ? 'section-r' : '',
      ]"
    >
      <span class="text-4xl text-gray-600 font-bold mb-1">{{
        stat.value
      }}</span>
      <span class="text-lg text-gray-500 font-bold">{{ stat.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface StatBox {
  value: string;
  label: string;
}

defineProps<{ stats: StatBox[] }>();
</script>
