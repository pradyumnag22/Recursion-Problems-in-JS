/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = array => {
  if (array.length === 0 ) {
    return [];
  }
  let resultArr = []
  let flattenedElem = []
  array.forEach(elem => {
    if (!Array.isArray(elem)) {
      resultArr.push(elem)
    }
    else {
      flattenedElem = flatten(elem)
      resultArr = resultArr.concat(flattenedElem)
    }
  })
  return resultArr
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
