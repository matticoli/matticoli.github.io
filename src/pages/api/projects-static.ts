import { readFileSync } from 'fs'
import { readdir } from 'fs/promises'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getProjectData(slug: string) {
    const f = readFileSync(`projects/${slug}.md`, { encoding: 'utf-8' });
    const m = matter(f);

    const processedContent = await remark()
    .use(html)
    .process(m.content);
    const contentHtml = processedContent.toString();
    const project = { ...m.data, content: contentHtml };
    
    return project
}

export async function getProjectSlugs() {
    const dir = await readdir('projects', { withFileTypes: false });
    const paths = dir.map(p => p.split('.')[0]);
    return paths;
}

export async function getProjectPaths() {
    const dir = await readdir('projects', { withFileTypes: false });
    const paths = dir.map(p => ({
        params: {
            slug: p.split('.')[0],
        }
    }));
    return paths;
}

export async function getAllProjects() {
    console.log("Getting static props");
    const paths = await getProjectSlugs();
    const projects = paths.map((proj) => {
        return getProjectData(proj);
    });

    return await Promise.all(projects);
}