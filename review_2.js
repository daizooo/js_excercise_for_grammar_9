function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const array1 = [1, 2, 3, 4];

const neweach = each(array1, (number, index) => {
  console.log(`インデックス：${index},値：${number}`);
});

console.log(neweach);




function map(array, callback) {
  const newArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    newArray.push(newValue);
  });
  return newArray;
}
const array2 = [1, 2, 3, 4];
const newmap = map(array2, (value, index) => {
  console.log(`インデックス：${index},値：${value}`);
  return value * 2;
});

console.log(newmap);




function filter(array, callback) {
  const newArray = [];
  each(array, (value, index) => {
    if (callback(value, index)) {
      newArray.push(value);
    }
  });
  return newArray;
}

const array3 = [1, 2, 3, 4];

const newfilter = filter(array3, (value, index) => {
  console.log(`インデックス：${index},値：${value}`);
  return value % 2 === 0;
});

console.log(newfilter);
