import express from 'express';
import { getProjects } from './controller';

export const projectRouter = express.Router();
projectRouter.use(express.json());

projectRouter.get('/', async (req, res) => {
    try {
        const filteredProjects = await getProjects('91823749');
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