const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
let port = process.env.PORT || 3000;

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send('Helloooo World');
});


//connecting to database
mongoose.connect(
    process.env.Database_Connection, 
    { useNewUrlParser: true, useUnifiedTopology: true}, () => 
    console.log('Connected to database'));

//listen
//app.listen(port, () => {
  //  console.log('App is listening on port http://localhost: ${PORT}');
//});
//const PORT = process.env.PORT || 3000
//app.listen(PORT, console.log('Server running in ${process.env.NODE_ENV} mode on port ${PORT}'));

//const PORT = process.env.PORT || 3000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`));