import express from 'express';
import {
  getProduits,
  addProduit,
  editProduit,
  removeProduit,
} from '../controllers/produit.js';

const router = express.Router();

router.get('/', getProduits);
router.post('/', addProduit);
router.put('/:id', editProduit);
router.delete('/:id', removeProduit);

export default router;
