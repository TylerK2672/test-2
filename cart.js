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

function returnSum(total, nextAddition)
{
    return total + nextAddition.price
}

const summedPrice = cart.reduce(returnSum, 0)

console.log(summedPrice)


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
function calcFinalPrice(cartTotal, couponValue, tax)
{
    return cartTotal + (cartTotal * tax) - couponValue
}

console.log(calcFinalPrice(summedPrice, 2, .06))


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
    CUSTOMER OBJECT

    ID(int) - to differentiate one customer from another (because an id is a number)
    Name(string) - to be able to customize messages to the customer (because a name is a string)
    Age(int) - to be able to accomodate to customers wants (because age is a number)
    Gender(int) - to be able to accomodate to customers wants (so that in the database the computer wont differentiate 'man', 'male' and 'guy' and will include them in the same section)
    Past Orders(array of strings) - to be able to make informed decisions on what to offer the guest (to keep track of all of their past orders)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = 
{
    idNum: 1,
    name: 'Tyler',
    Age: 21,
    Gender: 1,
    pastOrders: ['Cheeseburger', 'Double Bacon Cheeseburger', 'Cheeseburger']
}
