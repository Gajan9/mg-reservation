"use client"

import React from 'react';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Plane, Train, Bus, MapPin, Clock, CreditCard, ArrowLeft } from 'lucide-react';

// Cette constante serait idéalement dans un fichier séparé ou récupérée d'une API
const DESTINATIONS = {
  flight: [
    { 
      id: 1, 
      city: 'Paris', 
      country: 'France', 
      price: '150 €', 
      image: 'https://picsum.photos/seed/paris/800/400', 
      duration: '2h15',
      description: 'Découvrez la ville lumière avec ses monuments iconiques, sa culture riche et sa cuisine délicieuse.',
      details: {
        departureAirport: 'CDG',
        arrivalAirport: 'ORY',
        airline: 'Air France',
        meals: 'Repas inclus',
        baggageAllowance: '23 kg'
      }
    },
    { 
      id: 2, 
      city: 'Barcelone', 
      country: 'Espagne', 
      price: '120 €', 
      image: 'https://picsum.photos/seed/barcelona/800/400', 
      duration: '1h45',
      description: 'Explorez la capitale catalane, ses plages magnifiques et son architecture unique.',
      details: {
        departureAirport: 'CDG',
        arrivalAirport: 'BCN',
        airline: 'Vueling',
        meals: 'Repas en option',
        baggageAllowance: '20 kg'
      }
    },
    { 
      id: 3, 
      city: 'Rome', 
      country: 'Italie', 
      price: '180 €', 
      image: 'https://picsum.photos/seed/rome/800/400', 
      duration: '2h30',
      description: 'Plongez dans l\'histoire antique et la culture italienne au cœur de Rome.',
      details: {
        departureAirport: 'CDG',
        arrivalAirport: 'FCO',
        airline: 'Alitalia',
        meals: 'Repas inclus',
        baggageAllowance: '23 kg'
      }
    }
  ],
  train: [
    { 
      id: 1, 
      city: 'Lyon', 
      country: 'France', 
      price: '65 €', 
      image: 'https://picsum.photos/seed/lyon/800/400', 
      duration: '1h50',
      description: 'Explorez la capitale gastronomique de la France, riche en histoire et en patrimoine.',
      details: {
        departureStation: 'Paris Gare de Lyon',
        arrivalStation: 'Lyon Part-Dieu',
        trainType: 'TGV',
        wifi: 'Wifi gratuit',
        seatingClass: 'Seconde classe'
      }
    },
    { 
      id: 2, 
      city: 'Marseille', 
      country: 'France', 
      price: '90 €', 
      image: 'https://picsum.photos/seed/marseille/800/400', 
      duration: '3h20',
      description: 'Découvrez la cité phocéenne, son port et sa culture méditerranéenne.',
      details: {
        departureStation: 'Paris Gare de Lyon',
        arrivalStation: 'Marseille Saint-Charles',
        trainType: 'TGV',
        wifi: 'Wifi gratuit',
        seatingClass: 'Première classe'
      }
    },
    { 
      id: 3, 
      city: 'Bordeaux', 
      country: 'France', 
      price: '75 €', 
      image: 'https://picsum.photos/seed/bordeaux/800/400', 
      duration: '2h10',
      description: 'Visitez la capitale du vin, ses châteaux et son architecture du 18ème siècle.',
      details: {
        departureStation: 'Paris Montparnasse',
        arrivalStation: 'Bordeaux Saint-Jean',
        trainType: 'TGV',
        wifi: 'Wifi gratuit',
        seatingClass: 'Seconde classe'
      }
    }
  ],
  bus: [
    { 
      id: 1, 
      city: 'Strasbourg', 
      country: 'France', 
      price: '35 €', 
      image: 'https://picsum.photos/seed/strasbourg/800/400', 
      duration: '5h30',
      description: 'Visitez cette ville alsacienne unique, avec son architecture remarquable et son patrimoine culturel.',
      details: {
        departureStation: 'Paris Gallieni',
        arrivalStation: 'Strasbourg Gare Routière',
        busCompany: 'Flixbus',
        wifi: 'Wifi à bord',
        powerOutlets: 'Prises électriques disponibles'
      }
    },
    { 
      id: 2, 
      city: 'Genève', 
      country: 'Suisse', 
      price: '45 €', 
      image: 'https://picsum.photos/seed/geneva/800/400', 
      duration: '6h15',
      description: 'Découvrez la ville internationale, au cœur des Alpes suisses.',
      details: {
        departureStation: 'Paris Gallieni',
        arrivalStation: 'Genève Gare Routière',
        busCompany: 'Eurolines',
        wifi: 'Wifi à bord',
        powerOutlets: 'Prises électriques disponibles'
      }
    },
    { 
      id: 3, 
      city: 'Bruxelles', 
      country: 'Belgique', 
      price: '40 €', 
      image: 'https://picsum.photos/seed/brussels/800/400', 
      duration: '4h20',
      description: 'Explorez la capitale européenne, son architecture et sa culture unique.',
      details: {
        departureStation: 'Paris Gallieni',
        arrivalStation: 'Bruxelles Gare du Midi',
        busCompany: 'Flixbus',
        wifi: 'Wifi à bord',
        powerOutlets: 'Prises électriques disponibles'
      }
    }
  ]
};

export default function DestinationDetailsPage({ params }) {
  const router = useRouter();
  const { type, id } = use(params);
  // Convertir l'ID en nombre
  const destinationId = parseInt(id);

  // Trouver la destination spécifique
  const destination = DESTINATIONS[type]?.find(dest => dest.id === destinationId);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl text-red-600">Destination non trouvée</h1>
        <button 
          onClick={() => router.push('/voyage')} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour aux voyages
        </button>
      </div>
    );
  }

  // Déterminer l'icône en fonction du type de voyage
  const TravelIcon = type === 'flight' ? Plane : type === 'train' ? Train : Bus;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.push('/voyage')} 
        className="flex items-center text-gray-600 hover:text-blue-600 mb-4"
      >
        <ArrowLeft className="mr-2" /> Retour aux destinations
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Section Image */}
        <div>
          <img 
            src={destination.image} 
            alt={`${destination.city}, ${destination.country}`} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Section Détails */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{destination.city}</h1>
              <p className="text-xl text-gray-600 flex items-center">
                <MapPin className="mr-2 text-blue-600" /> {destination.country}
              </p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 font-bold text-2xl">{destination.price}</p>
              <p className="text-gray-500">À partir de</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{destination.description}</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TravelIcon className="mr-2 text-blue-600" /> Détails du voyage
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center">
                  <Clock className="mr-2 text-blue-600" /> Durée
                </span>
                <span className="font-medium">{destination.duration}</span>
              </div>

              {Object.entries(destination.details).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
            <CreditCard className="mr-2" /> Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  );
}