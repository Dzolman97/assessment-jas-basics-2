///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = [
    {
        name: 'Hawaiian Pizza',
        price: 13.99,
        category: 'Entree',
        popularity: 10,
        rating: 8,
        tags:  ['family Fav', 'Kids', 'Local fav', 'Extra ham option']
    }
]




//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza[0].popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza[0].tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const newPrice = 10.99

pizza[0].price = newPrice

// console.log(pizza)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

const newCategory = 'Appetizer'

pizza[0].category = newCategory

// console.log(pizza)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    {
        name: 'Cheese Pizza',
        price: 9.99,
        category: 'Entree',
        popularity: 10,
        rating: 10,
        tags: ['10 out of 10', 'Family fav', 'base option']
    },
    {
        name: 'BBQ chicken',
        price: 13.99,
        category: 'Entree',
        popularity: 8,
        rating: 8,
        tags: ['Quality Chicken', 'Additional toppings', 'local fav']
    },
    {
        name: 'Honey BBQ Wings',
        price: 8.99,
        category: 'Appetizer',
        popularity: 6,
        rating: 8,
        tags: ['Special Honey Glaze', 'Mothers fav', 'Boneless available']
    },
    {
        name: 'Buffalo Wings',
        price: 8.99,
        category: 'Appetizer',
        popularity: 9,
        rating: 8,
        tags: ['Very own buffalo blend', 'Game night', 'Boneless available']
    },

]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE


const filteredFood = foodArr.filter(wings => wings.tags.includes('Boneless available'))

console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little more flexible than just filtering for one value. We want to be able to filter for food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty` that takes in three arguments: `property`, `number`, and `type. 

    The property will be a string (rating, popularity, or price)

    The number will be the number that you want to compare against 

    The type should be 'above' or 'below' to indicate whether you want to get foods with values that are above or below the given number for the given property

    Inside the function, create a variable to hold a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, if it is, return objects whose value for the given property is greater than the `number` passed in

        If the type is `below`, return objects whose value for the given property is less than the `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
            // Property = rating , number = price , type = above or below
const filterByProperty = (property, number, type) => {
    // const propFilter = foodArr.filter(prop => prop.rating.includes(property)); 
    // const numFilter = foodArr.filter(num => num.price.includes(number));         // started writing these, but it was getting really confusing to explain the logic in my head, 
    const filteredArr = foodArr.filter((food) => {                                  /// so i started with the below lines and then had to refernece the review video.
        if(type === 'above' || type === 'Above'){
            return food[property] > number
        }else if (type === 'Below' || type === 'below'){
            return food[property] < number
        }
    })
    
    return filteredArr
}




/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('rating', 9, 'above'))
