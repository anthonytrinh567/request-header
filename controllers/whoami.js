var ipware = require('ipware')().get_ip;

module.exports.homePage = function (req, res, next) {
    res.render('index', {
        title: 'Who Am I? Click below to find out a little about yourself!'
    });
};
module.exports.info = function (req, res, next) {
    res.json({
        ipaddress: (ipware(req).clientIp || req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress)
        , language: req.headers["accept-language"].split(',')[0]
        , software: req.headers["user-agent"]
    });
};