const request = require('supertest');
const dbHandler = require('../helpers/dbHandler');
const app = require('../../main');
const DBSeeder = require('../helpers/dbSeeder');

beforeAll(async () => {
  await dbHandler.connect();
});

beforeEach(async () => {
  const dbUrl = await dbHandler.getUri();
  const dbName = await dbHandler.getDbName();
  const seeder = new DBSeeder(dbUrl, dbName);

  await seeder.seed();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

describe('/foo', () => {
  test('It should response the GET / ', async () => {
    const response = await request(app).get('/api/foo/?id=5cece9d5d86a7c699dcd7f12');
    expect(response.statusCode).toBe(200);
  });
});
