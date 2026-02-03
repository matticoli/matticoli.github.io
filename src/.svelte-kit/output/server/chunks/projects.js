import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
async function getProjectData(slug) {
  const f = readFileSync(`projects/${slug}.md`, { encoding: "utf-8" });
  const m = matter(f);
  const processedContent = await remark().use(html).process(m.content);
  const contentHtml = processedContent.toString();
  const project = { ...m.data, content: contentHtml };
  return project;
}
async function getProjectSlugs() {
  const dir = await readdir("projects", { withFileTypes: false });
  const paths = dir.map((p) => p.split(".")[0]);
  return paths;
}
async function getAllProjects() {
  const paths = await getProjectSlugs();
  const projects = paths.map((proj) => {
    return getProjectData(proj);
  });
  const data = await Promise.all(projects);
  return data.sort((a, b) => {
    return a.priority - b.priority;
  });
}
export {
  getProjectData as a,
  getAllProjects as g
};
