/**
 * [x] Value van textarea opslaan in nieuwe todo item
 *    [x] Bij klik save knop
 *    [x] Value textarea opvragen
 *    [x] New todo item in todo list (DOM)
 *    [x] update todo count
 *    [x] textarea leegmaken
 * [x] Clear all knop
 *    [x] bij klik clear all knop
 *    [x] todo list leegmaken
 *    [x] done list leegmaken
 *    [x] update todo count
 *    [x] update done count
 * [x] done btn bij todo item
 *    [x] click op done btn
 *    [x] nieuw done item maken met tekst todo item
 *    [x] update done count
 *    [x] todo verwijderen
 *    [x] update todo count
 * [x] remove btn bij done item
 *    [x] click op remove btn
 *    [x] verwijder done item
 *    [x] update done count
 * [ ] active todo item
 *    [x] bij klik todo item (niet done btn)
 *    [x] wanneer todo item al actief is
 *       [x] maak inactief (remove active class)
 *    [x] wanneer todo item niet actief is
 *       [x] maak actief (add active class)
 *       [x] maak alle andere todo items inactief (remove active class)
 * [ ] cleanup page on load
 *
 *
 * DOM Elements
 *    $textarea
 *    $saveBtn
 *    $clearBtn
 *    $todoList
 *    $doneList
 *    $todoCount
 *    $doneCount
 *    $doneBtn (multiple/dynamic)
 *    $removeBtn (multiple/dynamic)
 */

const $textarea = document.getElementById('todo-input');
const $saveBtn = document.getElementById('save-btn');
const $clearBtn = document.getElementById('clear-all-btn');
const $todoList = document.getElementById('todo-list');
const $doneList = document.getElementById('done-list');
const $todoCount = document.getElementById('todo-count');
const $doneCount = document.getElementById('done-count');

function updateTodoCount() {
  $todoCount.textContent = $todoList.childElementCount;
}

function updateDoneCount() {
  $doneCount.textContent = $doneList.childElementCount;
}

function printTodoItem(todoText) {
  const template = `<div class="box">
      <p>${todoText}</p>
      <a class="done-btn fas fa-check-circle fa-2x"></a>
    </div>`;

  // const $box = document.createElement('div');
  // $box.classList.add('box');
  // const $p = document.createElement('p');
  // $p.textContent = todoText;
  // $box.appendChild($p);
  // const $doneBtn = document.createElement('a');
  // $doneBtn.classList.add('done-btn', 'fas', 'fa-check-circle', 'fa-2x');
  // $box.appendChild($doneBtn);
  // $todoList.appendChild($box);

  $todoList.insertAdjacentHTML('beforeend', template);
  updateTodoCount();
}

function printDoneItem(doneText) {
  const template = `<div class="box">
      <p>${doneText}</p>
      <a class="remove-btn fas fa-times-circle fa-2x"></a>
    </div>`;

  $doneList.insertAdjacentHTML('beforeend', template);
  updateDoneCount();
}

function saveBtnClick() {
  const todoText = $textarea.value;
  printTodoItem(todoText);
  $textarea.value = '';
}

function clearAllBtnClick() {
  $todoList.innerHTML = '';
  updateTodoCount();
  $doneList.innerHTML = '';
  updateDoneCount();
}

function todoItemDone($btn) {
  const $box = $btn.closest('.box');
  $btn.className = 'remove-btn fas fa-times-circle fa-2x';
  $doneList.insertAdjacentElement('beforeend', $box);
  // $doneList.appendChild($box);

  updateDoneCount();
  updateTodoCount();

  // const $p = $box.querySelector('p');
  // const doneText = $p.textContent;
  // printDoneItem(doneText);
  // $box.remove();
}

function todoListClick(event) {
  const $target = event.target;

  if ($target.matches('.done-btn')) {
    todoItemDone($target);
  }

  if ($target.matches('.box') || $target.matches('.box p')) {
    const $box = $target.closest('.box');
    if ($box.classList.contains('active')) {
      $box.classList.remove('active');
    } else {
      const $activeTodoItems = $todoList.querySelectorAll('.active');
      for (let i = 0; i < $activeTodoItems.length; i++) {
        $activeTodoItems[i].classList.remove('active');
      }

      // werkt omdat er telkens maar 1 element actief is
      // if ($activeTodoItems.length > 0) {
      //   $activeTodoItems[0].classList.remove('active');
      // }

      $box.classList.add('active');
    }
  }

  // if (event.target.classList.contains('done-btn')) {
  //   console.log('you found the button with classlist');
  // }
}

function doneListClick(event) {
  const $target = event.target;

  if ($target.matches('.remove-btn')) {
    const $box = $target.closest('.box');
    $box.remove();
    updateDoneCount();
  }
}

clearAllBtnClick();

$saveBtn.addEventListener('click', saveBtnClick);
$clearBtn.addEventListener('click', clearAllBtnClick);
$todoList.addEventListener('click', todoListClick);
$doneList.addEventListener('click', doneListClick);
