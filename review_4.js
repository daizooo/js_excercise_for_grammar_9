function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}
const array1 = [1, 2, 3, 4];

const foreachArray = each(array1, (value, index) => {
  console.log(`${index}：${value}`);
});

console.log(foreachArray);

function map(array, callback) {
  const mappedArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    mappedArray.push(newValue);
  });
  return mappedArray;
}

const array2 = [1, 2, 3, 4];

const returnedMappedArray = map(array2, (value, index) => {
  console.log(`${index}：${value}`);
  return value * 3;
});

console.log(returnedMappedArray);

function filter(array, callback) {
  const filteredArray = [];
  each(array, (value, index) => {
    if (callback(value, index)) {
      filteredArray.push(value);
    }
  });
  return filteredArray;
}

const array3 = [1, 2, 3, 4];

const returnedFilteredArray = filter(array3, (value, index) => {
  console.log(`${index}：${value}`);
  return value % 2 !== 0;
});

console.log(returnedFilteredArray);
