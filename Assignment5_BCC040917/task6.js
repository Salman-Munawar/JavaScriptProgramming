
var arr1 = [0,5,6,7];
var arr2 = [1,2,3,4];

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return (arr.concat(newArray))
}

document.write(reverseArray(arr1) + "<br/><br/>");

document.write(reverseArray(arr2));