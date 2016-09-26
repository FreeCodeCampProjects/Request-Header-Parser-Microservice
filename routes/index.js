/* Node modules:
 *************************************************************/

var express = require('express');
var router = express.Router();


/* Root route returns JSON object:
 *************************************************************/

router.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  var language  = req.headers['accept-language'];
  var userAgent = req.headers['user-agent'];

  res.json({
    ipaddress: ip,
    language: language.split(',')[0],
    software: userAgent.match(/\((.*?)\)/)[1]
  });
});


module.exports = router;