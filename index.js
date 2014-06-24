var http = require('http'),
    httpProxy = require('http-proxy'),
    port = process.env.OPENSHIFT_NODEJS_PORT || 8000,
    ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(port);

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
