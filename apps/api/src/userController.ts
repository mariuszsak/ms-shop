import express from 'express';
import {prisma} from "./index";

const router = express.Router();

router.get('/users', async (req: express.Request, res) => {
    const users = await prisma.user.findMany();
    res
        .status(200)
        .send(users);
});

export default router;