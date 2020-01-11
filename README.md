# Bamazon

This app allows the user to shop a database of products through their command line or terminal.

## Overview

Welcome to Bamazon! This app lets the user shop for items from the Bamazon database and complete purchases of interesting products from one location.

### Instructions

1. After you have pulled hte repository navigate to the folder in your terminal and run the following commands to install node and the required dependencies.
    * npn init -y
        * This downloads the node package.
    * npm install 
        * This will install the node package.
    * npm install console.table
        * This will download and install the console.table package to view the inventory list as a table in the terminal.
    * npm install inquirer 
        * This will download and install the package require to prompt the questions for shopping the inventory.
    * npm install mysql 
        * This will download and install the package needed to interact with the database of products currently in stock 

2. After all node packages have been installed navigate to the bamazonCustomer.js file in your terminal and run the following command 
    * node bamazonCustomer.js
    * The terminal should display the current inventory and a prompt asking if you would like to start shopping
    * Type "y" to start shopping or "n" to exit the app.
![Starting Screen and Prompt](images/startingScreenAndPrompt.PNG)

3. The app with then ask for the id of the product you would like to purchase. Type the id number of the product you would like to purchase.

4. The app will now ask how many of the product you would like to purchase. Type the quantity you are looking for as a number. The total price for your purchase will then be displayed.
![Purchase Questions](images/purchaseQuestions.PNG)
    * If the user tries to purchase a quantity greater than whats in stock the app will let them know and restart the purchasing steps.
![Purchase Quantity is too great](images/stock.PNG)

5. After a successful purchase is made the database will be updated with the new stock quantities and the starting screen will be displayed to the user again.
![Updated Stock Screen](images/updatedStock.PNG)

## Links

### Git-Hub Page

https://github.com/EricVincitore/Bamazon

## Technologies Used

* Javascript
* Node.js
* MySQL
* Inquirer
* console.table

## Development Role

This app was developed by Eric Vincitore.