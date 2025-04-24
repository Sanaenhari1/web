import express from 'express';
import {
  allLivraisons,
  addLivraison,
  removeLivraison,
} from '../controllers/livraison.js';

const router = express.Router();

router.get('/', allLivraisons);
router.post('/', addLivraison);
router.delete('/:id', removeLivraison);

export default router;
