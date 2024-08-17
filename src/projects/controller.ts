import { randomUUID } from 'crypto';
import dbContent from './db.json';
import { Project, ProjectRequest, ViewStyle } from './model';
import path from 'path';
import { writeFileSync } from 'fs';

const dbPath = path.join(__dirname, 'db.json');
let projectDB = dbContent;

export async function getProjects(creatorId: string, filters: {
    isFavourite?: boolean,
    viewStyle?: ViewStyle,
    parentId?: string,
}): Promise<Project[]> {
    return projectDB
        .filter(({ creator_id }) => creatorId === creator_id)
        .filter(({is_favourite}) => !filters.isFavourite || filters.isFavourite === is_favourite)
        .filter(({view_style}) => !filters.viewStyle || filters.viewStyle === view_style)
        .filter(({parent_id}) => !filters.parentId || filters.parentId === parent_id) as Project[];
}

export async function addProject(projectData: ProjectRequest): Promise<Project> {

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

export async function updateProjectById(projectId: string, updatedProjectData: Partial<Project>): Promise<Project> {
    const projectDataIndex = projectDB.findIndex(({id}) => id === projectId);

    if(projectDataIndex < 0) throw(`The resource "${projectId}" could not be found`);

    projectDB[projectDataIndex] = {...projectDB[projectDataIndex], ...updatedProjectData} as Project;
    writeFileSync(dbPath, JSON.stringify(projectDB, null, 2));

    return projectDB[projectDataIndex] as Project;
}

export async function deleteProjectById(projectId: string) {
    const updatedProjectsList = projectDB.filter(({id}) => id !== projectId);

    projectDB = updatedProjectsList;
    writeFileSync(dbPath, JSON.stringify(updatedProjectsList, null, 2));

    return updatedProjectsList.length;
}