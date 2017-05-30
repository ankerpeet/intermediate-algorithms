function sumAll(arr) {
  var newArr = [];
  var i;
  var lastArr = [];

function sortNumber(a,b) {
    return a - b;
  } newArr = arr.sort(sortNumber);
  
  for (i = newArr[0]; i < newArr[1] + 1; i++) {
    lastArr.push(i);
  }
  
  return lastArr.reduce((a, b) => a + b, 0);
}

sumAll([12, 4]);
