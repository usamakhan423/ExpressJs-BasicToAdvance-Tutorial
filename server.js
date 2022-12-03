const express = require('express');
const path = require('path');
const mainRouter = require('./routes/fileRoutes')
const productRouter = require('./routes/product')
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.json());

app.use(mainRouter);

app.use(productRouter);

// console.log(app.get('view engine'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})