import projectDB from './db.json';
export async function getProjects(creatorId: string) {
    return projectDB.filter(({creator_id}) => creatorId === creator_id);
}