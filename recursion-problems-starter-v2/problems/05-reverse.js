/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
let reverse = (string) => {
  let array = string.split("")
  let arr = []
  arr.push(array[array.length-1])
  let result = ""
  result += arr.join("")
  string = array.slice(0,-1).join("")
  if (string.length === 0) return result
  return result+reverse(string)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
