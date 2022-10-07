const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    given_name: { type: String, required: [true, 'Please enter your name'] },
    username: {
      type: String,
      required: [true, 'Please enter your display name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
    },
    password: { type: String, required: [true, 'Please enter an password'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
