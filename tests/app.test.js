const request = require('supertest');
const app = require('../src/app');

describe('Gettin the application to run', () => {
	it('should return 200 when accesing the home route', async () => {
		const res = await request(app).get('/');

		expect(res.statusCode).toBe(200);
	});
	it('should return 200 when accesing the home route', async () => {
		await request(app).get('/').expect(200);
	});
});
