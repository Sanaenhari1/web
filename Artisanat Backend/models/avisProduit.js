import pool from '../config/db.js';

export const getAllAvisProduits = async () => {
  const [rows] = await pool.query('SELECT * FROM avis_produits');
  return rows;
};

export const createAvisProduit = async (data) => {
  const { produit_id, utilisateur_id, note, commentaire } = data;
  const [result] = await pool.query(
    'INSERT INTO avis_produits (produit_id, utilisateur_id, note, commentaire) VALUES (?, ?, ?, ?)',
    [produit_id, utilisateur_id, note, commentaire],
  );
  return { id: result.insertId, ...data };
};

export const updateAvisProduit = async (id, data) => {
  const { note, commentaire } = data;
  const [result] = await pool.query(
    `UPDATE avis_produits 
     SET note = ?, commentaire = ? 
     WHERE id = ?`,
    [note, commentaire, id],
  );

  if (result.affectedRows === 0) return null;

  const [updated] = await pool.query(
    'SELECT * FROM avis_produits WHERE id = ?',
    [id],
  );
  return updated[0];
};

export const deleteAvisProduit = async (id) => {
  const [result] = await pool.query('DELETE FROM avis_produits WHERE id = ?', [
    id,
  ]);
  return result.affectedRows > 0;
};
