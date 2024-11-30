const bcrypt = require('bcrypt');
// const { User } = require('../models/user');
const { User } = require('../models');

exports.createUser = async (request, h) => {
    try {
        const { username, email, password } = request.payload;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return h.response({ success: true, user: newUser }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ success: false, message: error.message }).code(500);
    }
};
