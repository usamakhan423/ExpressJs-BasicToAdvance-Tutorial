const router = require('express').Router();
const products = require('../productData');

router.get('/product', (req, res) => {
    res.render('product', {
        title: 'Product page'
    })
})

router.get('/api/products', (req, res) => {
    res.json(products);
})

router.post('/api/products', (req, res) => {
    const { name, price } = req.body;

    if(!name || !price) {
        return res.status(422).json({ error: 'All fields are required.' });
    }

    const product = {
        name,
        price,
        id: new Date().getTime().toString()
    }

    products.push(product)
    res.json(product)
});





module.exports = router;