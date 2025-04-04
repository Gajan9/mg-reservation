const express = require("express");
const connectDB = require("./config/db");
const hotelRoutes = require("./routes/hotelRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/hotels", hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
