import { z } from 'zod';

// Section schema for formation programme
const ProgrammeSectionSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

// Objectifs schema
const ObjectifsSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

// Programme schema
const ProgrammeSchema = z.object({
  title: z.string(),
  sections: z.array(ProgrammeSectionSchema),
});

// Public schema
const PublicSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

// Formation schema
export const FormationSchema = z.object({
  type: z.literal('formation'),
  category: z.string(),
  id: z.string(),
  title: z.string(),
  introduction: z.string(),
  objectifs: ObjectifsSchema,
  programme: ProgrammeSchema,
  public: PublicSchema.optional(),
});

export type Formation = z.infer<typeof FormationSchema>;
export type ProgrammeSection = z.infer<typeof ProgrammeSectionSchema>;
export type Objectifs = z.infer<typeof ObjectifsSchema>;
export type Programme = z.infer<typeof ProgrammeSchema>;
export type Public = z.infer<typeof PublicSchema>;
