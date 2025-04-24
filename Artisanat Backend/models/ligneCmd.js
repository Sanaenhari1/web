import pool from '../config/db.js';

export const getAllLignesCommande = async () => {
  const [rows] = await pool.query('SELECT * FROM lignecommande');
  return rows;
};

export const createLigneCommande = async (data) => {
  const { commande_id, produit_id, quantite, soustotale } = data;
  const [result] = await pool.query(
    'INSERT INTO lignecommande (commande_id, produit_id, quantite, soustotale) VALUES (?, ?, ?, ?)',
    [commande_id, produit_id, quantite, soustotale],
  );
  return { id: result.insertId, ...data };
};
