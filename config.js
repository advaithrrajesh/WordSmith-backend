const mongoose = require('mongoose');

const uri = "mongodb://0.0.0.0:27017/testdb";

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
