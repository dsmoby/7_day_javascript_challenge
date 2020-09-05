// Challenge 1 - Add borders

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
  return num
    .toString()
    .split("")
    .reduce((sum, n) => {
      return sum + parseInt(n)
    }, 0)
}

// return num.toString().split("").reduce((sum, n) => { return sum + parseInt(n) }, 0);

// const addTwoDigits=num=>[...num+""].map(e=>+e).reduce((a,b)=>a+b);

// const addTwoDigits = num => [...(num + "")].map(e => +e).reduce((a, b) => a + b)

// console.log(addTwoDigits(4529))

//--------------------------------------------------------------------------------------------

// Day 3 - first duplicate

function firstDuplicate(n) {
  let dup = []
  let notDup = []

  n.forEach(elem => {
    !(elem in notDup) ? notDup.push(elem) : dup.push(elem)
  })

  if (dup.length === 0) {
    return -1
  }
  return dup[0]
}
const nums = [2, 1, 3, 5, 4, 6]
const nums2 = [2, 1, 3, 5, 3, 2]

console.log(firstDuplicate(nums))
