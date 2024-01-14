// ====== PACKAGES ======== //
const express = require('express') // EXPRESS
const dotenv = require('dotenv'); // DOTENV
dotenv.config({ path: './config.env' })
// Creating an Express application
const app = express();
const morgan = require('morgan'); // MORGAN 
app.use(morgan('dev'))
// ASYNC ERRORS
require('express-async-errors')
// CONNECT DB HANDLER
const connectDB = require(`${__dirname}/db/connect`);
// ROUTERS
const productsRouter = require('./routes/products')


// ====== MIDDLEWARES ======== //
const notFoundMiddleware = require(`${__dirname}/middleware/not-found`)
const errorHandlerMiddleware = require(`${__dirname}/middleware/error-handler`)

// ====== PRODUCTS ROUTES ======== //
// '/' -> route
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})
// '/api/v1/products' -> route
app.use('/api/v1/products', productsRouter)

// ====== ERROR ROUTES ======== //
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


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