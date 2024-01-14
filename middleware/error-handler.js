
/** Express middleware for handling errors and sending a standardized JSON response
 * @param {Error} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorHandlerMiddleware = async (err, req, res, next) => {
  // If the error is not a CustomAPIError, respond with a generic 500 Internal Server Error
  return res.status(500).json({
    message: 'Something went wrong, please try again!' // Error message describing the issue
  });
}

module.exports = errorHandlerMiddleware
