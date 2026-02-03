import type { PageServerLoad } from './$types';
import { getProjectData } from '$lib/server/projects';

export const load: PageServerLoad = async ({ params }) => {
  const project = await getProjectData(params.slug);
  return { project };
};
