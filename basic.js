//creating an array
let fruites = ['apple', 'mango', 'watermelon']
console.log(`${fruites[0]}`)

//push add the elements in the end
fruites.push('dragonfruit')
console.log(fruites)

//concat two array
let numbers = [1, 2, 3, 4]
let merged = fruites.concat(numbers)

console.log(merged)

/************* SET & Removing Duplicate *********/

let num = [1, 2, 3, 3, 4, 5, 6, 7, 8, 88]
let uniqueNumber = [...new Set(num)]
console.log(uniqueNumber)

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

let uniqueMerge = [...new Set([...arr1, ...arr2])]
console.log(uniqueMerge)

/*** Object & Array Comparison */
/*** Primitive & Referrence Type */
let a = 10
let b = 10

console.log(a === b) // true

let obj1 = { name: 'Alice' }
let obj2 = { name: 'Alice' }
console.log(obj1 === obj2) //false

let num1 = [1, 2, 3, 4]
let num2 = [1, 2, 3, 4]
console.log(num1 == num2) //false

/*** Why obj1 === obj2 is false?
Even if two objects have the same content, they are stored at different memory locations.
To compare objects deeply, we need custom function 
I Will Show at the end of the file or i will create new file called custom-function checking  .
***/

/*** Higher order Function */
//some method   : check if any elements meet  a condition
let arr = [1, 2, 3, 4, 5, 6, 7]
let hasEven = arr.some((num) => num % 2 == 0)
console.log(hasEven)

//filter method : Get Elements that meets a  condition
let evenNums = arr.filter((num) => num % 2 == 0)
console.log(evenNums)

//map method :Transform Each Elements in the array
let squared = arr.map((num) => num * num)
console.log(squared)

//reduced method :Accumulate Values
let sumOfArr = arr.reduce((acc, curr) => (curr += acc), 0)
console.log(sumOfArr)

/**** Recursion for deep Equality Check: functions calls itself  */
/** Recursive deep Comparsion  */
function deepEqual(obj1, obj2) {
  /**it prevents from paticular crucial case suppose
      let obj1={a:1,b:2,c:3}
      let obj2=obj1
      in this case  obj1 and obj2  both have same reffrence  so  it returns true 
    */
  if (obj1 === obj2) return true
  //  Check for null before treating as an object
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' ||obj1 === null ||obj2 === null) 
  {
    return false;
  }
  //geting a keys and their length  from an object
  let keys1 = Object.keys(obj1)
  console.log(keys1) //['a','b','c']
  console.log(keys1.length) // 3

  //getting a keys &  length  from an  object
  let keys2 = Object.keys(obj2)
  console.log(keys2) //['a','b','c']
  console.log(keys.length) //3

  //if length is not same then  return false
  if (keys1.length !== keys2.length) return false
  
  return keys1.every((key) => deepEqual(obj1[key], obj2[key]))
}

let objA = { a: 1, b: 2, c: 3 }
let objB = { a: 1, b: 2, c: 3 }
console.log(deepEqual(objA, objB)) //true
