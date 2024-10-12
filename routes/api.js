const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.use(express.json());

router.get('/getProductsList', async (req, res) => {

    if (req.query.type === undefined) {
        res.sendStatus(500);
    }
    else {
        let data = null;
        if (req.query.type === 'womens') {
            data = await fs.readFile('./src/products/womens.json', 'utf-8');
        }
        res.json(JSON.parse(data));
    }
});

module.exports = router;