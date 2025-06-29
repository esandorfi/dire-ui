<template>
  <div class="catalogue-page">
    <UContainer>
      <div v-if="isLoading" class="loading-state">
        <p>Chargement du catalogue...</p>
      </div>
      
      <div v-else-if="error" class="error-state">
        <UAlert type="danger" title="Erreur de chargement">
          {{ error.message }}
        </UAlert>
      </div>
      
      <template v-else>
        <!-- Header Section -->
        <section v-if="headerCard" class="section header-section">
          <HeaderCard :header="headerCard" />
        </section>
        
        <!-- Philosophy Section -->
        <section v-if="philosophyCard" class="section philosophy-section">
          <PhilosophyCard :philosophy="philosophyCard" />
        </section>
        
        <!-- Main Offer Section -->
        <section v-if="mainOfferCard" class="section main-offer-section">
          <MainOfferCard :main-offer="mainOfferCard" />
        </section>
        
        <!-- Formations Section -->
        <section class="section formations-section">
          <h2 class="section-title">Formations</h2>
          <div class="formations-grid">
            <FormationCard 
              v-for="formation in formationCards" 
              :key="formation.id" 
              :formation="formation" 
            />
          </div>
        </section>
        
        <!-- Profile Section -->
        <section v-if="profileCard" class="section profile-section">
          <ProfileCard :profile="profileCard" />
        </section>
        
        <!-- Details Section -->
        <section v-if="detailsCard" class="section details-section">
          <DetailsCard :details="detailsCard" />
        </section>
        
        <!-- Footer Section -->
        <section v-if="footerCard" class="section footer-section">
          <FooterCard :footer="footerCard" />
        </section>
      </template>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCatalogue } from '../domains/catalogue/composables/useCatalogue';
import HeaderCard from '../components/catalogue/HeaderCard.vue';
import PhilosophyCard from '../components/catalogue/PhilosophyCard.vue';
import MainOfferCard from '../components/catalogue/MainOfferCard.vue';
import FormationCard from '../components/catalogue/FormationCard.vue';
import ProfileCard from '../components/catalogue/ProfileCard.vue';
import DetailsCard from '../components/catalogue/DetailsCard.vue';
import FooterCard from '../components/catalogue/FooterCard.vue';

// Use the catalogue composable
const { 
  loadCatalogue, 
  isLoading, 
  error, 
  headerCard, 
  philosophyCard, 
  mainOfferCard, 
  formationCards, 
  profileCard, 
  detailsCard, 
  footerCard 
} = useCatalogue();

// Load catalogue data when the component is mounted
onMounted(() => {
  loadCatalogue();
});
</script>

<style scoped>
.catalogue-page {
  padding: 2rem 0;
}

.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
}

.loading-state p {
  margin-top: 1rem;
  color: #64748b;
}

.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1e293b;
  text-align: center;
}

.formations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .formations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
