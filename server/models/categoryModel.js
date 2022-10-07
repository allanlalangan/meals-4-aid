const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: { type: String, required: true },
  listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }],
  slug: { type: String, required: true },
});

module.exports = mongoose.model('Category', categorySchema);
