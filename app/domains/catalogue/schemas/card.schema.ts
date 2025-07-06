import { z } from "zod";

// Base card schema with common properties
const BaseCardSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string().optional(),
});

// Header card schema
export const HeaderCardSchema = BaseCardSchema.extend({
  type: z.literal("header"),
  quote: z.string(),
  author: z.string(),
});

// Philosophy card schema
export const PhilosophyCardSchema = BaseCardSchema.extend({
  type: z.literal("philosophy"),
  statements: z.array(z.string()),
});

// Main offer card schema
export const MainOfferCardSchema = BaseCardSchema.extend({
  type: z.literal("main_offer"),
  title: z.string(),
  formationsCount: z.string(),
});

// Formation card schema
export const FormationCardSchema = BaseCardSchema.extend({
  type: z.literal("formation"),
  category: z.string(),
  formationId: z.string(),
  title: z.string(),
  introduction: z.string(),
  objectifs: z.array(z.string()),
  programSections: z.array(
    z.object({
      title: z.string(),
      items: z.array(z.string()),
    }),
  ),
  publicDescription: z.string().optional(),
});

// Profile card schema
export const ProfileCardSchema = BaseCardSchema.extend({
  type: z.literal("profile"),
  content: z.string(),
  signature: z.string(),
});

// Details card schema
export const DetailsCardSchema = BaseCardSchema.extend({
  type: z.literal("details"),
  sections: z.array(
    z.object({
      title: z.string(),
      content: z.string(),
    }),
  ),
});

// Footer card schema
export const FooterCardSchema = BaseCardSchema.extend({
  type: z.literal("footer"),
  legalText: z.string(),
  website: z.string(),
  partners: z.array(z.string()).optional(),
  callToAction: z.string().optional(),
});

// Card type union
export const CardSchema = z.union([
  HeaderCardSchema,
  PhilosophyCardSchema,
  MainOfferCardSchema,
  FormationCardSchema,
  ProfileCardSchema,
  DetailsCardSchema,
  FooterCardSchema,
]);

// Card collection schema
export const CardCollectionSchema = z.array(CardSchema);

// Type exports
export type Card = z.infer<typeof CardSchema>;
export type HeaderCard = z.infer<typeof HeaderCardSchema>;
export type PhilosophyCard = z.infer<typeof PhilosophyCardSchema>;
export type MainOfferCard = z.infer<typeof MainOfferCardSchema>;
export type FormationCard = z.infer<typeof FormationCardSchema>;
export type ProfileCard = z.infer<typeof ProfileCardSchema>;
export type DetailsCard = z.infer<typeof DetailsCardSchema>;
export type FooterCard = z.infer<typeof FooterCardSchema>;
export type CardCollection = z.infer<typeof CardCollectionSchema>;
