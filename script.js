// Challenge 1 - Add borders

function addBorder(arr) {
  
  const arrNew = arr.map(el => {
    const modarr = `*${el}*`
    return modarr
  })
  const strLen = Math.max(...arrNew.map(d => d.length))

  console.log(strLen)
  const repeatString = (n, str = "*") => (n >=1  ? str.repeat(n) : str)
  const border = repeatString(strLen)
  arrNew.unshift(border)
  arrNew.push(border)
  return arrNew
}


const inputArray = ["abc", "edfeg", "stuwyx"]

console.log(addBorder(inputArray))
