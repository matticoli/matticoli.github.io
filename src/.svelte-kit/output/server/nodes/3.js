

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BTtAlGCS.js","_app/immutable/chunks/C8KfHP2g.js","_app/immutable/chunks/PRDOKluM.js","_app/immutable/chunks/DwC4xb1U.js"];
export const stylesheets = [];
export const fonts = [];
