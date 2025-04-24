import {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
} from '../models/produit.js';

export const getProduits = async (req, res) => {
  try {
    const produits = await getAllProduits();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProduit = async (req, res) => {
  try {
    const produit = await createProduit(req.body);
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const produit = await updateProduit(id, req.body);

    if (!produit) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    res.json({ message: 'Produit modifié avec succès', produit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const produit = await deleteProduit(id);
    if (!produit) {
      return res.statut(404).json({ error: 'Produit non trouvé' });
    }
    res.json({ message: 'Produit supprimé avec succés', produit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
