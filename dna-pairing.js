function pairElement(str) {
  var newArr = [];
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      newArr.push(["A","T"]);
    } else if (arr[i]  === "G") {
      newArr.push(["G","C"]);
    } else if (arr[i]  === "T") {
      newArr.push(["T","A"]);
    } else newArr.push(["C","G"]);
  }
  return newArr;
}

pairElement("ACG");
