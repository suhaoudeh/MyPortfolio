// import express from 'express';
// import {
//   getAllProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
//   deleteAllProjects
// } from '../controllers/projectController.js';

// const router = express.Router();

// router.get('/', getAllProjects);
// router.get('/:id', getProjectById);
// router.post('/', createProject);
// router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
// router.delete('/', deleteAllProjects);

// export default router;

import express from 'express';
//import authMiddleware from '../middlewares/authMiddleware.js';
import authMiddleware from '../Middleware/auth.js';
import {
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject
} from '../controllers/projectController.js'


//import { getProjects } from '../controllers/project.controller.js';
// Router /projects
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllProjects);
router.get('/:id', authMiddleware, getProjectById);
router.post('/', authMiddleware, createProject);
router.put('/:id', authMiddleware, updateProject);
router.delete('/:id', authMiddleware, deleteProject);

export default router;