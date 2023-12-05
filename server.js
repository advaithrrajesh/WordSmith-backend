const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

const mongooseConfig = require('./config');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 6000;


app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
