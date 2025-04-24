import {
  getAllLivraisons,
  createLivraison,
  deleteLivraison,
} from '../models/livraison.js';

export const allLivraisons = async (req, res) => {
  try {
    const livraisons = await getAllLivraisons();
    res.json(livraisons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addLivraison = async (req, res) => {
  try {
    const livraison = await createLivraison(req.body);
    res.status(201).json(livraison);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeLivraison = async (req, res) => {
  try {
    const livraison = await deleteLivraison(req.params.id);
    if (!livraison)
      return res.status(404).json({ error: 'Livraison non trouvée' });
    res.json({ message: 'Livraison supprimée', livraison });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
