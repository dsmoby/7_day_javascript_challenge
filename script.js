/* / Challenge 1 - Add borders

function addBorder(arr) {
  const arrNew = arr.map(el => {
    const modarr = `*${el}*`
    return modarr
  })
  const strLen = Math.max(...arrNew.map(d => d.length))

  console.log(strLen)
  const repeatString = (n, str = "*") => (n >= 1 ? str.repeat(n) : str)
  const border = repeatString(strLen)
  arrNew.unshift(border)
  arrNew.push(border)
  return arrNew
}

// const inputArray = ["abc", "edfeg", "stuwyx"]
// console.log(addBorder(inputArray))

//--------------------------------------------------------------------------------------------

// Challenge Day 2 - Add the two digits of an integer


function addTwoDigits(num) {
  /*  const [a, b] = num
    .toString()
    .split("")
    .map(ds => parseInt(ds))
  return a + b */
/*
  return num
    .toString()
    .split("")
    .reduce((sum, n) => {
      return sum + parseInt(n)
    }, 0)
}
*/

// return num.toString().split("").reduce((sum, n) => { return sum + parseInt(n) }, 0);

// const addTwoDigits=num=>[...num+""].map(e=>+e).reduce((a,b)=>a+b);

// const addTwoDigits = num => [...(num + "")].map(e => +e).reduce((a, b) => a + b)

// console.log(addTwoDigits(4529))

//--------------------------------------------------------------------------------------------

// Day 3 - first duplicate
/*
function firstDuplicate(n) {
  const dup = []
  const notDup = []

  n.forEach(elem => {
    !(elem in notDup) ? notDup.push(elem) : dup.push(elem)
  })

  if (dup.length === 0) {
    return -1
  }
  return dup[0]
}
const nums1 = [2, 1, 3, 5, 4, 6]
const nums2 = [2, 1, 3, 5, 3, 2]

// const firstDuplicate2 = nums => nums.find((e, i, a) => a.indexOf(e) < i) || -1

ٴٴٴٴ */ // console.log(firstDuplicate2(nums2))
//--------------------------------------------------------------------------------------------

// Day 4 - Sum of prime numbers
function sumAllPrimes(N) {
  let sum = 0
  const nums = []
  const isPrime = a => {
    if (a === 2) {
      sum += a
      return true
    }
    if (a <= 1) {
      return false
    }
    for (let j = 2; j < a; j++) {
      if (a % j == 0) {
        return false
      }
    }
    sum += a
    return true
  }
  for (let i = 0; i <= N; i++) {
    nums.push(i)
  }

  const primes = nums.filter(n => isPrime(n) && n)
  return sum
}

// other solutions

function sumAllPrimes1(num) {
  var sum = 0
  for (let i = 2; i <= num; i++) {
    var count = 2
    var prime = true
    while (i % count != 0 && count < i) {
      count++
      //console.log(`i: ${i}, count: ${count}`)
    }
    if (i != count) prime = false
    else {
      sum += i
      console.log(`i: ${i}, sum: ${sum}`)
    }
  }
  return sum
}

// solution 2
const sumAllPrimes2 = num =>
  ","
    .repeat(num)
    .slice(0, -1)
    .split(",")
    .map((e, i) => i + 1)
    .filter(e => e > 1)
    .filter(x =>
      ","
        .repeat(x)
        .slice(0, -1)
        .split(",")
        .map((f, j) => j)
        .filter(e => e > 1)
        .every(e => x % e !== 0)
    )
    .reduce((a, b) => a + b, 0)

// Solution 3
function sumAllPrimes3(num) {
  return [...Array(num - 1).keys()]
    .map(data => data + 2)
    .reduce((sum, test) => {
      console.log(`${sum},  ${test}`)
      if ([...Array(test - 2)].map((_, i) => i + 2).filter(i => test % i === 0).length == 0) {
        return sum + test
      }
      return sum
    })
}

/*
const n = 977
const res = sumAllPrimes(n)
const res1 = sumAllPrimes1(n)

console.log("sumAllPrimes: " + res)
console.log("sumAllPrimes1: " + res1)
*/

//-------------------------------------------------------
// Day 5 Challenge: Even digits
function evenDigitsOnly(number) {
  if (number % 2 !== 0) return false
  console.log("It is not an odd number")
  return number
    .toString()
    .split("")
    .map(d => parseInt(d))
    .every(cur => cur % 2 === 0)
}

// console.log(evenDigitsOnly(21))

//------------------------------------------------------------------------
// Day 6: Make Array Consecutive

function makeArrayConsecutive(nums) {
  const maxNum = Math.max(...nums)
  const minNum = Math.min(...nums)
  const diff = maxNum - minNum + 1
  return diff - nums.length
}
// console.log(`diff: ${diff}, nums length:  ${nums.length}`)
/*const numbers = [6, 2, 3, 8]
console.log(makeArrayConsecutive(numbers))
*/
//------------------------------------------------------------------

// Day 7: Correct Noun 

function properNounCorrection(str) {

  return str
  
}


console.log(properNounCorrection("moby"))