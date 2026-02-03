import * as server from '../entries/pages/projects/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.C9H-M5VX.js","_app/immutable/chunks/C8KfHP2g.js","_app/immutable/chunks/PRDOKluM.js","_app/immutable/chunks/DwC4xb1U.js","_app/immutable/chunks/BfNRboca.js","_app/immutable/chunks/BUEZhtbe.js","_app/immutable/chunks/B3V-Y1WZ.js","_app/immutable/chunks/CLBU0ony.js","_app/immutable/chunks/BSNJucEt.js"];
export const stylesheets = [];
export const fonts = [];
