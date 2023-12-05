const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.BASE_URL;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
  console.log('MongoDB Connected Successfully!');
});

module.exports = mongoose;
