Array.prototype.myForEach = function(callback) {
  for(let i=0; i<this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.myMap = function(callback) {
  let array = [];

  for(let i=0; i<this.length; i++) {
    let result = callback(this[i], i, this);
    array.push(result);
  }

  return array;
}

function plusOne(val) {
  return val + 1;
}

let testArr = [1,2,3,4];

console.log(testArr.map(plusOne));
console.log(testArr.myMap(plusOne));

let objectArray = [
  {
    firstName: 'Bob',
    lastName: 'De Man',
  },
  {
    firstName: 'Bobine',
    lastName: 'De Vrouw',
  },
  {
    firstName: 'An',
    lastName: 'De Andere Vrouw',
  },
];

function firstName(val) {
  return val.firstName + ' ' + val.lastName;
}

console.log(objectArray.map(firstName));
