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
        console.log(path.join(__dirname, '..', 'img'))
        const products = await prisma.product.findMany({
            include: {
                brand: true
            }
        });
        res.status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
    } catch (e) {
        console.log(e)
    }
});

app.listen(port, () => {
    console.log('App is running.')
})