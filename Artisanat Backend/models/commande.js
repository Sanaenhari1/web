import pool from '../db/index.js';

// Créer une commande
export const createCommande = async (data) => {
  const { utilisateur_id, date_commande, statut, total } = data;

  const [result] = await pool.query(
    `INSERT INTO commandes (client_id, date_commande, statut, total)
     VALUES (?, ?, ?, ?)`,
    [utilisateur_id, date_commande, statut, total],
  );

  const [rows] = await pool.query('SELECT * FROM commandes WHERE id = ?', [
    result.insertId,
  ]);
  return rows[0];
};

// Récupérer toutes les commandes
export const getAllCommandes = async () => {
  const [rows] = await pool.query('SELECT * FROM commandes');
  return rows;
};

// Récupérer une commande par ID
export const getCommandeById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM commandes WHERE id = ?', [id]);
  return rows[0];
};

// Supprimer une commande
export const deleteCommande = async (id) => {
  const [rows] = await pool.query('SELECT * FROM commandes WHERE id = ?', [id]);
  if (rows.length === 0) return null;

  await pool.query('DELETE FROM commandes WHERE id = ?', [id]);
  return rows[0];
};
