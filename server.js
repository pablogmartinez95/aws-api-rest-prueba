const express = require('express');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

const ITEMS_LIST = [];

app.get('/', (req, res) => {
    res.send(ITEMS_LIST);
});

app.post('/', (req, res) => {
    const item = req.body.item;

    console.log(`El item es ${item}`);

    ITEMS_LIST.push({
        id: ITEMS_LIST.length + 1,
        item
    });

    res.send({
        status: 200,
        message: 'Item agregado correctamente'
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});