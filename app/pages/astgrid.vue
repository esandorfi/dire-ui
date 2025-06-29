<template>
  <div class="grid-page p-4">
    <UContainer>
      <h1 class="text-2xl font-bold mb-6">AST Type Grid</h1>
      
      <div v-if="isLoading" class="loading-state">
        <p>Loading AST types...</p>
      </div>
      
      <div v-else-if="error" class="error-state">
        <UAlert type="danger" title="Error loading AST types" :description="error.message" />
      </div>
      
      <div v-else class="grid-container">
        <!-- Type counts summary -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Type Counts</h2>
          <UCard>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div v-for="(count, type) in typeCounts" :key="type" class="type-count-item">
                <UBadge size="lg" color="primary">
                  {{ type }}: {{ count }}
                </UBadge>
              </div>
            </div>
          </UCard>
        </div>
        
        <!-- Type hierarchy -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Type Hierarchy</h2>
          <UCard>
            <div class="hierarchy-list">
              <div v-for="(children, parent) in typeHierarchy" :key="parent" class="hierarchy-item mb-4">
                <h3 class="font-medium text-lg">{{ parent }}</h3>
                <div class="flex flex-wrap gap-2 mt-2">
                  <UBadge v-for="child in children" :key="child" color="primary">
                    {{ child }}
                  </UBadge>
                </div>
              </div>
            </div>
          </UCard>
        </div>
        
        <!-- All types by level -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Types By Level</h2>
          <div v-for="level in maxLevel" :key="`level-${level}`" class="mb-6">
            <h3 class="font-medium text-lg mb-2">Level {{ level }}</h3>
            <UCard>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="typeInfo in getTypesByLevel(level)" :key="typeInfo.path" class="type-info-item p-2 border rounded">
                  <div class="flex justify-between items-center">
                    <UBadge color="primary">{{ typeInfo.type }}</UBadge>
                    <span v-if="typeInfo.hasChildren" class="text-sm text-gray-500">
                      {{ typeInfo.childrenCount }} children
                    </span>
                  </div>
                  <div class="text-xs text-gray-500 mt-1 truncate" :title="typeInfo.path">
                    Path: {{ typeInfo.path }}
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
// Import the function directly without destructuring and also import the AstTypeInfo type
import useAstTypes, { type AstTypeInfo } from '../domains/catalogue/composables/useAstTypes';

// Use the AST types composable
const { 
  types, 
  isLoading, 
  error, 
  loadCatalogue, 
  getTypesByLevel,
  typeCounts,
  typeHierarchy
} = useAstTypes();

// Load catalogue data when component mounts
onMounted(() => {
  loadCatalogue();
});

// Calculate the maximum level in the types
const maxLevel = computed(() => {
  if (types.value.length === 0) return 0;
  return Math.max(...types.value.map((t: AstTypeInfo) => t.level));
});

// We'll use fixed colors for badges since UBadge has specific color types
// This function is removed as we're using fixed colors instead
</script>

<style scoped>
.grid-page {
  min-height: 100vh;
  background-color: #f9fafb;
}

.type-info-item:hover {
  background-color: #f3f4f6;
}
</style>
