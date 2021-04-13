const http = require('http')

const port = 80

const server = http.createServer((request, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  /* res.write('Hello World\n');
  res.end('Version: ' + process.env.NODE_VERSION + '\n'); */

  var url = req.url;
      
  if(url ==='/about') {
      res.write(' Welcome to about us page'); 
      res.end(); 
  }
  else if(url ==='/contact') {
      res.write(' Welcome to contact us page'); 
      res.end(); 
  }
  else if(url ==='/test') {
    res.write('I am a sweet test'); 
    res.end(); 
}
  else {
      res.write('Hello World!'); 
      res.end(); 
  }
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
