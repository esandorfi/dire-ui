<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">Nuxt UI - Starter</h1>

    <div class="flex items-center gap-2">
      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui.nuxt.com/getting-started/installation/nuxt"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />

      <UButton
        label="Catalogue"
        color="neutral"
        variant="outline"
        icon="i-lucide-book-open"
        to="/catalogue"
      />

      <UButton
        label="Catalogue2"
        color="neutral"
        variant="outline"
        icon="i-lucide-book-open"
        to="/catalogue2"
      />

      <UButton
        label="AST Grid"
        color="neutral"
        variant="outline"
        icon="i-lucide-grid"
        to="/astgrid"
      />
      <UButton
        label="Welcome"
        color="neutral"
        variant="outline"
        icon="i-lucide-warehouse"
        to="/welcome"
      />
      <UButton
        label="Welcome2"
        color="neutral"
        variant="outline"
        icon="i-lucide-warehouse"
        to="/welcome2"
      />
    </div>
  </div>
</template>
