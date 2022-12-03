const router = require('express').Router();
const apiKeyMiddleware = require('../middleWare/apiKey');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'My home page'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'My about page'
    });
})

router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/img.jpg')
})

// router.get('/api/products', apiKeyMiddleware,(req, res) => {
//     res.json([
//         {
//             id: 123,
//             name: 'Opera'
//         },
//         {
//             id: 125,
//             name: 'Chrome'
//         }
//     ])
// })

router.get('/users', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'Usama khan',
            email: 'uk@gmail.com',
            password: '9911323yx'
        }
    ])
})




module.exports = router;