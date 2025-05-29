const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));

const bugs = [
  { id: 1, title: "Login button not working" },
  { id: 2, title: "Profile upload error" },
  { id: 3, title: "Page crash on submit" }
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login", error: null });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.redirect("/bugs");
  } else {
    res.render("login", { title: "Login", error: "Invalid username or password" });
  }
});

app.get("/bugs", (req, res) => {
  res.render("bugs", { title: "Bug List", bugs: bugs });
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});

app.listen(8000)