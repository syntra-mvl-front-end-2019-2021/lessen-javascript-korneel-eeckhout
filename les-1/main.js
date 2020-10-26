console.log('externe hello world!');

///////////// Defining variables \\\\\\\\\\\\\\\
// var aVariable;
let anotherVariable;
const aConstant = 'test';

// if (true) {
//     var testVar = 1;
//     let testLet = 1;
// }

// console.log(testVar);
// console.log(testLet);


///////////// Strings \\\\\\\\\\\\\\\
'een string';
// "een string";
`een template literal ${aConstant}
tweede lijn`;

// console.log('test' + ' test');
// console.log(5 + '4');

// Methods and Properties
let aRandomString = 'Test VIJF zes zeven   ';

console.log(aRandomString);
console.log(aRandomString.length);
console.log(aRandomString.toLowerCase());
console.log(aRandomString.toUpperCase());
let trimmedString = aRandomString.trim();
console.log(trimmedString.length);
console.log(aRandomString.trim().length);
console.log(aRandomString.indexOf('VIJF'));
console.log(aRandomString.includes('zes'));


///////////// Numbers \\\\\\\\\\\\\\\
12;
1.2;
1e12;
NaN;
Infinity;

// console.log(5 + 5);
// console.log(10 - 5);
// console.log(5 * 5);
// console.log(25 / 5);
// console.log(11 % 2);

///////////// Empty values \\\\\\\\\\\\\\\
undefined;
null;

// let testUndefined;

// console.log(testUndefined);

///////////// Booleans \\\\\\\\\\\\\\\
true;
false;

// console.log(!true);

// let ifClause = 'test'; -> true
// let ifClause = ''; -> false
// let ifClause = 5; -> true
// let ifClause = 0; -> false
// let ifClause = -5; -> true
// let ifClause = NaN; -> false
// let ifClause = Infinity; -> true
// let ifClause = undefined; -> false
let ifClause = null; //-> false

if (ifClause) {
    // console.log(ifClause, 'is true');
} else {
    // console.log(ifClause, ' is false');
}

if (true && true) {
    // console.log(true);
}

if (true && false) {
    //
} else  {
    // console.log(false);
}

if (true || false) {
    // console.log(true);
}

// console.log(5 == '5'); // -> true
// console.log(5 === '5'); // -> false

///////////// Functions \\\\\\\\\\\\\\\

function aFunction() {
    // console.log('Joepie het werkt');
}

const anotherFunction = function() {

}

aFunction();

// prompt function
// let answer = prompt('Ik stel een vraag?');
// console.log(answer);
// alert function
// alert('Een tekstje meegeven');

const askName = function() {
    const name = prompt('Wat is je naam?');
    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName === 'korneel') {
        alert('Jij bent de leeraar');
    } else {
        alert('Jij bent niet de leeraar');
    }
}

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(5));
// console.log(NaN === NaN);

const sumNumbers = function() {
    // let isNotANumber = true;

    // while (isNotANumber) {
    //     const numberOne = parseInt(prompt('Give us a number please?'));
    //     const numberTwo = parseInt(prompt('Give us another number please?'));

    //     if(isNaN(numberOne) || isNaN(numberTwo)) {
    //         alert('Insert Number');
    //     } else {
    //         isNotANumber = false;
    //     }
    // } 
    
    let numberOne = parseInt(prompt('Give us a number please?'));
    while (isNaN(numberOne)) {
        numberOne = parseInt(prompt('Insert a valid number: \n Give us a number please?'));
    } 

    let numberTwo = parseInt(prompt('Give us another number please?'));
    while (isNaN(numberTwo)) {
        numberTwo = parseInt(prompt('Insert a valid number: \n Give us another number please?'));
    } 

    alert(numberOne + numberTwo);
}

sumNumbers();

