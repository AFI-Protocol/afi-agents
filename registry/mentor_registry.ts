// registry/mentor_registry.ts

// Agent metadata includes unique ID and topic tags
export type AgentMeta = {
  id: string;
  tags: string[];
};

// Mentor metadata includes unique ID, archetype label, and domain expertise
export type MentorMeta = {
  id: string;
  archetype: string;
  expertise: string[];
};

// Runtime storage (in-memory only)
const mentors: MentorMeta[] = [];
const pairings: Record<string, MentorMeta> = {};

/**
 * Registers a new mentor into the in-memory registry.
 */
export function registerMentor(meta: MentorMeta): void {
  mentors.push(meta);
}

/**
 * Attempts to pair an agent with a mentor based on overlapping expertise.
 * Caches the result for faster future lookups.
 */
export function pairMentor(agent: AgentMeta): MentorMeta | null {
  if (pairings[agent.id]) return pairings[agent.id];

  const match = mentors.find((mentor) =>
    mentor.expertise.some((domain) => agent.tags.includes(domain))
  );

  if (match) pairings[agent.id] = match;
  return match || null;
}

/**
 * Resets the registry (clears all mentors and pairings).
 */
export function resetRegistry(): void {
  mentors.length = 0;
  for (const id in pairings) delete pairings[id];
}