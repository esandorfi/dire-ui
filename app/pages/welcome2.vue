<script setup lang="ts">
import AppNavigation from '../components/landing/AppNavigation.vue'
import SpaceContainer from '../components/ui/SpaceContainer.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <AppNavigation />
    
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">SpaceContainer Example</h1>
      
      <SpaceContainer>
        <!-- A1: 1/3 width section -->
        <template #a1>
          <div class="bg-blue-200 p-4 h-32 rounded-lg flex items-center justify-center">
            <span class="font-bold">A1 (1/3 width)</span>
          </div>
        </template>
        
        <!-- B1: 2/3 width section -->
        <template #b1>
          <div class="bg-green-200 p-4 h-32 rounded-lg flex items-center justify-center">
            <span class="font-bold">B1 (2/3 width)</span>
          </div>
        </template>
        
        <!-- A2: 2/3 width section -->
        <template #a2>
          <div class="bg-purple-200 p-4 h-32 rounded-lg flex items-center justify-center">
            <span class="font-bold">A2 (2/3 width)</span>
          </div>
        </template>
        
        <!-- B2: 1/3 width section -->
        <template #b2>
          <div class="bg-yellow-200 p-4 h-32 rounded-lg flex items-center justify-center">
            <span class="font-bold">B2 (1/3 width)</span>
          </div>
        </template>
      </SpaceContainer>
    </div>
  </div>
</template>
