const $inputTodo = document.querySelector('.input-todo');
const $btnTodoAdd = document.querySelector('.button-todo-add');
const $todos = document.querySelector('.todos');

$btnTodoAdd.addEventListener('click', function() {
  if ($inputTodo.value.length != 0) {
    $todos.appendChild( createGoal($inputTodo.value) ) 
    $inputTodo.value = "";
  }

  deleteGoal()
})

function createGoal(goalText) {
  const $todo = document.createElement('div');
  const $todoText = document.createElement('p');
  const $buttonTodoDelete = document.createElement('button');

  $todoText.innerText = goalText;
  $buttonTodoDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/>
</svg>`;

  $todo.classList.add('todo')
  $todoText.classList.add('todo-text')
  $buttonTodoDelete.classList.add('button')
  $buttonTodoDelete.classList.add('button-todo-delete')

  $todo.appendChild($todoText)
  $todo.appendChild($buttonTodoDelete)

  return $todo
}

function checkKeyPrassed(event) {
  if ($inputTodo.value.length != 0) {
    if (event.keyCode == 13) {
      $todos.appendChild( createGoal($inputTodo.value) ) 
      $inputTodo.value = "";
    }
  }
  
  deleteGoal()
}

function deleteGoal() {
  const arrBtnTodoDelete = document.querySelectorAll('.button-todo-delete');
  const arrTodo = document.querySelectorAll('.todo');

  for (let i = 0; i < arrBtnTodoDelete.length; i++){
    arrBtnTodoDelete[i].addEventListener('click', function() {
      arrTodo[i].remove()
    })
  }
}