const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log(res.url, res.method);

  // lodash
  // const num = _.random(0, 20);
  // console.log(num);

  const greet = _.once(() => console.log("hello world"));
  greet();

  // set header content-type
  res.setHeader("Content-Type", "text/html");

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  // res.end();

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;

      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-blah":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send html file
  // fs.readFile(path.join(__dirname, 'views', 'index.html'), (err, data) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on :3000");
});

/*
    Status Codes

        * Status codes describe the type of response sent to the browser

            200 - OK
            301 - Resource moved
            404 - Not found
            500 - Internal Server Error

            100 Range - informational responses
            200 Range - success codes
            300 Range - codes for redirects
            400 Range - user or client error
            500 Range - server error codes
*/
