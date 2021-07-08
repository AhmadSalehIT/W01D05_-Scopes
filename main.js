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



//----------------------------------------------------------------------------
//Extra Practice

//Q1
let maxValue = 5;
let minValue = 5;
const minMax = function (number) {


 if(number >= maxValue)
 {
  maxValue =number;

 }

 if(number <= minValue)
 {
  minValue =number;

 }
 

    return "the maximum number is: "+ maxValue+" and the minimum number is " + minValue;
};
/*
minMax(5); // => "the maximum number is: 5 and the minimum number is 5"
minMax(2); // => "the maximum number is: 5 and the minimum number is 2"
minMax(3); // => "the maximum number is: 5 and the minimum number is 2"
minMax(7); // => "the maximum number is: 7 and the minimum number is 2"
minMax(0); // => "the maximum number is: 7 and the minimum number is 0"*/



//Q2
let won=0;
let lost=0;
const randomMove = function () {
  let num =  Math.round(Math.random() * 2);
  if(num === 0 )
  return "rock";
  else  if(num === 1 )
  return "paper";
  else  if(num === 2 )
  return "scissors";
};
const rockPaperScissors = function (move) {
   
  const _randomMove = randomMove();
  
  if((move==='rock' && _randomMove ==='scissors') || (move==='paper' && _randomMove ==='rock') || (move==='scissors' && _randomMove ==='paper'))
     { won+=1;}
  else if((_randomMove==='rock' && move ==='scissors') || (_randomMove==='paper' && move ==='rock') || (_randomMove==='scissors' && move ==='paper'))
   {lost+=1;}

   return "Won: " +won+ ", Lost:"+lost;

  };

  /*
  rockPaperScissors("rock"); // => "Won: 1, Lost:0"
rockPaperScissors("rock"); // => "Won: 1, Lost:1"
rockPaperScissors("paper"); // => "Won: 1, Lost:2"
  */


//Q3

  const rockPaperScissors2 = function (move) {
   
    const _randomMove = randomMove();
    if(won === 5 || lost===5)
  {
    won=0;
    lost=0;
  } 
    if((move==='rock' && _randomMove ==='scissors') || (move==='paper' && _randomMove ==='rock') || (move==='scissors' && _randomMove ==='paper'))
       { won+=1;}
    else if((_randomMove==='rock' && move ==='scissors') || (_randomMove==='paper' && move ==='rock') || (_randomMove==='scissors' && move ==='paper'))
     {lost+=1;}
  
     return "Won: " +won+ ", Lost:"+lost;
  
    };
   

    //Q4
    const rockPaperScissors3 = function (move,reset) {
   
      const _randomMove = randomMove();
      if( move==="" && reset)
    {
      won=0;
      lost=0;
      return "the game has been reset";
    } 
      if((move==='rock' && _randomMove ==='scissors') || (move==='paper' && _randomMove ==='rock') || (move==='scissors' && _randomMove ==='paper'))
         { won+=1;}
      else if((_randomMove==='rock' && move ==='scissors') || (_randomMove==='paper' && move ==='rock') || (_randomMove==='scissors' && move ==='paper'))
       {lost+=1;}
    
       return "Won: " +won+ ", Lost:"+lost;
    
      };
     


//Q5

let status=1;
      const randomMove2 = function () {
        let num ;
        if(status ===1)
        num=  Math.round(Math.random() * 2);
        else
        num=  Math.round(Math.random() * 3);
        if(num === 0 )
        return "rock";
        else  if(num === 1 )
        return "paper";
        else  if(num === 2 )
        return "scissors";
      };
      const rockPaperScissors4 = function (move) {
   
        const _randomMove = randomMove2();
        
        if((move==='rock' && _randomMove ==='scissors') || (move==='paper' && _randomMove ==='rock') || (move==='scissors' && _randomMove ==='paper'))
           { status =1;
             won+=1;
            }
        else if((_randomMove==='rock' && move ==='scissors') || (_randomMove==='paper' && move ==='rock') || (_randomMove==='scissors' && move ==='paper'))
         {status =0;
           lost+=1;}
      
         return "Won: " +won+ ", Lost:"+lost;
      
        };