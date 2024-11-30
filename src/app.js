const Hapi = require('@hapi/hapi');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const createServer = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost',
    });

    server.route(userRoutes);

    return server;
};

module.exports = createServer;

if (require.main === module) {
    (async () => {
        const server = await createServer();
        await server.start();
        console.log(`Server running on ${server.info.uri}`);
    })();
}

const { sequelize } = require('./models');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
