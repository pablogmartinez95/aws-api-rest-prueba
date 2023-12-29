const express = require('express');
const app = express();

app.use(express.json());

const ITEMS_LIST = [];

app.get('/', (req, res) => {
    res.send(ITEMS_LIST);
});

app.post('/', (req, res) => {
    const item = req.body.item;

    ITEMS_LIST.push({
        id: ITEMS_LIST.length + 1,
        item
    });

    res.send(ITEMS_LIST);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});