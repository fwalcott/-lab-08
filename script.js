'use strict'
//function numberOne
var userName = prompt('Hello, My name is Felicia. What is your name?'); 
console.log('Hello' + ''+ userName + ''+'Welcome to my about me page!!!'); 
alert('Hello' + ''+ userName +''+ 'Welcome to my  about me page!!!'); 
//} 

//numberOne(); 
function validateUserName() {
  var error = "";
  var illegalChars =/\W/;
    alert("Name must be filled out");
    return false;
  
}



function numberTwo() {
var questionOne = prompt(userName + ''+'Do I like spicy food? Yes or No'); 
console.log(userName + '' + 'Do I like spicy food? Yes or No');  
questionOne.toLowerCase() 

if (questionOne !=='yes'  && questionOne ==='y'){
  console.log(userName  + 'you are correct!');
  alert(userName  + 'you are correct!');
} else { (questionOne ==='no' && questionOne ==='n') 
  console.log(userName  + 'Sorry but I do like spicy food'); 
  alert(userName + 'Sorry but I do like spicy food'); 
}
}  

numberTwo();  

function numberThree() {

var questionTwo = prompt(userName  + 'Do I The Fast and the Furious Movies? Yes or No'); 
console.log(userName  + 'Do I The Fast and the Furious Movies? Yes or No'); 
questionTwo.toLowerCase()

if (questionTwo !=='yes'  && questionTwo ==='y') {
  console.log(userName  + 'you are correct!'); 
  alert(userName  + 'you are correct!');
} else { (questionTwo ==='no' && questionTwo ==='n')
  console.log(userName  + 'Sorry but I do! Even if they are insane!'); 
  alert(userName  + 'Sorry but I do! Even if they are insane!'); 
}
} 

numberThree(); 

function numberFour() {

var questionThree = prompt(userName  + 'Am I in Gex X'); 
console.log(userName  + 'Am I in Gen X'); 
questionThree.toLowerCase()

if (questionThree !=='yes'  && questionThree ==='y') {
  console.log(userName  + 'Sorry! Gen Y forever!'); 
  alert(userName + 'Sorry! Gen Y forever!');
} else { (questionThree ==='no' && questionThree ==='n')
  console.log( userName  + 'You Are Right!'); 
  alert(userName  + 'You Are Right!'); 
}  
} 
numberFour();  

function numberFive() {
  var salesArray = ['pants', 'shirt', 'sweater', 'jacket', 'skirt', 'jeans'];
  var guesses = 6;
  var answeredCorrectly = false;
  
  var questionFive = prompt(`What article of clothing do we have in stock. You have ${guesses} guesses.`).toLowerCase();
  
  while (guesses > 0 && !answeredCorrectly) {
    guesses--;
    console.log(guesses);
    for (var i = 0; i < salesArray.length; i++) {
      if (questionFive === salesArray[i]) {
        alert(`${userName}! You are right. We have that is stock`);
        correctAnswer++;
        answeredCorrectly = true;
        i = salesArray.length;!  
      }
    if (guesses > 0 && !answeredCorrectly) {
      questionFive = prompt(`Afraid not, ${userName}. We don't have that item ${guesses7} guesses left.`).toLowerCase();
    }
    if (guesses === 0 && !answeredCorrectly) {
      alert(`Sorry but we only have pants ,shirts, sweaters, jackets, skirts and jeans'`);
    b
  } 
numberFive();

var userName = alert('I hope you like my page ${userName}`);
