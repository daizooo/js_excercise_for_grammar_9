function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const array1 = [1, 2, 3];

const returnedOfArrayOfEach = each(array1, (number, index) => {
  console.log(`番号：${index}、名前：${number}`);
});

console.log(returnedOfArrayOfEach);


function map(array, callback) {
  const newArrayOfMap = [];
  each(array, (number, index) => {
    const newValue = callback(number, index);
    newArrayOfMap.push(newValue);
  });
  return newArrayOfMap;
}

const array2 = [0, 2, 3];

const returnedArrayOfMap = map(array2, (number, index) => {
  console.log(`番号：${index}、名前：${number}`);
  return number * 2;
});

console.log(returnedArrayOfMap);


function filter(array, callback) {
  const newArrayOfFilter = [];
  each(array, (number, index) => {
    if (callback(number, index)) {
      newArrayOfFilter.push(number);
    }
  });
  return newArrayOfFilter;
}

const array3 = [1, 2, 3, 4];

const returnedArrayOfFilter = filter(array3, (number, index) => {
  console.log(`番号：${index}、名前：${number}`);
  return number % 2 === 0;
});

console.log(returnedArrayOfFilter);
