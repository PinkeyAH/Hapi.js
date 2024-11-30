const createServer = require('../src/app');

let server;

beforeAll(async () => {
    server = await createServer();
    await server.start();
});

afterAll(async () => {
    await server.stop();
});

describe('POST /users', () => {
    it('should create a user', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/users',
            payload: {
                username: 'pinky',
                email: 'pinky@gmail.com',
                password: '123456',
            },
        });

        expect(res.statusCode).toBe(201);
        const responseBody = JSON.parse(res.payload);
        expect(responseBody.success).toBe(true);
    });
});
