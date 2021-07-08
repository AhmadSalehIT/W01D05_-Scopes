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

  //---------------------------------------------------

  //Practice
  //1
  let age = 25;
if (true) {
  age = 30;
}
age; //30

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; //John



//Q2
let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // 15

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 10


//Q3
let num =5;
const countDown = function () {
   num = --num;
  if(num<0)
  return 'count down is over';
  else
  return num;
};
/*
countDown(); // => 4
countDown(); // => 3
countDown(); // => 2
countDown(); // => 1
countDown(); // => 0
countDown(); */// => "count down is over"


//Q4
let num2 =3;
const countUp = function () {
  return ++num2;
};
/*
countUp(); // => 4
countUp(); // => 5
countUp(); // => 6
countUp(); // => 7
countUp(); // => 8*/


//Q5
const resetCount = function (start) {
 num2=start;
 return "the count has been reset";
};
/*
resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11*/


//Q6
let str='';
const addToList = function (toDo) {
 str+=' ' + toDo;
 return str.trim();
};
/*
addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'*/


//Q7
const createToDoList = function () {
  let str='';
const toDoListOne = function (toDo) {
 str+=' ' + toDo;
 return str.trim();
};
return toDoListOne;
};

const toDoListOne = createToDoList();
/*toDoListOne("Eat"); // => 'Eat'
toDoListOne("Play"); // => 'Eat Play'
toDoListOne("Sleep"); // => 'Eat Play Sleep'
toDoListOne("repeat"); // => 'Eat Play Sleep repeat'*/


//Q8
let balance =0;
const deposit = function (amount) {
  balance+=amount;
 return balance ;
};
/*
deposit(100); // => 100
deposit(50); // => 150*/


//9
const withdraw = function (amount) {
  if(balance-amount<0)
  {
    return 'insufficient funds, current balance:'+ balance;
  }
  balance-=amount;
  return balance ;
};
/*
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
withdraw(100); // => "insufficient funds, current balance: 30"*/



//Q10
const createAccount = function (initialValue) {
  // TODO: Your code here
   balance =initialValue;

  return function(transactionType , amount){
    if(transactionType==="withdraw")
    {
      return withdraw(amount);
    }
    else if(transactionType==="deposit")
    {
     return deposit(amount);
    }

  };
};

//const accountOne = createAccount(0);
/*accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
accountOne("deposit", 50); // => 50
accountOne("deposit", 70); // => 120
accountOne("withdraw", 10); // => 110*/

//const accountTwo = createAccount(500);
/*accountTwo("withdraw", 100); // => 400
accountTwo("withdraw", 100); // => 300
accountTwo("deposit", 50); // => 350
accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"*/