const pTag = document.getElementById('hello-p');
const btnTag = document.getElementById('hello-btn');
const inputTag = document.getElementById('hello-input');

const onBtnClick = function () {
    pTag.textContent = inputTag.value;
};

const onInput = function () {
    console.log('input');
    pTag.textContent = inputTag.value;
};

btnTag.addEventListener('click', onBtnClick);
inputTag.addEventListener('input', onInput);
//
// const callback = function (text) {
//     console.log(text);
// };
//
// const doCallback = function (callback) {
//     callback('test');
// };
//
// doCallback(callback);
