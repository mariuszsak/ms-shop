import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res) => {
    res
        .status(200)
        .send('App works!');
});

export default router;