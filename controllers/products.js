// ====== CONTROLLERS ======== //

/** Controller function for handling a static route to test products
 * @param {Object} req - Express request object. Contains information about the client's request.
 * @param {Object} res - Express response object. Used to send a response to the client.
 */
const getAllProductsStatic = async (req, res) => {
    // Respond with a 200 status and a JSON message for the static product testing route
    res.status(200).json({
        status: 'success',
        message: 'Product testing route'
    });
}

/** Controller function for handling a route to retrieve all products
 * @param {Object} req - Express request object. Contains information about the client's request.
 * @param {Object} res - Express response object. Used to send a response to the client.
 */
const getAllProducts = async (req, res) => {
    // Respond with a 200 status and a JSON message for the product route
    res.status(200).json({
        status: 'success',
        message: 'Product route'
    });
}

// ====== EXPORT ======== //

// Export the controller functions for external use
module.exports = {
    getAllProductsStatic,
    getAllProducts
}
