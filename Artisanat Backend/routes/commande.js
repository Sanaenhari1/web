import express from 'express';
import {
  getCommandes,
  addCommande,
  getCommande,
  removeCommande,
} from '../controllers/commande.js';

const router = express.Router();

router.get('/', getCommandes);
router.get('/:id', getCommande);
router.post('/', addCommande);
router.delete('/:id', removeCommande);

export default router;
