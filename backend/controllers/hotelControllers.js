// pour recuperer  tous les hotels ou un hotel par son id 
const Hotel = require('../models/hotelModel');

// Récupérer tous les hôtels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un hôtel par son ID
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hôtel non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHotels,
  getHotelById
};
