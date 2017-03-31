var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

function bunk(options) {
  options = Object.assign({},bunk.default,options)
  var serve = serveStatic(options.dir)

  // Create server
  var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })

  // Listen
  console.log("bunk: serving", options.dir, "on port", options.port)
  server.listen(options.port)
}

var port = 7070, dir = '.'
bunk.default = {port,dir}

module.exports = bunk;
