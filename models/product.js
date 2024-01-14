// ====== PACKAGES ======== //
const mongoose = require('mongoose');

// ====== SCHEMA ======== //
const ProductSchema = new mongoose.Schema({
    // Name of the product (assumed to be a string)
    name: {
        type: String, // Data type for the product name
        required: [true, 'Product name must be provided'] // Validation for a required product name
    },
    // Price of the product (assumed to be a number)
    price: {
        type: Number, // Data type for the product price
        required: [true, 'Product price must be provided'] // Validation for a required product price
    },
    // Featured status of the product (assumed to be a boolean)
    featured: {
        type: Boolean, // Data type for the featured status
        default: false // Default value for featured status
    },
    // Rating of the product (assumed to be a number)
    rating: {
        type: Number, // Data type for the product rating
        default: 4.5 // Default value for the product rating
    },
    // Creation date of the product (assumed to be a date)
    createdAt: {
        type: Date, // Data type for the creation date
        default: Date.now() // Default value for the creation date
    },
    // Company of the product (assumed to be a string with limited values)
    company: {
        type: String, // Data type for the product company
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'], // Allowed values for the company
            message: '{VALUE} is not supported' // Error message for unsupported company values
        }
    }
})

// ====== EXPORT ======== //
module.exports = mongoose.model('Product', ProductSchema);
