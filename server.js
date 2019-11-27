const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// routes
app.get("/", (req, res) => {
    connection.query("SELECT * FROM burgers", (err, data) => {
        if (err) throw err;
        res.render("index", { burgers: data });
    });
});

app.post("/", (req, res) => {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)",
    [req.body.burger_name], (err, result) => {
        if (err) throw err;
    });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});