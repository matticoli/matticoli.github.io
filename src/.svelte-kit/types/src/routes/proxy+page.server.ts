// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getAllProjects } from '$lib/server/projects';

export const load = async () => {
  const projects = await getAllProjects();
  return { projects };
};
;null as any as PageServerLoad;