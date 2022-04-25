const express = require('express');
const Api = express.Router();
const fs = require('fs');


Api.get('/product', (req, res) => {
    // contoh seumpama dari database
    let product = JSON.parse(fs.readFileSync('./api_product.json', 'utf8'));
    res.json(product);
});


module.exports = { Api }