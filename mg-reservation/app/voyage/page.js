"use client"

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Plane, Train, Bus, ChevronRight, Search } from 'lucide-react';

const TravelBookingPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('flight');
  const [searchTerm, setSearchTerm] = useState('');
  
  const destinations = {
    flight: [
      { id: 1, city: 'Paris', country: 'France', price: '150 €', image: 'https://picsum.photos/seed/paris/400/200', duration: '2h15' },
      { id: 2, city: 'Barcelone', country: 'Espagne', price: '120 €', image: 'https://picsum.photos/seed/barcelona/400/200', duration: '1h45' },
      { id: 3, city: 'Rome', country: 'Italie', price: '180 €', image: 'https://picsum.photos/seed/rome/400/200', duration: '2h30' },
    ],
    train: [
      { id: 1, city: 'Lyon', country: 'France', price: '65 €', image: 'https://picsum.photos/seed/lyon/400/200', duration: '1h50' },
      { id: 2, city: 'Marseille', country: 'France', price: '90 €', image: 'https://picsum.photos/seed/marseille/400/200', duration: '3h20' },
      { id: 3, city: 'Bordeaux', country: 'France', price: '75 €', image: 'https://picsum.photos/seed/bordeaux/400/200', duration: '2h10' },
    ],
    bus: [
      { id: 1, city: 'Strasbourg', country: 'France', price: '35 €', image: 'https://picsum.photos/seed/strasbourg/400/200', duration: '5h30' },
      { id: 2, city: 'Genève', country: 'Suisse', price: '45 €', image: 'https://picsum.photos/seed/geneva/400/200', duration: '6h15' },
      { id: 3, city: 'Bruxelles', country: 'Belgique', price: '40 €', image: 'https://picsum.photos/seed/brussels/400/200', duration: '4h20' },
    ]
  };

  
  // Filtrer les destinations en fonction de la recherche et de l'onglet actif
  const filteredDestinations = useMemo(() => {
    const currentDestinations = destinations[activeTab];
    console.log(currentDestinations)
    
    if (!searchTerm) return currentDestinations;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    return currentDestinations.filter(dest => 
      dest.city.toLowerCase().includes(normalizedSearch) || 
      dest.country.toLowerCase().includes(normalizedSearch)
    );
  }, [activeTab, searchTerm]);

  const handleDestinationClick = (id) => {
    router.push(`/voyage/${activeTab}/${id}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Découvrez nos meilleures destinations</h1>

      {/* Barre de recherche */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input 
            type="text" 
            placeholder="Rechercher une destination..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex border rounded-lg overflow-hidden">
          <button 
            className={`flex items-center px-6 py-3 ${activeTab === 'flight' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveTab('flight')}
          >
            <Plane className="mr-2 h-5 w-5" />
            Vol
          </button>
          <button 
            className={`flex items-center px-6 py-3 ${activeTab === 'train' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveTab('train')}
          >
            <Train className="mr-2 h-5 w-5" />
            Train
          </button>
          <button 
            className={`flex items-center px-6 py-3 ${activeTab === 'bus' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveTab('bus')}
          >
            <Bus className="mr-2 h-5 w-5" />
            Bus
          </button>
        </div>
      </div>
      
      {/* Destinations Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id} 
              onClick={() => handleDestinationClick(dest.id)}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={`${dest.city}, ${dest.country}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl text-gray-500 font-semibold">{dest.city}</h3>
                    <p className="text-gray-600">{dest.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-bold text-xl">{dest.price}</p>
                    <p className="text-gray-500 text-sm">À partir de</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-gray-600">
                    {activeTab === 'flight' && <Plane className="inline mr-1 h-4 w-4" />}
                    {activeTab === 'train' && <Train className="inline mr-1 h-4 w-4" />}
                    {activeTab === 'bus' && <Bus className="inline mr-1 h-4 w-4" />}
                    {dest.duration}
                  </p>
                  <button className="flex items-center text-blue-600 font-medium">
                    Réserver <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">
          Aucune destination trouvée
        </div>
      )}
      
      {/* "Voir plus" button */}
      <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
          Voir plus de destinations
        </button>
      </div>
    </div>
  );
};

export default TravelBookingPage;