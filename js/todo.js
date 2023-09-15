const todoBox = document.getElementById("todo-box");
const todo = document.querySelector(".todo");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodoObject){
    const li = document.createElement('li');
    // element에 id 설정하는 방법
    li.id = newTodoObject.id;
    const span = document.createElement('span');
    span.innerText = newTodoObject.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value
    todoInput.value = "";
    const newTodoObject = { 
        id: Date.now(),
        text: newTodo,
    }
    todos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo)
    todos = parsedTodos;
}

function openTodoBox () {
    todo.classList.toggle('hidden');
}

todoBox.addEventListener("click", openTodoBox);

