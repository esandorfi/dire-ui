import { ref, computed } from 'vue';
import { CatalogueSchema  } from '../schemas/catalogue.schema';
import type {Catalogue} from '../schemas/catalogue.schema';
import type { CardCollection } from '../schemas/card.schema';
import { CardTransformerService } from '../services/card-transformer.service';

/**
 * Composable for managing catalogue data and transforming it into cards
 */
export function useCatalogue() {
  // State
  const catalogue = ref<Catalogue | null>(null);
  const cards = ref<CardCollection>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);
  
  // Card transformer service
  const cardTransformer = new CardTransformerService();
  
  /**
   * Load catalogue data from the dataset
   */
  const loadCatalogue = async () => {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Import the catalogue dataset
      const catalogueData = await import('../datasets/catalogue-ast.json');
      
      // Validate the data with Zod schema
      const parsedCatalogue = CatalogueSchema.parse(catalogueData);
      catalogue.value = parsedCatalogue;
      
      // Transform the catalogue into cards
      cards.value = cardTransformer.transformCatalogueToCards(parsedCatalogue);
    } catch (err) {
      console.error('Error loading catalogue:', err);
      error.value = err instanceof Error ? err : new Error('Unknown error loading catalogue');
    } finally {
      isLoading.value = false;
    }
  };
  
  /**
   * Get cards by type
   */
  const getCardsByType = (type: string) => {
    return computed(() => cards.value.filter(card => card.type === type));
  };
  
  /**
   * Get a card by ID
   */
  const getCardById = (id: string) => {
    return computed(() => cards.value.find(card => card.id === id) || null);
  };
  
  /**
   * Get formation cards
   */
  const formationCards = computed(() => 
    cards.value.filter(card => card.type === 'formation')
  );
  
  /**
   * Get header card
   */
  const headerCard = computed(() => 
    cards.value.find(card => card.type === 'header') || null
  );
  
  /**
   * Get philosophy card
   */
  const philosophyCard = computed(() => 
    cards.value.find(card => card.type === 'philosophy') || null
  );
  
  /**
   * Get main offer card
   */
  const mainOfferCard = computed(() => 
    cards.value.find(card => card.type === 'main_offer') || null
  );
  
  /**
   * Get profile card
   */
  const profileCard = computed(() => 
    cards.value.find(card => card.type === 'profile') || null
  );
  
  /**
   * Get details card
   */
  const detailsCard = computed(() => 
    cards.value.find(card => card.type === 'details') || null
  );
  
  /**
   * Get footer card
   */
  const footerCard = computed(() => 
    cards.value.find(card => card.type === 'footer') || null
  );
  
  return {
    // State
    catalogue,
    cards,
    isLoading,
    error,
    
    // Methods
    loadCatalogue,
    getCardsByType,
    getCardById,
    
    // Computed properties
    formationCards,
    headerCard,
    philosophyCard,
    mainOfferCard,
    profileCard,
    detailsCard,
    footerCard
  };
}
