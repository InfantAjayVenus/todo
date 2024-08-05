import projectDB from './db.json';
export function getProjects(creatorId: string) {
    console.log(projectDB)
    return projectDB.filter(({creator_id}) => creatorId === creator_id);
}