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

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "burgers_db"
    });
};

connection.connect(err => {
    if (err) throw err;
});

// routes
app.get("/", (req, res) => {
    connection.query("SELECT * FROM burgers", (err, data) => {
        if (err) throw err;
        res.render("index", { burgers: data });
    });
});

app.put("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("UPDATE burgers SET devoured = ? WHERE ?", [1, {id: id}], (err, data) => {
        if (err) throw err;
        res.end();
    });
});

app.post("/:burger", (req, res) => {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)",
    [req.body.burger_name], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

app.delete("/:id", (req, res) => {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});