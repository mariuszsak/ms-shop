import {PrismaClient} from "@prisma/client";
import express from 'express';

const prisma: any = new PrismaClient();

const app: any = express();
const port: number = 3000;

app.get('/products', async (req: express.Request, res) => {
    const products = await prisma.product.findMany();
    console.log(products);
    res.send(
        JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
});

app.listen(port, () => {
    console.log('App is running.')
})