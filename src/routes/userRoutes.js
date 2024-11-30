const userController = require('../controllers/userController');
const Joi = require('@hapi/joi');

module.exports = [
    {
        method: 'POST',
        path: '/users',
        options: {
            validate: {
                payload: Joi.object({
                    username: Joi.string().min(3).required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().min(6).required(),
                }),
                failAction: (request, h, err) => {
                    throw err;
                },
            },
        },
        handler: userController.createUser,
    },
];
