const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  user_id: { type: String, required: true, unique: true }, // Include user_id
});

const User = mongoose.model('User', userSchema);

module.exports = User;
