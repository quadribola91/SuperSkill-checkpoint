/*

let start = callOfDuty;

function callOfDuty () {
    
}

function dateFunction (){
    document.getElementById('demo').innerHTML = Date()
    document.getElementById('idehlook').innerHTML = Date()
}


let header = "Templates Literals";
let dateShow = dateFunction();
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demos").innerHTML = html;

let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

let myNumber = 32;
document.getElementById("demo").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);



const array_Kosofe = ['Red', 'blue', 'white', 'yellow', 'purple']
array_Kosofe.push('green', 'black', 'violet','Festus', 'Shikemi');
array_Kosofe[5] = 'titilayo';
array_Kosofe[3] = 'kemi';
array_Kosofe[7]='Akin';
array_Kosofe[7]='Motunrayo';
array_Kosofe[3];
array_Kosofe[-1];
console.log(array_Kosofe);
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed; 
array_Kosofe.push('My Phone', 'Saheed Banire', 'wizkid', 'Olamide');
let discovery = Array.isArray(array_Kosofe);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myBoys.concat(myGirls);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let fruitsed = fruits.toString();
let fruised2 = fruits.sort();
//const citrus = fruits.slice(1, 4);
/*
console.log(typeof array_Kosofe);
console.log(array_Kosofe.length);
console.log(array_Kosofe[3]);
console.log(array_Kosofe.length-1);
console.log(array_Kosofe[9]);
console.log(array_Kosofe);
console.log(array_Kosofe.length);
console.log(array_Kosofe[6]);
console.log(discovery);
console.log(myChildren);

const points = [40, 100, 1, 5, 25, 10];
let pointsResult = points.sort(function sortingF(u, y){return y - u});

const points = [40,100,1,5,25,10]

const alphabetically = points.sort();

function myfunction2(){
    points.sort(function(a,b){return a-b});
    console.log(points.sort);
}
console.log(alphabetically);
console.log(myfunction2());

console.log(fruits.toString());
console.log(fruised2);
console.log(fruits.reverse());
console.log(pointsResult);


const arr = [1, 2, 3, 4, 5, 6];
const alternateSort = (arr = []) => {
   arr.sort((a, b) => a - b);
   const N = arr.length;
   let mid = Math.floor(N/2);
   if(N % 2 !== 0){
      mid++;
   };
   const small = arr.splice(0, mid);
   const big = arr.splice(0,arr.length);
   for(let i = 0; i < N; i++){
      if(i % 2 === 0){
         arr[i] = small.pop()
      }else{
         arr[i] = big.pop()
      };
   };
};
alternateSort(arr);
console.log(arr);

*/

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  return(myFunction1);
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  return(myFunction2);
  document.getElementById("demo").innerHTML = points;
}
  console.log(points);
  console.log(myFunction1());
  console.log(myFunction2());