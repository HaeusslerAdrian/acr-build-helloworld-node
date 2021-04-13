const http = require('http')

const port = 80

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  /* res.write('Hello World\n');
  res.end('Version: ' + process.env.NODE_VERSION + '\n'); */

  let url = req.url;
  console.log(url);
      
  if(url ==='/about') {
    res.write(' Welcome to about us page'); 
  }
  else if(url ==='/contact') {
    res.write(' Welcome to contact us page'); 
  }
  else if(url ==='/test') {
    res.write('I am a sweet test'); 
  }
  else {
    res.write('Hello World!');
  }
  res.end('Version: ' + process.env.NODE_VERSION + '\n');
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
