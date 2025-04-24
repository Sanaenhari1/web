import {
  createCommande,
  getAllCommandes,
  getCommandeById,
  deleteCommande,
} from '../models/commande.js';

export const getCommandes = async (req, res) => {
  try {
    const commandes = await getAllCommandes();
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addCommande = async (req, res) => {
  try {
    const commande = await createCommande(req.body);
    res.status(201).json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCommande = async (req, res) => {
  try {
    const id = req.params.id;
    const commande = await getCommandeById(id);
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvé ' });
    }
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeCommande = async (req, res) => {
  try {
    const id = req.params.id;
    const commande = await deleteCommande(id);
    if (!commande) {
      return res.status(404).json({ error: 'Commande non trouvé' });
    }
    res.json({ message: 'Commande supprimé avec succés', commande });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
