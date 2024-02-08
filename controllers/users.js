const ErrorResponse = require('../utils/errorResponse');
const Users = require('../models/Users');

/**
 * @description get all stored users.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.getUsers = async (req, res, next) => {
    try {
        const users = await Users.query();
        if (!users) return next(new ErrorResponse(`error`, 401))
        delete users.password;
        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (error) {
        next(error);
    }
}

/**
 * @description get user by uuid.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.getUser = async (req, res, next) => {
    try {
        const user = await Users.query().findById(req.params.id);
        if (!user) return next(new ErrorResponse(`error`, 401))
        delete user.password;
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
}


/**
 * @description creating new user.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.createUser = async (req, res, next) => {
    try {
        const user = await Users.query().insert(req.body);
        if (!user) return next(new ErrorResponse(`error`, 401))
        res.status(201).json({ success: true, message: 'Successfully Inserted!' });
    } catch (error) {
        next(error);
    }
}

/**
 * @description updated user by uuid.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.updateUser = async (req, res, next) => {
    try {
        const user = await Users.query().findById(req.params.id).patch(req.body);
        if (!user) return next(new ErrorResponse(`error`, 401))
        res.status(200).json({ success: true, message: 'Successfully Updated.' });
    } catch (error) {
        next(error);
    }
}

/**
 * @description delete user by uuid.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await Users.query().deleteById(req.params.id);
        if (!user) return next(new ErrorResponse(`error`, 401))
        res.status(200).json({ success: true, message: 'Successfully deleted.', data: {} });
    } catch (error) {
        next(error);
    }
}