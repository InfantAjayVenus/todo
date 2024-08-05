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