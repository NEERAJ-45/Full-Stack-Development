const http = require("node:http");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  console.log(res.getHeaders());
  res.end("<h1><i>This is my Ninja Way</i></h1>"); 

}) ;
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
