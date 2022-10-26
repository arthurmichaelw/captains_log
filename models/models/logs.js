const mongoose = require('mongoose')

// Make a Schema
const logSchema = new mongoose.Schema({
  name: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: { type: Boolean, timestamps: true }
})

// Make a Model from the Schema
// the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Log = mongoose.model('Log', logSchema)
// making a fruits collection

// Export the Model for Use in the App
module.exports = Log
