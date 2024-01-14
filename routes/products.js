// ====== PACKAGES ======== //

// Requiring the 'express' module
const express = require('express');
// Creating an instance of an Express Router
const router = express.Router();
// Requiring the 'products' controller functions
const {
    getAllProductsStatic,
    getAllProducts
} = require('../controllers/products');

// ====== ROUTES ======== //

/** Route for retrieving all products and creating a new product
 * @route {GET} /products
 */
router.route('/').get(getAllProducts)

/** Route for retrieving all product static
 * @route {GET} /products
 */
router.route('/static').get(getAllProductsStatic)


// ====== EXPORT ======== //
module.exports = router