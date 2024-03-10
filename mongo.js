const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/project")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

// Define the schema for property details
const propertySchema = new mongoose.Schema({
  desiredLocation: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  }
});

// Create a model for properties collection
const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
