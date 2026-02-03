import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BV8MHomv.js","_app/immutable/chunks/C8KfHP2g.js","_app/immutable/chunks/PRDOKluM.js","_app/immutable/chunks/DwC4xb1U.js","_app/immutable/chunks/BfNRboca.js","_app/immutable/chunks/B3V-Y1WZ.js","_app/immutable/chunks/BSNJucEt.js"];
export const stylesheets = [];
export const fonts = [];
