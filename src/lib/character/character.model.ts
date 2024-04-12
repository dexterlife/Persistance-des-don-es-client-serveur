import { Characters } from "../../infrastructure/db/schema";
import { z } from "zod";

export const CharacterSchema = z.object({
  id: z.string(),
  xp: z.number(),
  name: z.string().min(2),
  classId: z.number(),
  playerId: z.number(),
});
export type Character = typeof Characters.$inferSelect;

export const CreateCharacterSchema = CharacterSchema.omit({ id: true });
export type CreateCharacter = z.infer<typeof CreateCharacterSchema>;
