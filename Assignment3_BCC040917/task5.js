var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var arr2 = arr1.filter((item, pos) => arr1.indexOf(item) === pos);

document.write(arr2);