const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = Schema({
  name: { type: String, required: true },
  location_id: { type: Number },
});

module.exports = mongoose.model('Location', locationSchema);
