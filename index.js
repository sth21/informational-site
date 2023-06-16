const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const root = "/views";
  let path = "";
  let statusCode = 200;

  switch (url) {
    case "/":
      path = root.concat("/index.html");
      break;
    case "/about":
      path = root.concat("/about.html");
      break;
    case "/contact-me":
      path = root.concat("/contact-me.html");
      break;
    default:
      path = root.concat("/404.html");
      statusCode = 404;
      break;
  }

  path = __dirname.concat(path);

  fs.readFile(path, (err, content) => {
    if (err) {
      console.log(err);
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = statusCode;
      res.write(content);
      res.end();
    }
  });
});

server.listen(8080, (err, content) =>
  console.log("Server listening to port 8080")
);
