import { ref, computed } from 'vue';
import { CatalogueSchema   } from '../schemas/catalogue.schema';
import type {Catalogue, Node} from '../schemas/catalogue.schema';

/**
 * Type definition for AST node type information
 */
export interface AstTypeInfo {
  type: string;
  path: string;
  parent?: string;
  level: number;
  hasChildren: boolean;
  childrenCount: number;
}

/**
 * Composable for extracting type information from the AST
 * This is a standalone utility that doesn't modify any existing services or data
 */
export default function useAstTypes() {
  // State
  const catalogue = ref<Catalogue | null>(null);
  const types = ref<AstTypeInfo[]>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);
  
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
      const validatedData = CatalogueSchema.parse(catalogueData);
      catalogue.value = validatedData;
      
      // Extract types after loading
      extractTypes();
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Failed to load catalogue data');
      console.error('Error loading catalogue data:', err);
    } finally {
      isLoading.value = false;
    }
  };
  
  /**
   * Extract all types from the AST with their position information
   */
  const extractTypes = () => {
    if (!catalogue.value) return;
    
    const result: AstTypeInfo[] = [];
    
    // Add document root
    result.push({
      type: 'document',
      path: '/',
      level: 0,
      hasChildren: !!catalogue.value.children?.length,
      childrenCount: catalogue.value.children?.length || 0
    });
    
    // Process all children recursively
    if (catalogue.value.children) {
      processNodes(catalogue.value.children, '/', 1, result);
    }
    
    types.value = result;
  };
  
  /**
   * Process nodes recursively to extract type information
   */
  const processNodes = (nodes: Node[], parentPath: string, level: number, result: AstTypeInfo[]) => {
    nodes.forEach((node, index) => {
      const path = `${parentPath}${node.type}[${index}]/`;
      
      // Add the node
      result.push({
        type: node.type,
        path,
        parent: parentPath,
        level,
        hasChildren: isNodeWithChildren(node),
        childrenCount: getChildrenCount(node)
      });
      
      // Process children if they exist
      if (node.type === 'formations_list' && Array.isArray(node.children)) {
        processNodes(node.children, path, level + 1, result);
      }
    });
  };
  
  /**
   * Check if a node has children
   */
  const isNodeWithChildren = (node: Node): boolean => {
    return node.type === 'formations_list' && Array.isArray(node.children) && node.children.length > 0;
  };
  
  /**
   * Get the count of children for a node
   */
  const getChildrenCount = (node: Node): number => {
    if (node.type === 'formations_list' && Array.isArray(node.children)) {
      return node.children.length;
    }
    return 0;
  };
  
  /**
   * Get types filtered by level
   */
  const getTypesByLevel = (level: number) => {
    return types.value.filter(t => t.level === level);
  };
  
  /**
   * Get types filtered by parent path
   */
  const getTypesByParent = (parentPath: string) => {
    return types.value.filter(t => t.parent === parentPath);
  };
  
  /**
   * Get all unique type names in the AST
   */
  const uniqueTypes = computed(() => {
    const typeSet = new Set<string>();
    types.value.forEach(t => typeSet.add(t.type));
    return Array.from(typeSet);
  });
  
  /**
   * Get count of each type in the AST
   */
  const typeCounts = computed(() => {
    const counts: Record<string, number> = {};
    types.value.forEach(t => {
      counts[t.type] = (counts[t.type] || 0) + 1;
    });
    return counts;
  });
  
  /**
   * Get the hierarchical structure of types
   */
  const typeHierarchy = computed(() => {
    const result: Record<string, string[]> = {};
    
    types.value.forEach(t => {
      if (t.parent) {
        const parentType = t.parent.split('/').filter(Boolean).pop();
        if (parentType) {
          if (!result[parentType]) {
            result[parentType] = [];
          }
          if (!result[parentType].includes(t.type)) {
            result[parentType].push(t.type);
          }
        }
      }
    });
    
    return result;
  });
  
  return {
    catalogue,
    types,
    isLoading,
    error,
    loadCatalogue,
    getTypesByLevel,
    getTypesByParent,
    uniqueTypes,
    typeCounts,
    typeHierarchy
  };
}
