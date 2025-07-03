<script setup lang="ts">
defineProps({
  // Optional props to customize the component
  gap: {
    type: String,
    default: '4'
  },
  // Optional custom classes for each section
  a1Classes: {
    type: String,
    default: ''
  },
  b1Classes: {
    type: String,
    default: ''
  },
  a2Classes: {
    type: String,
    default: ''
  },
  b2Classes: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="w-full flex flex-col" :class="`gap-${gap}`">
    <!-- First row: A1 (1/3) and B1 (2/3) -->
    <div class="w-full flex flex-row" :class="`gap-${gap}`">
      <div class="w-1/3" :class="a1Classes">
        <slot name="a1">
          <!-- A1 content goes here -->
        </slot>
      </div>
      <div class="w-2/3" :class="b1Classes">
        <slot name="b1">
          <!-- B1 content goes here -->
        </slot>
      </div>
    </div>
    
    <!-- Second row: A2 (2/3) and B2 (1/3) -->
    <div class="w-full flex flex-row" :class="`gap-${gap}`">
      <div class="w-2/3" :class="a2Classes">
        <slot name="a2">
          <!-- A2 content goes here -->
        </slot>
      </div>
      <div class="w-1/3" :class="b2Classes">
        <slot name="b2">
          <!-- B2 content goes here -->
        </slot>
      </div>
    </div>
  </div>
</template>
