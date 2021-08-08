const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos-key"

let todos = [];

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function showTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function saveTodo(event) {
    event.preventDefault();
    const newTodoObj = {
        todo: todoInput.value,
        id: Date.now()
    }
    todoInput.value = "";
    todos.push(newTodoObj);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    showTodo(newTodoObj);
}

todoForm.addEventListener("submit", saveTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    todos.forEach(showTodo);
}
