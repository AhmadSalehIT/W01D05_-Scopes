console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//  Pulse Check
//Q1

let myFavoriteFood ='Mansaf'
// make sure that the variable is in the global scope
const favoriteFood = function () {
    // TODO: Your code here
    return myFavoriteFood;
  };
  
  favoriteFood(); // => the value of `myFavoriteFood` variable


  //Q2
  const updateFavoriteFood = function (newValue) {
    myFavoriteFood=newValue;
  };
  
  updateFavoriteFood("Pizza");
  favoriteFood(); // => "Pizza"


  //Q3
  const createCounter = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };

  let counter1 = createCounter();
  let counter2 = createCounter();


  //Q4
  const createCounter2 = function (start) {
    let counter = start;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };

  let counter3 = createCounter2(10);
  let counter4 = createCounter2(20);


  