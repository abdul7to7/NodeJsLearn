const fs = require("fs");

const handler = (req, res) => {
  if (req.url == "/home" || req.url == "/") {
    res.write("<html>");
    res.write("<head><title>Enter Data</title></head>");
    res.write("<body>");
    res.write(`<p>${fs.readFileSync("./messages.txt").toString()}</p>`);
    res.write(
      '<form action="/message" method="post"><input type="text" name="message"><button>send</button></form>'
    );
    res.write("</body>");
    res.end();
  } else if (req.url == "/message" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("messages.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.end("page not found");
  }
};

module.exports = handler;

//exporting as an objcet
// module.exports ={
//     handler: handler,
//     someText: 'some text'
// }

//export without module. with also work es6
// exports= handler
