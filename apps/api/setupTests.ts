import {app, prisma} from "./src";
// let app;
// beforeEach(() => { app = require('../src'); });
afterEach(() => {

    prisma.$disconnect();
    app.terminate()
})
