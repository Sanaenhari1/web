import pool from '../db/index.js';

export const getAllProduits = async () => {
  const [rows] = await pool.query('SELECT * FROM produits');
  return rows;
};

export const createProduit = async (data) => {
  const { nom, description, prix, stock, image_url } = data;

  const [result] = await pool.query(
    `INSERT INTO produits (nom, description, prix, stock, image)
     VALUES (?, ?, ?, ?, ?)`,
    [nom, description, prix, stock, image_url],
  );

  const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [
    result.insertId,
  ]);
  return rows[0];
};

export const updateProduit = async (id, data) => {
  const { nom, description, prix, stock, image_url } = data;

  await pool.query(
    `UPDATE produits
     SET nom = ?, description = ?, prix = ?, stock = ?, image = ?
     WHERE id = ?`,
    [nom, description, prix, stock, image_url, id],
  );

  const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [id]);
  return rows[0];
};

export const deleteProduit = async (id) => {
  const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [id]);
  if (rows.length === 0) return null;

  await pool.query('DELETE FROM produits WHERE id = ?', [id]);
  return rows[0]; // retourne le produit supprimé
};
