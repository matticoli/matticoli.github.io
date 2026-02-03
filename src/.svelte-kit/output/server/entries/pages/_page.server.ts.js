import { g as getAllProjects } from "../../chunks/projects.js";
const load = async () => {
  const projects = await getAllProjects();
  return { projects };
};
export {
  load
};
