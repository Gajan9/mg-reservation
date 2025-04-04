// pour inserer les données 
require('dotenv').config(); // Charger les variables d'environnement
const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Importer la connexion à MongoDB
const Hotel = require('./models/hotelTables'); // Importer le modèle Hotel

// Données à insérer
const hotels = [
  {
    nom: 'Hotel Paris',
    ville: 'Paris',
    etoiles: 5,
    prix: 200,
    image: 'https://example.com/image-paris.jpg',
    description: 'Un hôtel de luxe situé au cœur de Paris.',
    commodites: ['WiFi', 'Piscine', 'Parking', 'Restaurant'],
  },
  {
    nom: 'Hotel Madrid',
    ville: 'Madrid',
    etoiles: 4,
    prix: 150,
    image: 'https://example.com/image-madrid.jpg',
    description: 'Un hôtel confortable à proximité des attractions touristiques.',
    commodites: ['WiFi', 'Salle de sport', 'Petit-déjeuner inclus'],
  },
  {
    nom: 'Hotel Rome',
    ville: 'Rome',
    etoiles: 3,
    prix: 100,
    image: 'https://example.com/image-rome.jpg',
    description: 'Un hôtel économique avec un excellent service.',
    commodites: ['WiFi', 'Climatisation'],
  },
];

// Fonction pour insérer les données
const importData = async () => {
  try {
    await connectDB(); // Connexion à MongoDB

    // Supprimer les données existantes dans la collection
    await Hotel.deleteMany();
    console.log('Données existantes supprimées.');

    // Insérer les nouvelles données
    await Hotel.insertMany(hotels);
    console.log('Données insérées avec succès.');

    process.exit(); // Quitter le processus
  } catch (error) {
    console.error(`Erreur lors de l'insertion des données : ${error}`);
    process.exit(1); // Quitter avec un code d'erreur
  }
};

importData();