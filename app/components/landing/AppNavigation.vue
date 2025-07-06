<template>
  <UContainer class="py-4 max-w-5xl">
    <!-- Main Navigation Container -->
    <div class="navigation-container flex items-center justify-between p-4">
      <!-- Logo Section -->
      <div class="flex-shrink-0 pl-7">
        <NuxtLink to="/#hero" class="block">
          <NuxtImg src="/images/logo76x80.png" />
        </NuxtLink>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center">
        <div>
          <NuxtLink
            to="/#process"
            class="nav-link text-gray-900 font-medium text-sm tracking-tight"
          >
            <span class="link-text">Méthode</span>
            <span class="link-text-hover">Méthode</span>
          </NuxtLink>

          <NuxtLink
            to="/#projects"
            class="nav-link text-gray-900 font-medium text-sm tracking-tight"
          >
            <span class="link-text">Formations</span>
            <span class="link-text-hover">Formations</span>
          </NuxtLink>

          <NuxtLink
            to="/#offer"
            class="nav-link text-gray-900 font-medium text-sm tracking-tight"
          >
            <span class="link-text">Offre</span>
            <span class="link-text-hover">Offre</span>
          </NuxtLink>
        </div>
      </nav>

      <!-- CTA Buttons -->
      <div class="flex items-center space-x-4">
        <NuxtLink to="/#offer">
          <UBadge
            size="xl"
            color="primary"
            variant="solid"
            class="hidden sm:flex font-bold text-xs uppercase tracking-wide rounded-full p-3 bg-black"
          >
            Prendre un rendez-vous
          </UBadge>
        </NuxtLink>

        <!-- WhatsApp Button -->
        <UButton
          to="https://wa.me/33623390410?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous."
          external
          target="_blank"
          variant="solid"
          color="green"
          size="sm"
          icon="i-simple-icons-whatsapp"
          class="rounded-full p-2"
          aria-label="Contact via WhatsApp"
        />

        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          color="gray"
          size="sm"
          icon="i-heroicons-bars-3"
          class="md:hidden"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMenuOpen" class="md:hidden mt-4 pt-4 border-t border-gray-200">
      <nav class="flex flex-col space-y-4">
        <NuxtLink
          to="/#process"
          class="text-gray-900 hover:text-gray-600 font-medium text-sm py-2"
          @click="isMenuOpen = false"
        >
          Méthode
        </NuxtLink>

        <NuxtLink
          to="/#projects"
          class="text-gray-900 hover:text-gray-600 font-medium text-sm py-2"
          @click="isMenuOpen = false"
        >
          Projets
        </NuxtLink>

        <NuxtLink
          to="/#offer"
          class="text-gray-900 hover:text-gray-600 font-medium text-sm py-2"
          @click="isMenuOpen = false"
        >
          Offre
        </NuxtLink>

        <UButton
          to="/#iclosed"
          variant="solid"
          color="black"
          size="sm"
          class="font-bold text-xs uppercase tracking-wide w-full"
          @click="isMenuOpen = false"
        >
          Prendre un rendez-vous
        </UButton>
      </nav>
    </div>
  </UContainer>
</template>

<script setup>
// Mobile menu state
const isMenuOpen = ref(false);

// Close mobile menu when route changes
watch(
  () => useRoute().path,
  () => {
    isMenuOpen.value = false;
  },
);
</script>

<style scoped>
/* Additional glassmorphism effect to match original design */
.navigation-container {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 50px;
  box-shadow:
    rgba(93, 94, 94, 0.1) 0px 0px 0px 1px,
    rgba(70, 71, 74, 0.03) 0px 1px 1px -0.5px,
    rgba(69, 70, 74, 0.04) 0px 2px 2px -1px,
    rgba(66, 68, 71, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(62, 64, 66, 0.03) 0px 10px 10px -5px,
    rgba(58, 59, 61, 0.03) 0px 24px 24px -8px;
}

/* Navigation link hover animation - desktop only */
@media (min-width: 768px) {
  .nav-link {
    position: relative;
    overflow: hidden;
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    text-align: center;
    margin: 0 8px;
  }

  /* Container for the animated text elements */
  .nav-link .link-text {
    display: block;
    position: relative;
    transform-origin: 50% 50% 0px;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Hover text that appears from top */
  .nav-link .link-text-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -150%);
    opacity: 0;
    transform-origin: 50% 50% 0px;
    transition:
      opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Hover animation - text moves down and fades out */
  .nav-link:hover .link-text {
    transform: translateY(100%);
    opacity: 0;
  }

  /* Hover animation - new text appears from top */
  .nav-link:hover .link-text-hover {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
