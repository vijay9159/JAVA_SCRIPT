const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') return;

  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <input type="checkbox" onchange="toggleTodoDone(this)">
    <span>${todoText}</span>
    <span class="remove-btn" onclick="removeTodoItem(this)">Remove</span>
  `;
  todoList.appendChild(todoItem);
  todoInput.value = '';
}

function toggleTodoDone(checkbox) {
  const todoItem = checkbox.parentElement;
  todoItem.classList.toggle('done');
}

function removeTodoItem(removeBtn) {
  const todoItem = removeBtn.parentElement;
  todoList.removeChild(todoItem);
}
