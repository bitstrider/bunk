var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

function bunk(options) {
  if(options.dir==undefined) options.dir = bunk.default.DIR
  if(options.port==undefined) options.port = bunk.default.PORT
  var serve = serveStatic(options.dir)

  // Create server
  var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })

  // Listen
  console.log("bunk: serving", options.dir, "on port", options.port)
  server.listen(options.port)
}

var PORT = 7070, DIR = '.'
bunk.default = {PORT,DIR}

module.exports = bunk;
