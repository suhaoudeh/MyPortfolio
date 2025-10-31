import express from 'express';
import authMiddleware from '../Middleware/auth.js';

import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} from '../controllers/educationController.js';

const router = express.Router();

// GET all qualifications
router.get('/', authMiddleware, getAllQualifications);              // GET api/qualifications

// GET qualification by ID
router.get('/:id', authMiddleware, getQualificationById);           // GET api/qualifications/:id

// POST new qualification
router.post('/', authMiddleware, createQualification);              // POST api/qualifications

// PUT update qualification by ID
router.put('/:id', authMiddleware, updateQualification);            // PUT api/qualifications/:id

// DELETE qualification by ID
router.delete('/:id', authMiddleware, deleteQualification);         // DELETE api/qualifications/:id

// DELETE all qualifications
router.delete('/', authMiddleware, deleteAllQualifications);        // DELETE api/qualifications

export default router;