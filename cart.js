///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const cartTotal = cart.reduce(function(prevPrice, currItem) {return prevPrice + currItem.price}, 0);

console.log(cartTotal)

// cart.reduce((prevPrice, currPrice) => ({price: prevPrice.price + currPrice.price}));






//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (incartTotal, couponValue, tax) => {
    let newcartTotal = incartTotal * (1 + tax);
    if(couponValue = true) {
        return newcartTotal - couponValue
    }
    return newcartTotal
}

console.log(calcFinalPrice(cartTotal, 5, .075))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    customer obj items
    
    name: (String)
    regular: Is this customer a regualr? (Bool)
    favMeal: most ordered object. only applicable if the customer has come more than once, (string)
    avgSpent: What is the average amount they spend. only applicable if the customer has come more than once, (number)
    Phone: (string)


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Daniel',
    regular: true,
    favMeal: 'Box Combo, sub coleslaw for toast, toast bobbed',
    avgSpent: 18.76,
    phone: '442-555-5555'
}
