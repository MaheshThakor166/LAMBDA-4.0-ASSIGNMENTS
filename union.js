function deepEqual(obj1, obj2) {
  /**it prevents from paticular crucial case suppose
      let obj1={a:1,b:2,c:3}
      let obj2=obj1
      in this case  obj1 and obj2  both have same reffrence  so  it returns true 
    */
  if (obj1 === obj2) return true
  //  Check for null before treating as an object
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }
  //geting a keys and their length  from an object
  let keys1 = Object.keys(obj1)
  console.log(keys1) //['a','b','c']
  console.log(keys1.length) // 3

  //getting a keys &  length  from an  object
  let keys2 = Object.keys(obj2)

  //if length is not same then  return false
  if (keys1.length !== keys2.length) return false

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]))
}

export function union(arr1, arr2) {
  let result = []
  for (let item of [...arr1, ...arr2]) {
    if (!result.some((el) => deepEqual(el, item))) {
      result.push(item)
    }
  }
  return result
}
