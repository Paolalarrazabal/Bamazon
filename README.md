# Bamazon

### What is Bamazon? :octocat:

Bamazon is an Amazon-like storefront app that utilizes MySQL and Inquirer npm packages to take in orders while simultaneously updating the stores inventory. The database AKA the store inventory contains 10 different types of products in various quantities. 

### Information about the products include: 

* item_id (unique id for each product)

* product_name (Name of product)

* department_name

* price (cost to customer)

* stock_quantity (how much of the product is available in stores)

### The Node app prompts the user with two questions. 

![Screenshot 1]
(https://raw.githubusercontent.com/Paolalarrazabal/Bamazon/master/gifs%5Cscreenshots/ss1.png)

After the customer specifies the product ID (located in the first column of the products table) Bamazon will ask how many units of the product they would like to buy. 

![Screenshot 2]
(https://raw.githubusercontent.com/Paolalarrazabal/Bamazon/master/gifs%5Cscreenshots/ss2.png)

Bamazon will fullfil the order as long as there is enough items in stock. Bamazon also, informs the customer with how much their total is, what they ordered and an updated inventory. The app will also prompt the customer again to make another purchase. 

![Screenshot 3]
(https://raw.githubusercontent.com/Paolalarrazabal/Bamazon/master/gifs%5Cscreenshots/ss3.png)

Keep in mind that if the customer requests more items than what is in stock, then the app will prevent the order from being processed. as shown below. 

![Screenshot 4]
(https://raw.githubusercontent.com/Paolalarrazabal/Bamazon/master/gifs%5Cscreenshots/ss4.png)

### :large_orange_diamond: Getting Started 

1. Clone this repository and save it.
2. Open Terminal or Bash and navigate to where ever it was saved. 
3. Once there, install the required packages using `npm install` into the command line. 
4. Create a database via MySQL Workbench called `bamazon` 
5. Copy the contents of schema.sql file into MySQL and run. 
6. Go ahead and use Bamazon! 


