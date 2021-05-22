import {app} from '../src'
import supertest from "supertest";

describe("endpoint tests", () => {
    it("should return `app works`", async () => {
        await supertest(app)
            .get("/")
            .expect(200);
    })
})

