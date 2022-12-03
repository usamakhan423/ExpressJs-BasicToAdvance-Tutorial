function apiKey(req, res, next) {
    const api_key = '12345678';
    console.log(req.query.api_key)
    if (req.query.api_key && req.query.api_key === api_key) {
        next();
    } else {
        res.send('Not found! ')
    }
    
}





module.exports = apiKey;