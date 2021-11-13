const $inputTodo = document.querySelector('.input-todo');
const $btnTodoAdd = document.querySelector('.button-todo-add');
const $todos = document.querySelector('.todos');
const $main = document.querySelector('.main');
const arr = localStorage.getItem('goals') === null ? [] : JSON.parse(localStorage.getItem('goals'));

const renderElementsFromLocalStorage = (arr) => {
  arr.forEach( (item) => {
    const $todo = document.createElement('div');
    const $todoText = document.createElement('p');
    const $buttonTodoDelete = document.createElement('button');

    $todo.classList.add('todo')
    $todoText.classList.add('todo-text')
    $buttonTodoDelete.classList.add('button')
    $buttonTodoDelete.classList.add('button-todo-delete')
    $buttonTodoDelete.name = 'todo-deletor';
    $buttonTodoDelete.dataset.id = item.id;
    
    $todoText.innerText = item.goalText;
    
    $todo.appendChild($todoText)
    $todo.appendChild($buttonTodoDelete)

    $todos.append($todo)
  })

  return $todos
};

renderElementsFromLocalStorage(arr);

const createElement = (goalText) => {
  const $todo = document.createElement('div');
  const $todoText = document.createElement('p');
  const $buttonTodoDelete = document.createElement('button');

  const counter = arr.length; 

  $todo.classList.add('todo')
  $todoText.classList.add('todo-text')
  $buttonTodoDelete.classList.add('button')
  $buttonTodoDelete.classList.add('button-todo-delete')
  $buttonTodoDelete.name = 'todo-deletor';
  $buttonTodoDelete.dataset.id = counter;
  
  $todoText.innerText = goalText;
  
  $todo.appendChild($todoText)
  $todo.appendChild($buttonTodoDelete)
  
  const toDoObj = {id: counter, goalText,};

  arr.push(toDoObj)

  if (!localStorage.getItem('goals')) {
    localStorage.setItem('goals', JSON.stringify(arr))
  } else {
    localStorage.removeItem('goals')
    localStorage.setItem('goals', JSON.stringify(arr))
  }

  return $todo
};

$btnTodoAdd.addEventListener('click', () => {
  if ($inputTodo.value.length != 0) {
    $todos.appendChild( createElement($inputTodo.value) ) 
    
    $inputTodo.value = '';
  }
})

$todos.addEventListener('click', (e) => {
  e.preventDefault()

  const targetId = e.target.getAttribute('data-id');
  let targetIndex

  arr.forEach( (item, index) => {
    if (item.id == targetId) {
      targetIndex = index;
    }
  })
  arr.splice(targetIndex, 1)
  
  localStorage.removeItem('goals')
  $todos.innerHTML = '';
  localStorage.setItem('goals', JSON.stringify(arr))
  
  renderElementsFromLocalStorage(arr)
})

window.addEventListener('keydown', (e) => {
  if (e.code == 'Enter' || e.key == 'Enter') {
    $todos.appendChild( createElement($inputTodo.value) )
    $inputTodo.value = '';
  }
})