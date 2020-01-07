var mysql = require("mysql")
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
})

connection.connect(function (err) {
    if (err) throw err
    console.log("connected as id " + connection.threadId)
    readInventory()
    startSearch()
})

function readInventory() {
    connection.query("SELECT * FROM bamazon_db.inventory", function (err, res) {
        if (err) throw err
        console.table(res)
    })
}

function startSearch() {
    inquirer
        .prompt({
            name: "start",
            type: "input",
            message: "Welcome to Bamazon! What is the id of the item you would like to buy?" + "\n",
        })
        .then(function (answer) {
            connection.query("SELECT * FROM bamazon_db.inventory WHERE ?", { id: answer.start }, function (err, res) {
                if (err) throw err
                console.table(res)
            })
            correctItem()
        })
}

function correctItem () {
    inquirer
    .prompt({
        name: "correct",
        type: "confirm",
        message: "Is this the product you would like to purchase?" + "\n"
    })
    .then(function (answer) {
        switch (answer.correct) {
            case "Y":
                console.log("yes")
                break;
        
            case "n":
                console.log("no")
                break;
        }
    })
}

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