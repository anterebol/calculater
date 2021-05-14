const button = document.querySelectorAll(".button-value");
const answer = document.querySelector(".answer");
answer.innerHTML = 0;
let stringValue = "";
let solution;
let stringAnswer;
let action;
if (button.length > 0) {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      console.log(button[i].innerHTML);
      let number = button[i].innerHTML;
      countAnswer(number);
    }
    )
  }
}
function countAnswer (number) {
  if (action !== 'x') {
  if (number == 0 || number == 1 || number == 2 || number == 3 || number == 4 || number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == '.' && findPoint(stringValue)) {
    if (stringValue == '' && number == '.') {
      stringValue = '0.';
      answer.innerHTML = stringValue;
    }
    else {
      number.toString();
      stringValue += number;  
      answer.innerHTML = stringValue;
    }
  }
}
  if (number == '-' || number == '+' || number == '*' || number == '/') {
    chekAnswer(number);
  }
  if (number == '=') {
    lastAction();
  }
  if (number == 'sqrt') {
    
  }
  if (number == 'C') {
    answer.innerHTML = 0;
    stringValue = "";
    solution = '';
    stringAnswer = '';
    action = '';
  }
}

function chekAnswer(number) {
  solution = answer.innerHTML;
  action = number;
  if (action !== undefined && solution !== undefined) {
     stringValue = '';
     answer.innerHTML = stringValue;
  }
  console.log(solution);
   console.log(answer.innerHTML);
}
function findPoint (stringValue) {
  let n = 0;
 for (let i = 0; i < stringValue.length; i++) {
   if (stringValue[i] == '.') {
     n++;
   }
 }
 if (n > 0) {
   return false;
 }
 return true;
 }
 function lastAction () {
   console.log('x');
   if (action == '+') {
   answer.innerHTML = Number(solution) + Number(answer.innerHTML);
   solution = answer.innerHTML;
   action = 'x';
   }
   if (action == '*') {
    answer.innerHTML = Number(solution) * Number(answer.innerHTML);
    solution = answer.innerHTML;
    action = 'x';
   }
   if (action == '/') {
    answer.innerHTML = Number(solution) / Number(answer.innerHTML);
    solution = answer.innerHTML;
    action = 'x';
   }
    if (action == '-') {
      answer.innerHTML = Number(solution) - Number(answer.innerHTML);
      solution = answer.innerHTML;
      action = 'x';
      }
 }

