const request = require('supertest');
const baseURL = "http://localhost:4000";

describe("GET /healthy", () => {
    it('should return 200', async () => {
        const response = await request(baseURL).get("/healthy");
        expect(response.statusCode).toBe(200);
    })

    it('should return healthy', async () => {
        const response = await request(baseURL).get('/healthy');
        expect(response.body.data).toBe('healthy')
    })
})