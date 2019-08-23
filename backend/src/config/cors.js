module.exports = function (req, res, next) {
    res.header('Access-Control-Allow', '*')
    res.header('Access-Control-Allow', 'GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-with,Content-Type,Accept')

    next()
}