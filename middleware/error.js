const ErrorResponse = require('../utils/errorResponse');
const {
    ValidationError,
    NotFoundError,
    DBError,
    ConstraintViolationError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationError,
    CheckViolationError,
    DataError
  } = require('objection');

/**
 * 
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    if (err instanceof UniqueViolationError) {
        return res.status(409).send({
            success: false,
            message: `Duplicate ${constraintFormmating(err.constraint)} please try again.`,
        });
    }

    if (error.statusCode === 404) {
        const message = `User not found`;
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

/** @param {String} string */
function constraintFormmating(string) {
    const char = string.replace(/[._]/g," ").split(" ")[2]
    return char.charAt(0).toUpperCase() + char.slice(1);
}

module.exports = errorHandler;
