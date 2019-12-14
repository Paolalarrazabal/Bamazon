const mysql = require ("mysql"); 
const inquirer = require ("inquirer"); 


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "TT11lala:*", 
    database: "bamazon"
});




queryAllProducts();
    
    


function queryAllProducts() {

    connection.connect(function(err){
        if (err) throw err; 
        console.log(`connected as id ${connection.threadId}`); 
    
    connection.query("SELECT * FROM `products`", function (err, res) {
        if (err) throw err; 
            
        for (let i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price} | ${res[i].stock_quantity}` );
        }
        console.log("---------------------------")
    
        productSelection(); 
        
            
    });
});
    
}

function productSelection() {
    inquirer
    .prompt([ 
        {
            type: "input",
            message: "Hi, what is the product ID?",
            name: "productID",   
            filter: Number
        }, 
        {
            type: "input",
            message: "How many of these bad boys would you like?",
            name: "productQuantity", 
            filter: Number
        }
    ])
    .then(function (user) {

        let purchaseAmount = user.productQuantity; 
        console.log("you entered " + user.productID); 

        const query = connection.query("SELECT * FROM `products` WHERE `item_id` =" + user.productID, function (err, res) {
        if (err) throw err; 
        
        for (let i = 0; i < res.length; i++) {
            console.log(`This is your product: ${res[i].product_name}`);
        

            if (purchaseAmount <= res[0].stock_quantity) {

                totalPrice = purchaseAmount * res[i].price; 

                console.log(`Your total is: ${totalPrice}, Thank you for shopping with us`);
            } else {
                console.log(`Sorry, we do not have enough ${res[i].product_name} in stock to fulfill this order` );
            }
           
         }

         

        

            
    }); 

        
    
    console.log(query.sql);
    connection.end();  
     
 

    });

}







