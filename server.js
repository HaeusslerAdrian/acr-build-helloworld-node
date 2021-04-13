const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  
  var url = req.url;
      
  if(url ==='/about') {
      res.write(' Welcome to about us page'); 
      res.end(); 
  }
  else if(url ==='/contact') {
      res.write(' Welcome to contact us page'); 
      res.end(); 
  }
  else {
      res.write('Hello World!'); 
      res.end(); 
  }
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
