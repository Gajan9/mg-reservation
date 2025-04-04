require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env
const connectDB = require('./config/db'); // Importer la fonction de connexion

// Tester la connexion
const testConnection = async () => {
  try {
    await connectDB(); // Appeler la fonction de connexion
    console.log('Connexion à la base de données réussie !');
    process.exit(0); // Quitter le processus après le test
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
    process.exit(1); // Quitter avec un code d'erreur
  }
};

testConnection();