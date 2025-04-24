import {
  getAllAvisProduits,
  createAvisProduit,
  updateAvisProduit,
  deleteAvisProduit,
} from '../models/avisProduit.js';

export const allAvisProduits = async (req, res) => {
  try {
    const avis = await getAllAvisProduits();
    res.json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAvisProduit = async (req, res) => {
  try {
    const avis = await createAvisProduit(req.body);
    res.status(201).json(avis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editAvisProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const avis = await updateAvisProduit(id, req.body);

    if (!avis) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }

    res.json({ message: 'Avis modifié avec succès', avis });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeAvisProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const avis = await deleteAvisProduit(id);

    if (!avis) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }

    res.json({ message: 'Avis supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
