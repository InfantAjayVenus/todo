import express from 'express';
import { addProject, deleteProjectById, getProjects } from './controller';
import { AuthenticatedRequest } from '../lib/middlewares/authMiddleware';
import { ProjectRequest } from './model';

export const projectRouter = express.Router();
projectRouter.use(express.json());

projectRouter.get('/', async (req: AuthenticatedRequest, res) => {
    if(!req.creatorId) throw('Invalid Creator ID');
    try {
        const filteredProjects = await getProjects(req.creatorId);
        res.status(200).json(filteredProjects);
    } catch (error) {
        res.status(500).json({
            error: "Unable to process request. Please try again after a while :("
        })
    }
});

projectRouter.post('/', async (req: AuthenticatedRequest, res) => {
    const {
        creator_id,
        name,
        order
    } = req.body as ProjectRequest;

    if(creator_id?.length === 0 || !creator_id) throw("Invalid Creator ID");
    if(name?.length === 0 || !creator_id) throw("Name is required to create a Project");
    if(order < 0 || isNaN(order)) throw("Order of the project is Invalid");

    try {
        const newProject = addProject(req.body as ProjectRequest);
        res.status(200).json(newProject);
    } catch (error) {
       res.status(500).json({
        error: "Failed to create Project"
       }) 
    }

})

projectRouter.delete('/:projectId', async (req: AuthenticatedRequest, res) => {
    const projectId:string = req.query.projectId as string;
    try {
        await deleteProjectById(req.creatorId || '', projectId);
        res.status(204);
    } catch (error: any) {
       res.status(500).send(error.message);
    }
})