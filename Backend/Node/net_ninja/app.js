const express = require("express");
const path = require("path");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// if my view folder is named someting or place something to look that
app.set('views');
// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<p>Home Page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
  // res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  // res.send("<p>About Page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

// 404 page
app.use((req, res) => {
  // res.status(404).send("<p>Not Found</p>");
  res.status(404).sendFile("./views/404.html", { root: __dirname });
  console.log("testing");
});
