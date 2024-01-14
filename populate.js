// ====== PACKAGES ======== //

// DOTENV
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }) // Load environment variables from the config file
// CONNECT DB HANDLER
const connectDB = require('./db/connect'); // Import the database connection handler

// ====== PRODUCTS ======== //

// PRODUCT SCHEMA
const Product = require('./models/product') // Import the Product model
// JSON PRODUCTS
const jsonProducts = require('./products.json') // Import JSON data for products

// ====== MONGODB ======== //
const mongoDbUri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
// MongoDB connection URI constructed using environment variables

// ====== DB SEEDING ======== //
const seedingDB = async () => {
    try {
        // Connect to the MongoDB database
        await connectDB(mongoDbUri)
        // Clear existing data (use cautiously)
        // -> AT YOUR OWN RISK <- await Product.deleteMany()
        // Insert seed data into the database
        await Product.create(jsonProducts)
        console.log(`Data injected correctly into the database : ${process.env.MONGO_DB_DATABASE}`);
        // Exit the script with a success code
        process.exit(0)
    } catch (error) {
        // Handle errors during seeding
        console.log(error.message);
        // Exit the script with an error code
        process.exit(1)
    }
}

// Run the seeding function
seedingDB()
