const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotelTables");

// Route pour récupérer les détails d'un hôtel
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hôtel non trouvé" });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
