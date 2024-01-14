// ====== PACKAGES ======== //
// EXPRESS
const express = require('express')
// DOTENV
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
// Creating an Express application
const app = express();
// MORGAN 
const morgan = require('morgan');
app.use(morgan('dev'))
// CONNECT DB HANDLER
const connectDB = require(`${__dirname}/db/connect`);

// ====== MIDDLEWARES ======== //
app.use(express.json())
app.use(express.static('./public'))

// ====== ROUTES ======== //


// ====== MONGODB ======== //

// Setting the MongoDB URI
const mongoDbUri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
// Setting the server to listen on process.env.SERVER_PORT
const port = process.env.SERVER_PORT || 3375
// Function to start the server after connecting to the database
const start = async () => {
    try {
        // Connecting to the database
        await connectDB(mongoDbUri);
        // Starting the Express app and listening on the specified port
        app.listen(port, () => {
            console.log(`App is currently running on port: ${port}`);
        });
    } catch (error) {
        // Handling errors during the startup process
        console.error(error.message);
    }
}

// Calling the 'start' function to initiate the server startup process
start();