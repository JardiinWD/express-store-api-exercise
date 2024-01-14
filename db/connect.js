// ====== PACKAGES ======== //
const mongoose = require('mongoose'); // MONGOOSE
const dotenv = require('dotenv'); // DOTENV
dotenv.config({ path: '../config.env' })

// ====== MONGODB ======== //

/** Function to establish a connection to the MongoDB database
 * @param {string} url - MongoDB connection string.
 * @returns {Promise} A promise representing the connection to the database.
 */
const connectDB = (url) => {
  // Connecting to the MongoDB database using the provided connection string
  return mongoose.connect(url, {
    useNewUrlParser: true,       // Use the new URL parser
    useCreateIndex: true,        // Ensure indexes are created when needed
    useFindAndModify: false,     // Disable 'findOneAndUpdate' and 'findOneAndDelete' to use 'updateOne' and 'deleteOne'
    useUnifiedTopology: true     // Use the new Server Discovery and Monitoring engine
  }).then(() => {
    console.log(`MongoDB database's (${process.env.MONGO_DB_DATABASE}) is successfully connected`);
  })
}

// ====== EXPORTS ======== //
module.exports = connectDB;

