import express from 'express';
import {
  allLignesCommande,
  addLigneCommande,
} from '../controllers/ligneCmmd.js';

const router = express.Router();

router.get('/', allLignesCommande);
router.post('/', addLigneCommande);

export default router;
