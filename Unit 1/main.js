//*********************************************************

//****Assignment #1, Section 1

//********************************************************* 
console.log(""); //blank line
console.log('********** Section 1 **********');
console.log(""); //blank line

function fibonacci(n){
  if(n == 1 || n == 2){
    return 1;
  }
 return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log('The Fibonacci value of 10 is: ' + fibonacci(10));

//*********************************************************

//****Assignment #1, Section 2

//********************************************************* 
console.log('********** Section 2 **********');
console.log(""); //blank line

function factoral(n){
  if(n == 0){
    return 1;
  }
  return n * factoral(n - 1);
}

for(let i = 1; i <= 4; i++){
  console.log(i+'! = ' + factoral(i));
  
}


