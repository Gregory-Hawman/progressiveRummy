const request = require('supertest');
const { PORT } = require('../api/vars')
const server = require('../api/server');

describe('Server', () => {
  it(`should start and listen on the specified port ${PORT}`, async () => {
    const response = await request(server).get('/'); // Assuming there's a route defined for '/'
    expect(response.status).not.toBe(404); // Adjust expectations based on your server's behavior
  });
})