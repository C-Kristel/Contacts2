const {connect, connection} = require('mongoose');
const {config} = require('dotenv');

module.exports = () => {
    config();
    const uri = process.env.Database_Connection || '';
    const dbName = process.env.DB_NAME || '';

    connect(uri, {
        dbName,
        user: process.env.DB_USER || '',
        pass: process.enc.DB_PASSWORD || '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
     .then(() => {
        console.log('MongoDB Connected');
    }) 
    .catch(error => console.error(error.message));

    connection.on('connected', () => {
        console.log('Connected to Cluster [', dbName, ']');
    })

    connection.on('error', (error) => {
        console.error(error.message);
    })

    connection.on('disconnected', () => {
        console.log('Disconnected');
    })
    process.on('SIGINT' , () => {
        connection.close(() => {
            console.log('Application Timeout');
            process.exit(0);
        })
    })
}