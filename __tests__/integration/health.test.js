const request = require('supertest');
const dbHandler = require('../helpers/dbHandler');
const app = require('../../main');

beforeAll(async () => {
  await dbHandler.connect();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
  });
});
