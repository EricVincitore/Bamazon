var mysql = require("mysql");
var inquirer = require("inquirer");

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
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readInventory();
});

function readInventory() {
    connection.query("SELECT * FROM bamazon_db.inventory", function (err, res) {
        if (err) throw err;
        console.table(res);
        startSearch();
    });
};

function startSearch() {
    
    inquirer
        .prompt({
            name: "start",
            type: "confirm",
            message: "Welcome to Bamazon! Would you like to start shopping with us?" + "\n",
        })
        .then(function (answer) {
            switch (answer.start) {
                case true:
                    buy();
                    break;
            
                case false:
                    console.log("Have a good day!")
                    connection.end()
                    break;
            }
        });
};

function buy() {
    inquirer
        .prompt([
            {
                name: "start",
                type: "input",
                message: "What is the id number of the item you would like to purchase?" + "\n",
            },
            {
                name: "howMany",
                type: "input",
                message: "How many would you like to purchase?" + "\n"
            }
        ])
        .then(function (answer) {

            var invAmount = "SELECT * FROM bamazon_db.inventory WHERE ?";
            var updateAmount = "UPDATE bamazon_db.inventory SET Stock_Quantity = Stock_Quantity - " + answer.howMany + " WHERE ?";
            
            connection.query(invAmount, [{id: answer.start}], function (err, res) {
                if (err) throw err;

                if (answer.howMany > res[0].Stock_Quantity ) {
                    console.log("Sorry, we don't have that many in stock please try again with a different quantity.");
                    readInventory();
                } else {
                    var price = res[0].Price
                    var totalPrice = answer.howMany * price
                    console.log("Your total comes to $" + totalPrice ); 

                    connection.query(updateAmount, [{id: answer.start}], function (err, res) {
                        if (err) throw err;
                        console.log(res)
                        readInventory();
                    });
                };
            });

            
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