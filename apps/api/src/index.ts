import {PrismaClient} from "@prisma/client";
import express from 'express';
import * as path from "path";
import controller from "./dummyController";

export const prisma = new PrismaClient();

export const app = express();

const dir = path.join(__dirname, '..', 'img');
app.use('/img', express.static(dir));
app.use('/', controller);

app.get('/products', async (req: express.Request, res: express.Response) => {
    console.log('x')
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
        res
            .status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));

    }
);

app.get(`/custom/:type/:gender`, async (req: express.Request, res) => {
        const {type, gender} = req.params;

        const products = await prisma.product.findMany({
            where: {
                OR: [
                    {
                        gender: {
                            gender_name: {
                                contains: gender
                            }
                        },
                        type: {
                            type_name: {
                                contains: type
                            }
                        }
                    }
                ]
            },
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
        res
            .status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
    }
);

app.get('/types', async (req: express.Request, res) => {
        const types = await prisma.glassType.findMany();
        res
            .status(200)
            .send(types);
    }
);