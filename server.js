// Import necessary modules
const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route to handle buying properties
app.post("/buy", async (req, res) => {
  const { desiredLocation, budget, propertyType, contactInfo } = req.body;

  const data = {
    desiredLocation: desiredLocation,
    budget: budget,
    propertyType: propertyType,
    contactInfo: contactInfo
  };

  try {
    // Save the property details to MongoDB
    await collection.create(data);
    res.json("success");
  } catch (e) {
    res.json("fail");
  }
});


// Start the server
app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
