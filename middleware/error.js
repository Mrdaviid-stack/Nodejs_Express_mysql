const ErrorResponse = require('../utils/errorResponse');
/**
 * 
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.errorHandler = (err, req, res, next) => {
    let error = { ...err };

    console.log(err);

    error.message = err.message;


    res.status(error.status || 500).json({
        success: false,
        error: error.message || 'Server Error.'
    })
}