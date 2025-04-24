import {
  getAllLignesCommande,
  createLigneCommande,
} from '../models/ligneCmd.js';

export const allLignesCommande = async (req, res) => {
  try {
    const lignes = await getAllLignesCommande();
    res.json(lignes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addLigneCommande = async (req, res) => {
  try {
    const ligne = await createLigneCommande(req.body);
    res.status(201).json(ligne);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
