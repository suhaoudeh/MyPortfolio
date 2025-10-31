import express from 'express';
import authMiddleware from '../Middleware/auth.js'; 

import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', authMiddleware, getAllContacts);
router.get('/:id', authMiddleware, getContactById);
router.post('/',authMiddleware, createContact);
router.put('/:id',authMiddleware, updateContact);
router.delete('/:id',authMiddleware, deleteContact);
router.delete('/',authMiddleware, deleteAllContacts);

export default router;