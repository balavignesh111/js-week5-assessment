'use script';

// first problem
const calculate = function(){
  const resultEle = document.getElementById('result');
  const numOne = document.getElementById('num1');
  const operator = document.getElementById('operator');
  const numTwo = document.getElementById('num2');
  if(numOne.value === ''){
    resultEle.innerText = `please type first number`;
  }else if(operator.value === ''){
    resultEle.innerText = `please type operator input`;
  }else if(numTwo.value === ''){
    resultEle.innerText = `please type second number`;
  }else{
    const value = eval(numOne.value+operator.value+numTwo.value);
  resultEle.innerText = `Answer for first problem is ${value}`;
  }
}

// second problem
const quotesArray = [`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
`“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
`“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`,
`“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`
];
const generateQuote = () =>{
  // random no is generated
  const randomNumber = Math.trunc(Math.random()*quotesArray.length);
  // dynamic element is created
  const secondQuestionElement = document.querySelector('.question2');
  const quoteElement = document.createElement('p');
  quoteElement.setAttribute('id','result');
  quoteElement.innerText = quotesArray[randomNumber];
  // logic to append child and to rmv if already presented..
  if(secondQuestionElement.childNodes.length === 7){
    secondQuestionElement.appendChild(quoteElement);  
  }else{
    secondQuestionElement.removeChild(secondQuestionElement.lastElementChild);
    secondQuestionElement.appendChild(quoteElement); 
  }
}

// third problem

// gv
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
const validateForm = ()=>{
  const nameEle = document.getElementById('name');
  const emailEle = document.getElementById('email');
  const errorEle = document.getElementById('error');
  if(nameEle.value == '' && emailEle.value == ''){
    errorEle.innerText = `Enter your name and email id`;
  }else if(nameEle.value === ''){
    errorEle.innerText = `Enter your name`;
  }else if(emailEle.value === ''){
    errorEle.innerText = `Enter your email`;
  }else if(!(emailEle.value.match(pattern))){
    errorEle.innerText = `Invalid email format`;
  }else{
    errorEle.innerText = `all input fields are in correct format`;
  }
}

// 4 problem
const calculateTypingSpeed = ()=>{
  // setTimeout(()=>{
  //   console.log('aa');
  // },1000*60) 
}

// 5 problem
// 1. if it is less than 5 -> week, between 5 and 10 -> moderate, more 10 it is -> strong
const checkPasswordStrength = ()=>{
  const passwordEle = document.getElementById('password');
  const resultEle = document.getElementById('passwordStrength');
  resultEle.innerText = ((passwordEle.value.length <= 5) ? `weak password` : (passwordEle.value.length <= 10 ) ? `moderate password` : `strong password`);
}

// 6. problem

// gv
let index = 0;
const imageContainerEle = document.querySelectorAll('.image-slider img');
// func
const prevSlide = ()=>{
  index--;
  for(let i=0;i<imageContainerEle.length;i++){
    imageContainerEle[i].style.display = "none";
  }
  if(index < 0){
    index = imageContainerEle.length-1;
    imageContainerEle[index].style.display = "inline";
  }else if(index <= imageContainerEle.length -1 ){
    imageContainerEle[index].style.display = "inline";
  }
}

const nextSlide = ()=>{
  index++;
  for(let i=0;i<imageContainerEle.length;i++){
    imageContainerEle[i].style.display = "none";
  }
  if(index === imageContainerEle.length){
    index = 0;
    imageContainerEle[index].style.display = "inline";
  }else if(index > 0){
    imageContainerEle[index].style.display = "inline";
  }
}

const toggleAutoPlay = ()=>{
  setInterval(()=>{
    for(let i=0;i<imageContainerEle.length;i++){
      imageContainerEle[i].style.display = "none";
    }
    if(index < imageContainerEle.length-1){
      index++;
    }else{
      index = 0;
    }
    imageContainerEle[index].style.display = "inline";
  },2000);
}

// 7 problem

const scrollToTop = ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 8 prob

const minuteEle = document.getElementById('minutes');
const secEle = document.getElementById('seconds');
const timerEle = document.getElementById('timer');

function endTime(){
  let totalTime = 0;
  let secToMilliSec = Number(secEle.value) * 1000;
  let minToMilliSec = Number(minuteEle.value) * 60 * 1000;
  totalTime = (secToMilliSec + minToMilliSec); 
  return totalTime;
}

const startTimer = () =>{
  let EndTime = endTime() + Date.now();
  let timeOut = setInterval(()=>{
  let currentTime = Date.now();
  let distance = EndTime - currentTime;
  console.log(`diff ${distance}`);
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  distance = (distance % (1000 * 60 * 60 * 24));
  let hrs = Math.floor(distance) / (1000 * 60 * 60);
  distance = distance % (1000 * 60 * 60);
  let min = Math.floor((distance) / (1000 * 60));
  distance = (distance % (1000 * 60))
  let sec =  Math.ceil((distance) / 1000);
  timerEle.innerText = `${min}min ${sec}sec`
  if(distance < 0){
    clearInterval(timeOut);
    timerEle.innerText = `Time out`
  }
  },1000)
}

// 9 prob
function changeContent(){
  let rows = prompt('enter row btw 0 to 2');
  let column = prompt('enter column between 0 to 1');
  let content = prompt('enter content');
  const table = document.getElementById('myTable');
  rows = Number(rows);
  column = Number(column);
  table.rows[rows].cells[column].innerText = content;
}

// 10 prob

const string_parameterize = (str)=>{
  return str.toLowerCase().split(" ").join("-");;
}

console.log(string_parameterize("Robin Singh from USA."));

