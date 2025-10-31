import express from 'express';
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
router.get('/', getAllQualifications);              // GET api/qualifications

// GET qualification by ID
router.get('/:id', getQualificationById);           // GET api/qualifications/:id

// POST new qualification
router.post('/', createQualification);              // POST api/qualifications

// PUT update qualification by ID
router.put('/:id', updateQualification);            // PUT api/qualifications/:id

// DELETE qualification by ID
router.delete('/:id', deleteQualification);         // DELETE api/qualifications/:id

// DELETE all qualifications
router.delete('/', deleteAllQualifications);        // DELETE api/qualifications

export default router;