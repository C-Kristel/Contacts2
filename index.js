const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv/config');
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());

//Connect to Db
require('./DB')();
const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to Database");
});

//routes
app.get('/', (req, res) => {
    res.send('Helloooo World');
});


//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Server


//app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`));

app.listen(port, console.log("Server running in port: ", port));