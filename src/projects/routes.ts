import express from 'express';
import { getProjects } from './controller';

export const projectRouter = express.Router();
projectRouter.use(express.json());

projectRouter.get('/', (req, res) => {
    res.json(getProjects('91823749'))
});