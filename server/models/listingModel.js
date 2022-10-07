const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    item: { type: String, required: true },
    contact_name: { type: String, required: true },
    instructions: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    claimed_by: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Listing', listingSchema);
