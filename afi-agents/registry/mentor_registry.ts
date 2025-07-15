// Simple runtime mentor registry
type AgentMeta = { id: string; tags: string[] };
type MentorMeta = { id: string; archetype: string; expertise: string[] };

const mentors: MentorMeta[] = [];
const pairings: Record<string, MentorMeta> = {};

export function registerMentor(meta: MentorMeta) { mentors.push(meta); }

export function pairMentor(agent: AgentMeta): MentorMeta | null {
  if(pairings[agent.id]) return pairings[agent.id];
  const found = mentors.find(m=>m.expertise.some(x=>agent.tags.includes(x)))||null;
  if(found) pairings[agent.id]=found;
  return found;
}

export function resetRegistry(){ mentors.length=0; Object.keys(pairings).forEach(k=>delete pairings[k]); }
