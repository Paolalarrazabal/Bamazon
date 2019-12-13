const mysql = require ("mysql"); 
const inquirer = require ("inquirer"); 


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "TT11lala:*", 
    database: "bamazon"
});


connection.connect(function(err){
    if (err) throw err; 
    console.log(`connected as id ${connection.threadId}`); 
    queryAllProducts()
    
    
}); 

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err; 
            
        for (let i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price} | ${res[i].stock_quantity}` );
        }
        console.log("---------------------------")

        connection.end();
            
    })
}