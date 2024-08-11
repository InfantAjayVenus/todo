import { randomUUID } from 'crypto';
import projectDB from './db.json';
import { Project, ViewStyle } from './model';
import path from 'path';
import { writeFileSync } from 'fs';

const dbPath = path.join(__dirname, 'db.json');

export async function getProjects(creatorId: string) {
    return projectDB.filter(({ creator_id }) => creatorId === creator_id);
}

export async function addProject(projectData: Pick<Project, 'name' | 'creator_id' | 'order' | 'color' | 'parent_id'>): Promise<Project> {

    if (projectData?.name.length > 0) throw ("Name is a required field");

    const userProjects = projectDB.filter(({ creator_id }) => creator_id === projectData.creator_id);
    if (userProjects.some(({ name }) => name === projectData.name)) throw ("A Project with the name already exists");

    const newProject: Project = {
        id: randomUUID(),
        creator_id: projectData.creator_id,
        name: projectData.name,
        order: projectData.order,
        color: projectData.color || "",
        is_favourite: false,
        is_inbox_project: false,
        view_style: ViewStyle.list,
        parent_id: projectData.parent_id
    }

    projectDB.push(newProject);
    writeFileSync(dbPath, JSON.stringify(projectDB, null, 2));
    return newProject;
}

export async function getProjectById(creatorId: string, projectId: string): Promise<Project> {
    if (creatorId?.length === 0) throw ("creator_id should not be null");
    if (projectId?.length === 0) throw ("project_id should not be null");

    const userProjects = projectDB.filter(({ creator_id }) => creatorId === creator_id);
    const projectData = userProjects.find(({id}) => id === projectId) as Project;

    if(!projectData) throw("Project Not Found");

    return projectData;
}