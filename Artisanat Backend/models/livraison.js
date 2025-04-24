import pool from '../config/db.js';

export const getAllLivraisons = async () => {
  const [rows] = await pool.query('SELECT * FROM livraisons');
  return rows;
};

export const createLivraison = async (data) => {
  const { commande_id, transport, numero, dateexpedition, datelivraison } =
    data;
  const [result] = await pool.query(
    'INSERT INTO livraisons (commande_id, transport, numero, dateexpedition, datelivraison) VALUES (?, ?, ?, ?)',
    [commande_id, transport, numero, dateexpedition, datelivraison],
  );
  return { id: result.insertId, ...data };
};

export const deleteLivraison = async (id) => {
  const [rows] = await pool.query('SELECT * FROM livraisons WHERE id = ?', [
    id,
  ]);
  if (rows.length === 0) return null;

  await pool.query('DELETE FROM livraisons WHERE id = ?', [id]);
  return rows[0];
};
