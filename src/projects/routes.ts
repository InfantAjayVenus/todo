import express from 'express';
import { deleteProjectById, getProjects } from './controller';
import { AuthenticatedRequest } from '../lib/middlewares/authMiddleware';

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

projectRouter.delete('/:projectId', async (req, res) => {
    const projectId:string = req.query.projectId as string;
    try {
        await deleteProjectById(projectId);
        res.status(204);
    } catch (error: any) {
       res.status(500).send(error.message);
    }
})