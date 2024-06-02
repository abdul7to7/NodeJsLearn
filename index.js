const http = require("http");
const handler = require("./routes");

const server = http.createServer(handler);

server.listen(4000, () => {
  console.log("Server running at http://127.0.0.1:4000/");
});
