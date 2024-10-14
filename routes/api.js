const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.use(express.json());

router.get('/getProductsList', async (req, res) => {

    if (req.query.type === undefined) {
        res.sendStatus(500);
    }
    else {
        res.json(JSON.parse(await fs.readFile(`./src/products/${req.query.type}.json`, 'utf-8')));
    }
});

module.exports = router;