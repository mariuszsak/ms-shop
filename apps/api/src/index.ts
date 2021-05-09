import {PrismaClient} from "@prisma/client";
import express from 'express';
import * as path from "path";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

const dir = path.join(__dirname, '..', 'img')
app.use('/img', express.static(dir))

app.get('/products', async (req: express.Request, res) => {
    try {
        const products = await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                brand: {
                    select: {
                        brand_name: true
                    }
                },
                gender: {
                    select: {
                        gender_name: true
                    }
                },
                type: {
                    select: {
                        type_name: true
                    }
                }
            }
        });
        res.status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
    } catch (e) {
        console.log(e)
    }
});

app.get(`/custom/:glasstype/:gender`, async (req: express.Request, res) => {
    const {glasstype, gender} = req.params;

    try {
        const products = await prisma.product.findMany({
            where: {
                type: glasstype,
                gender: gender
            }
        });
        res.status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
    } catch (e) {
        console.log(e)
    }
});

app.get('/types', async (req: express.Request, res) => {
    try {
        const types = await prisma.$queryRaw`SELECT enum_range(NULL::"Type") AS glassType`;
        console.log(types)
        res.status(200)
            .send(types);
    } catch (e) {
        console.log(e)
    }
});

app.listen(port, () => {
    console.log('App is running.')
})