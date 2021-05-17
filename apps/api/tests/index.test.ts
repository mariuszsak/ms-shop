import {app} from '../src'
import request from 'supertest';

describe("endpoint tests", () => {

    let server, agent;

    beforeEach(async (done) => {
        server = app.listen(4000, (err) => {
            if (err) return done(err);
            agent = request.agent(server);
            done();
        });
    })

    afterEach((done) => server && server.close(done))

    it("should return helloworld", async () => {
        await agent
            .get("/")
            .expect(200)
    })

    it("should return products", async () => {
        await agent
            .get("/products")
            .expect(200)
    })

    it("should return types", async () => {
        await agent
            .get("/types")
            .expect(200)
    })

    it("should return something", async () => {
        await agent
            .get("/custom/Eyeglasses/Unisex")
            .expect(200)
    })

})

