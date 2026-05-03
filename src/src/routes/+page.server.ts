import type { PageServerLoad } from './$types';
import { getAllProjects } from '$lib/server/projects';

export const load: PageServerLoad = async () => {
  const projects = await getAllProjects();
  return { projects };
};
