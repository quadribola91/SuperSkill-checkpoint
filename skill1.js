// This is to determine the number of words in the sentence

var sentence = "The red fox jumped over the blue dog and kicked a bucket before dancing and jumping but he is very happy.";

var fullStop = ".";
var i = 0;
var counter = 1;

while(sentence[i] !== fullStop)
{
    if(sentence[i] === " ")
    {
        counter = counter + 1;
    }
        i = i+1;
}
console.log(counter);

// This is to determine the numbers of vowels in the sentence

var sentence = "The red fox jumped over the blue dog and kicked a bucket before dancing and jumping but he is very happy.";

var fullStop = ".";
var i = 0;
var counter = 0;

while(sentence[i] !== fullStop)
{
    if(sentence[i] === "a" ||sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u")
    {
        counter = counter + 1;
    }
        i = i+1;
}
console.log(counter);



//  This is for the second task 

var arr1 = [3,1,4,6,11,15,19,2,45,9,20,22,23,7];

var arr2 = [1,3,5,6,10,13,12,11,10,22,4];

var arr = []
function findSum(arr) { 
    let sum = 0;  
    for (let i=0; i<arr1.length; i++) { 
    let j=i+1; 
    while(j<arr2.length){ 
    if(arr2[j]==arr1[i]){break;} 
    j++; 
    } 
    if(j==arr2.length){sum+=arr[i];} 
    } 

    return sum; 
    } 
    console.log(findSum(arr));
    

