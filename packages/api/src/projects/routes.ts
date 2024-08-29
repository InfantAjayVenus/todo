import express from 'express';
import { addProject, deleteProjectById, getProjectById, getProjects, updateProjectById } from './controller';
import { AuthenticatedRequest } from '../lib/middlewares/authMiddleware';
import { ProjectRequest, ProjectUpdateRequest, ViewStyle } from './model';

export const projectRouter = express.Router();
projectRouter.use(express.json());

projectRouter.get('/', async (req: AuthenticatedRequest, res) => {
    if(!req.creatorId) throw('Invalid Creator ID');
    const {isFavourite, viewStyle, parentId} = req.query;
    try {
        const filters = {
            isFavourite: isFavourite ? isFavourite === 'true' : undefined,
            viewStyle: viewStyle ? (viewStyle === ViewStyle.board ? ViewStyle.board : ViewStyle.list): undefined,
            parentId: parentId? parentId as string : undefined,
        }
        const filteredProjects = await getProjects(req.creatorId, filters);
        res.status(200).json(filteredProjects);
    } catch (error) {
        res.status(500).json({
            error: "Unable to process request. Please try again after a while :("
        })
    }
});

projectRouter.post('/', async (req: AuthenticatedRequest, res) => {
    const {creatorId: creator_id} = req;
    const {
        name,
        order
    } = req.body as ProjectRequest;

    if(creator_id?.length === 0 || !creator_id) throw("Invalid Creator ID");
    if(name?.length === 0 || !name) throw("Name is required to create a Project");
    if(order < 0 || isNaN(order)) throw("Order of the project is Invalid");

    try {
        const newProject = await addProject({creator_id, ...req.body} as ProjectRequest);
        res.status(200).json(newProject);
    } catch (error) {
       res.status(500).json({
        error: "Failed to create Project"
       }) 
    }

})

projectRouter.get('/:projectId', async (req:AuthenticatedRequest, res) => {
    const projectId = req.params.projectId as string;
    const creatorId = req.creatorId || '';

    if(creatorId?.length === 0 || !creatorId) throw("Invalid Creator ID");
    if(projectId?.length === 0 || !projectId) throw("Invalid Project ID");

    try {
        const projectData = await getProjectById(creatorId, projectId);
        res.status(200).json(projectData);
    } catch (error) {
        res.status(500).json({
            error: "Error Fetching the project"
        })
    }
})

projectRouter.post('/:projectId', async (req: AuthenticatedRequest, res) => {
    const projectId = req.params.projectId as string;
    const creatorId = req.creatorId || '';

    if(creatorId?.length === 0 || !creatorId) throw("Invalid Creator ID");
    if(projectId?.length === 0 || !projectId) throw("Invalid Project ID");

    try {
        const updateProjectData: ProjectUpdateRequest = req.body;
        const updatedProject = await updateProjectById(creatorId, projectId, updateProjectData);

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({
            error: "Unable to update project"
        })
    }

})

projectRouter.delete('/:projectId', async (req: AuthenticatedRequest, res) => {
    const projectId:string = req.params.projectId as string;
    try {
        await deleteProjectById(req.creatorId || '', projectId);
        res.status(204);
    } catch (error) {
       res.status(500).send({
            error: "Unable to Delete Project"
       });
    }
})