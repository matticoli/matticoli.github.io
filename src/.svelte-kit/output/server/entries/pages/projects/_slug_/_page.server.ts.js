import { a as getProjectData } from "../../../../chunks/projects.js";
const load = async ({ params }) => {
  const project = await getProjectData(params.slug);
  return { project };
};
export {
  load
};
