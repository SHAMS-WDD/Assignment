  // Exercise 1:

  function destructureExample({name, age}, [value0, , value2]) {
   
    console.log({name, age})
  }
  
  const obj = { 
        name: 'John', 
        age: 30, 
        city: 'New York' };

  const arr = [10, 20, 30, 40];
  
  // console.log(destructureExample(obj, arr));

//=================================================================

  // Exercise 4:

  function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  
//   console.log(isEven(7));   


//===================================================================

  // Exercise 3:

  function createGreeting (name) {
    return `Hello, ${name}! Welcome to our website.`;
  }
    
//   console.log(createGreeting('Alice'));


//===================================================================

  // Exercise 2:

  function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

//   console.log(sumNumbers(1, 2, 3, 4, 5));



//===================================================================

  // Exercise 5:

  const multiply = (a, b) => a * b;

// console.log(multiply(2,3));


//===================================================================

  // Exercise 6:

  function getLarge(x,y){
  return (x>y && x || y) ?? "Please enter value";
  }

// console.log(getLarge(10,5));


//===================================================================

  // Exercise 7:

  function getAddressCity(address) {
    // return address.city ?? "Unknown";
    return address?.city ?? "Unknown";
  }
  
  const address = { 
    street: '123 Main St', 
    country: 'USA' };

//  console.log(getAddressCity(address)); 


//===================================================================

  // Exercise 8:

  function doubleNumbers(arr){
    const doubledNumber = arr.map((number)=>number*2);
    return doubledNumber;
  }

// console.log(doubleNumbers([1,2,3,4,5]));


//===================================================================

  // Exercise 9:

  function filterEvenNumbers(arr){
    const evenNumbers = arr.filter((number)=>number%2===0);
    return evenNumbers;
  }

// console.log(filterEvenNumbers([1,2,3,4,5]));


//===================================================================

  // Exercise 10:

  function sumArray(arr){
    const sum = arr.reduce((previous, current)=>previous+current,0);
    return sum;
  }

// console.log(sumArray([1,2,3,4,5]));


//===================================================================

  // Exercise 11:

  function sortNumbers (arr){
    const sortedNumbers = arr.sort((a,b)=>a-b);
    return sortedNumbers;
  }

console.log(sortNumbers ([5, 2, 8, 1, 4]));