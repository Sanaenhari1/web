import express from 'express';
import cors from 'cors';
import produitRoutes from './routes/produit.js';
import commandes from './routes/commande.js';
import ligneCommandes from './routes/ligneCmd.js';
import livraison from './routes/livraison.js';
import avisProduit from './routes/avisProduit.js';

const app = express();

app.use(cors());
app.use(express.json());

//Routes

app.use('/api/produits', produitRoutes);
app.use('/api/commandes', commandes);
app.use('/api/ligneCommandes', ligneCommandes);
app.use('/api/livraison', livraison);
app.use('/api/avisProduit', avisProduit);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
