<script setup lang="ts">
defineProps({
  // Optional props to customize the component
  gap: {
    type: [String, Number],
    default: 4,
  },
  line1: {
    type: String,
    default: "h-[500px] md:h-[400px] sm:h-[300px]",
  },
  line2: {
    type: String,
    default: "",
  },
  // Optional custom classes for each section
  a1: {
    type: String,
    default: "",
  },
  b1: {
    type: String,
    default: "",
  },
  a2: {
    type: String,
    default: "",
  },
  b2: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full flex flex-col" :class="`gap-${gap}`">
    <!-- First row: A1 (1/3) and B1 (2/3) -->
    <div class="w-full flex flex-row" :class="[`gap-${gap}`, line1]">
      <div class="w-1/3" :class="a1">
        <slot name="a1">
          <!-- A1 content goes here -->
        </slot>
      </div>
      <div class="w-2/3" :class="b1">
        <slot name="b1">
          <!-- B1 content goes here -->
        </slot>
      </div>
    </div>

    <!-- Second row: A2 (2/3) and B2 (1/3) -->
    <div class="w-full flex flex-row" :class="[`gap-${gap}`, line2]">
      <div class="w-2/3" :class="a2">
        <slot name="a2">
          <!-- A2 content goes here -->
        </slot>
      </div>
      <div class="w-1/3" :class="b2">
        <slot name="b2">
          <!-- B2 content goes here -->
        </slot>
      </div>
    </div>
  </div>
</template>
