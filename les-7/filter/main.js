Array.prototype.myForEach = function(callback) {
  for(let i=0; i<this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.myFilter = function(callback) {
  let array = [];

  for(let i=0; i<this.length; i++) {
    let check = callback(this[i], i, this);

    if (check) {
      array.push(this[i]);
    }
  }

  return array;
}

let nArr = [0,1,2,3,4,5,6,7,8,9];

function isEven(val) {
  return val % 2 === 0;
}

console.log(nArr.filter(isEven));
console.log(nArr.myFilter(isEven));

let obArr = [
  {
    name: 'An',
    admin: false,
  },
  {
    name: 'Bob',
    admin: true,
  },
  {
    name: 'Tom',
    admin: false,
  },
]

function isAdmin(val) {
  return val.admin;
}

console.log(obArr.filter(isAdmin));
