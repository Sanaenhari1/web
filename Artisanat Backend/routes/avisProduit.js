import express from 'express';
import {
  allAvisProduits,
  addAvisProduit,
  editAvisProduit,
  removeAvisProduit,
} from '../controllers/avisProduit.js';

const router = express.Router();

router.get('/', allAvisProduits);
router.post('/', addAvisProduit);
router.put('/', editAvisProduit);
router.post('/', removeAvisProduit);

export default router;
