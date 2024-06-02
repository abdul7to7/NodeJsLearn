const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home" || req.url == "/") {
    res.end("Welcome Home");
  } else if (req.url == "/about") {
    res.end("Welcome to About Us page");
  } else if (req.url == "/node") {
    res.end("Welcome to my Node Js project");
  } else {
    res.end("page not found");
  }
});

server.listen(4000, () => {
  console.log("Server running at http://127.0.0.1:4000/");
});
