// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getProjectData } from '$lib/server/projects';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const project = await getProjectData(params.slug);
  return { project };
};
