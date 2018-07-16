const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').load();
const cors        = require('cors');
// console.log(process.env.API_KEY);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const gif = require('./routes/giphy');

app.use('/gif' , gif);

module.exports = app;
