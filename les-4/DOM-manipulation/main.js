console.log(document.body.tagName);

let pTag = document.getElementById('a-p-tag');
let btn = document.getElementById('btn-id');
let input = document.getElementById('input-id');
let divContainer = document.getElementById('new-div-container');

console.log(pTag.tagName);

console.log(pTag.innerHTML);
console.log(pTag.outerHTML);
console.log(pTag.textContent);

// pTag.textContent = '<span>Test 123</span> test 456';

// setTimeout(function () {
//     btn.hidden = true;
// }, 2000);

console.log(input.value);

// setInterval(function () {
//     console.log(input.value);
// }, 500);

console.log(pTag.className);
console.log(pTag.classList);

// pTag.className = 'green small thin';
pTag.classList.remove('big', 'bold');
console.log(pTag.classList.contains('small'));
pTag.classList.add('small', 'thin');
// setInterval(function () {
//     pTag.classList.toggle('red');
// }, 500);
console.log(pTag.classList.contains('small'));

console.log(pTag.style);
pTag.style.backgroundColor = '';
pTag.style.height = '50px';

console.log(getComputedStyle(pTag));

let newDiv = document.createElement('div');
newDiv.classList.add('big');
newDiv.textContent = 'Hello new div';
divContainer.replaceWith(newDiv);

pTag.insertAdjacentHTML('beforebegin', '<p class="test">A new p</p>');
btn.remove();
