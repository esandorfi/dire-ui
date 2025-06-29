import { z } from 'zod';
import { FormationSchema } from './formation.schema';

// Contact schema
const ContactSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
});

// Metadata schema
const MetadataSchema = z.object({
  author: z.string(),
  organization: z.string(),
  address: z.string(),
  siret: z.string(),
  ape: z.string(),
  organism_type: z.string(),
  formation_number: z.string(),
  website: z.string(),
  contact: ContactSchema,
});

// Header quote schema
const HeaderQuoteSchema = z.object({
  type: z.literal('header_quote'),
  content: z.object({
    quote: z.string(),
    author: z.string(),
  }),
});

// Philosophy statement schema
const PhilosophyStatementSchema = z.object({
  type: z.literal('philosophy_statement'),
  content: z.array(z.string()),
});

// Main offer schema
const MainOfferSchema = z.object({
  type: z.literal('main_offer'),
  title: z.string(),
  formations_count: z.string(),
});

// Formations list schema
const FormationsListSchema = z.object({
  type: z.literal('formations_list'),
  children: z.array(FormationSchema),
});

// Author profile schema
const AuthorProfileSchema = z.object({
  type: z.literal('author_profile'),
  content: z.string(),
  signature: z.string(),
});

// Formation details missing schema
const FormationDetailsMissingSchema = z.object({
  type: z.literal('formation_details_missing'),
  note: z.string(),
});

// Pedagogie section schema
const PedagogieSectionSchema = z.object({
  type: z.literal('pedagogie_section'),
  title: z.string(),
  content: z.string(),
});

// Modalites formations schema
const ModalitesFormationsSchema = z.object({
  type: z.literal('modalites_formations'),
  title: z.string(),
  details: z.object({
    public: z.object({
      title: z.string(),
      content: z.string(),
    }),
    pedagogie: z.object({
      title: z.string(),
      content: z.string(),
    }),
    groupe: z.object({
      title: z.string(),
      content: z.string(),
    }),
    duree: z.object({
      title: z.string(),
      content: z.string(),
    }),
    session: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

// Footer info schema
const FooterInfoSchema = z.object({
  type: z.literal('footer_info'),
  content: z.object({
    legal_footer: z.string(),
    website: z.string(),
  }),
});

// Partners logos schema
const PartnersLogosSchema = z.object({
  type: z.literal('partners_logos'),
  partners: z.array(z.string()),
});

// Call to action schema
const CallToActionSchema = z.object({
  type: z.literal('call_to_action'),
  content: z.string(),
});

// Node type union
const NodeSchema = z.union([
  HeaderQuoteSchema,
  PhilosophyStatementSchema,
  MainOfferSchema,
  FormationsListSchema,
  AuthorProfileSchema,
  FormationDetailsMissingSchema,
  PedagogieSectionSchema,
  ModalitesFormationsSchema,
  FooterInfoSchema,
  PartnersLogosSchema,
  CallToActionSchema,
]);

// Main catalogue schema
export const CatalogueSchema = z.object({
  type: z.literal('document'),
  title: z.string(),
  metadata: MetadataSchema,
  children: z.array(NodeSchema),
});

export type Catalogue = z.infer<typeof CatalogueSchema>;
export type Node = z.infer<typeof NodeSchema>;
export type HeaderQuote = z.infer<typeof HeaderQuoteSchema>;
export type PhilosophyStatement = z.infer<typeof PhilosophyStatementSchema>;
export type MainOffer = z.infer<typeof MainOfferSchema>;
export type FormationsList = z.infer<typeof FormationsListSchema>;
export type AuthorProfile = z.infer<typeof AuthorProfileSchema>;
export type FormationDetailsMissing = z.infer<typeof FormationDetailsMissingSchema>;
export type PedagogieSection = z.infer<typeof PedagogieSectionSchema>;
export type ModalitesFormations = z.infer<typeof ModalitesFormationsSchema>;
export type FooterInfo = z.infer<typeof FooterInfoSchema>;
export type PartnersLogos = z.infer<typeof PartnersLogosSchema>;
export type CallToAction = z.infer<typeof CallToActionSchema>;
