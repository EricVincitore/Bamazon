var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "developer",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readInventory()
});

function readInventory() {
    connection.query("SELECT * FROM bamazon_db.inventory", function (err, res) {
        if (err) throw err;
        console.table(res);
    });
};



//make csv of inventory
//make database
//import csv to database
//install json, inquirer and sql
//connect javascript to sql
//run bamazon.js to display all items currently in stock with prices
//prompt user for id of item they would like then the quantity they would like to buy
//check inventory amount so user cant buy more than current inventory
//show total cost of purchase
//edit inventory after user buys items
//make read me