import {app} from '../src'
import supertest from "supertest";

describe("endpoint tests", () => {

    it("should return fake products", async () => {
        await supertest(app)
            .get("/products")
            .expect(200)
    })

    it("should return types", async () => {
        await supertest(app)
            .get("/types")
            .expect(200)
    })

    it("should return something", async () => {
        await supertest(app)
            .get("/custom/Eyeglasses/Unisex")
            .expect(200)
    })
})

