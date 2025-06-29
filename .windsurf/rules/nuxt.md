---
trigger: always_on
---

# Windsurf Rules for Nuxt Clean Architecture

## Project Structure Rules

### Domain Organization
- Each business domain (user, product, order) must be in its own folder under `app/domains/`
- Domain folders must contain exactly these subfolders: `datasets/`, `schemas/`, `services/`, `composables/`
- Never mix domains - user logic stays in user folder, product logic in product folder
- Domain names should be singular (user, product, order) not plural

### Dataset Layer Rules (`domains/*/datasets/`)
- Store static data files used by services: JSON, CSV, YAML files
- Datasets are domain-specific and should not be shared across domains
- Files should be read-only reference data, not user-generated content
- Common dataset types: configurations, lookup tables, seed data, feature flags
- Datasets should be validated against schemas when loaded
- Never expose datasets through public API endpoints
- Datasets are packaged with the application but not publicly accessible
- Use for: user roles, product categories, pricing tables, shipping rates, etc.

### Schema Layer Rules (`domains/*/schemas/`)
- All data structures must be defined using Zod schemas
- Schemas define validation rules and TypeScript types
- Use `.parse()` for runtime validation, `.safeParse()` for error handling
- Repository files handle data access (API calls, local storage, etc.)
- Repository methods must validate data using schemas before returning
- One main schema per domain entity (user.schema.ts, product.schema.ts)
- Export both schema and inferred TypeScript type: `export const UserSchema = z.object({...}); export type User = z.infer<typeof UserSchema>`

### Services Layer Rules (`domains/*/services/`)
- Services contain all business logic for the domain
- Services can read from datasets folder for reference data
- Services should use repositories and schemas for data validation
- Services should validate business rules using Zod schemas
- Services should be pure TypeScript classes or functions
- Services should not know about Vue/Nuxt (no refs, reactive, etc.)
- One main service per domain, additional services for specific concerns
- Always validate input data with schemas before processing
- Load and cache dataset files as needed for business logic

### Composables Layer Rules (`domains/*/composables/`)
- One main composable per domain (useUser, useProduct, useOrder)
- Composables are the ONLY way pages can access domain logic
- Composables should use Vue reactivity (ref, reactive, computed)
- Composables should call services, not repositories directly
- Composables should handle loading states, errors, and UI concerns
- Composables should not contain business logic

## Page Rules (`app/pages/`)
- Pages should only orchestrate between domains via composables
- Pages should not contain business logic
- Pages should not call services directly
- Pages should not call repositories directly
- Pages should not make API calls directly
- Pages pass data to components via props
- Pages should be focused on user experience flow

## Component Rules (`app/components/`)
- Components should be organized by domain (user/, product/, order/)
- Components should be pure UI - no business logic
- Components should receive all data via props
- Components should emit events to parent, not call services
- Components should not use domain composables directly
- UI components (button, input) go in `ui/` folder

## Shared Rules (`app/shared/`)
- Only put truly shared utilities here
- No domain-specific logic in shared
- API clients, common types, utilities only
- Shared code should not depend on any domain

## Import Rules
- Pages can only import from: composables, components, shared, schemas
- Components can only import from: other components, shared, schemas
- Composables can only import from: services, shared, schemas
- Services can only import from: datasets, schemas (for validation), shared
- Repositories can only import from: schemas, shared
- Tests can import from: datasets, schemas, services, shared
- Never import across domains (user service cannot import product service)
- Always import and use Zod schemas for data validation
- Datasets are only accessible to services and tests within the same domain

## File Naming Rules
- Use kebab-case for files: `user-profile.vue`, `product-service.ts`
- Use PascalCase for Vue components: `UserProfile.vue`
- Use camelCase for TypeScript files: `userService.ts`
- Repository files end with `.repository.ts`
- Service files end with `.service.ts`
- Schema files end with `.schema.ts`
- Composable files start with `use`: `useUser.ts`
- Dataset files use descriptive names: `user-roles.json`, `pricing-tiers.csv`

## Code Organization Rules
- Each domain should be independent - no cross-domain imports
- If two domains need to communicate, use events or shared services
- Keep business logic in services, not in composables or pages
- Keep UI logic in composables, not in services
- Models should be simple data structures
- Services should be testable without Vue/Nuxt
- Always use Zod for data validation and TypeScript type generation
- Validate data at boundaries: API responses, form submissions, external data

## Forbidden Patterns
- Never import from another domain folder
- Never put business logic in pages or components
- Never call repositories from pages or components
- Never put Vue reactivity in services
- Never put business logic in composables
- Never mix UI and business concerns
- Never create circular dependencies between domains
- Never skip data validation with Zod schemas
- Never use raw TypeScript interfaces for data structures
- Never expose dataset files through public API endpoints
- Never share datasets across domains - keep them domain-specific

## Code Philosophy & Standards

### Clean & Simple Functions
- Write small, focused functions that do one thing well
- Use descriptive, self-documenting function names
- Keep functions under 20 lines when possible
- Prefer pure functions without side effects
- Use consistent parameter ordering across similar functions

### Naming Consistency & Efficiency
- Use verbs for functions: `createUser()`, `validateEmail()`, `fetchProducts()`
- Use nouns for data: `userProfile`, `productList`, `orderStatus`
- Be consistent across domains: if user has `createUser()`, product should have `createProduct()`
- Use business terminology, not technical jargon: `placeOrder()` not `insertOrderRecord()`
- Avoid abbreviations: `userRepository` not `userRepo`

### Business Logic Alignment
- Function names should match business processes
- Structure code to mirror business workflows
- Use domain language that stakeholders understand
- Group related business operations together
- Make business rules explicit and testable

### UI Component Priority
- Always use Nuxt UI components first: `<UButton>`, `<UInput>`, `<UCard>`, etc.
- Only use Tailwind CSS for custom styling not covered by Nuxt UI
- Maintain Nuxt UI design system consistency
- Create custom components only when Nuxt UI lacks functionality
- Follow Nuxt UI theming and configuration patterns

### Vue 3 State of the Art
- Use Composition API exclusively, no Options API
- Use `<script setup>` syntax in all Vue components
- Leverage `defineProps()`, `defineEmits()`, `defineExpose()`
- Use `ref()` for primitives, `reactive()` for objects
- Prefer `computed()` over methods for derived data
- Use `watch()` and `watchEffect()` appropriately
- Utilize `provide/inject` for dependency injection
- Use `defineModel()` for v-model components
- Leverage `useLazyFetch()`, `useFetch()` for data fetching
- Use TypeScript with `<script setup lang="ts">`

### Testing Philosophy with Vitest
- Use Vitest as the primary testing framework
- Create tests only when explicitly requested - no automatic test generation
- Write tests that serve as documentation for humans
- Focus on testing the most important business features and use cases
- Avoid comprehensive edge case testing - prefer 1-2 meaningful tests per feature
- Test names should explain the business scenario being tested
- Tests should be readable and help understand the code's purpose
- Prioritize testing critical business logic in services over UI components
- Use tests to validate the most important user journeys
- Keep tests simple and focused on core functionality

## Recommended Patterns
- Use dependency injection for services in composables
- Use TypeScript interfaces for contracts between layers
- Use error handling in services and surface to composables
- Use loading states in composables for better UX
- Use computed properties in composables for derived data
- Use events for cross-domain communication when needed
- Follow business-driven development: code should read like business requirements
- Maintain consistency in naming across all domains and layers
- Prioritize readability and maintainability over cleverness