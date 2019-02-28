function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const array1 = [1, 2, 3, 4];
each(array1, (number, index) => {
  console.log(`index：${index}、Number：${number}`);
});

console.log(each());


function map(array, callback) {
  const newArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    newArray.push(newValue);
  });
  return newArray;
}

const array2 = [1, 2, 3, 4];
map(array2, (value, index) => {
  console.log(`index：${index}、Number：${value}`);
  return value * 2;
});

console.log(map());


function filter(array, callback) {
  const newfilterArray = [];
  each(array, (value, index) => {
    if (callback(value, index)) {
      newfilterArray.push(value);
    }
  });
  return newfilterArray;
}

const array3 = [1, 2, 3, 4];
filter(array3, (value, index) => {
  console.log(`index：${index}、Number：${value}`);
  return value % 2 === 0;
});

console.log(filter());
