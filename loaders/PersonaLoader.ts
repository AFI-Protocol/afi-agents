/**
 * 🔄 PersonaLoader
 * -------------------------------------------------------
 * Dynamically imports all agent personas from the `personas/` folder.
 * Enables plug-and-play persona activation for AFI agent systems.
 */

import type { Agent } from '../types/Agent';

// Dynamic loader logic using Vite-compatible import.meta.glob
// or fallback to Node's fs/readdirSync if bundler support is not guaranteed.

const loadPersonas = async (): Promise<Agent[]> => {
  const modules: Record<string, () => Promise<{ default: Agent }>> = import.meta.glob('../personas/*.agent.ts');

  const loadedPersonas: Agent[] = [];

  for (const path in modules) {
    const module = await modules[path]();
    if (module?.default) {
      loadedPersonas.push(module.default);
    }
  }

  return loadedPersonas;
};

export default loadPersonas;