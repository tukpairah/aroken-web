"use strict";

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
const forms = document.querySelectorAll(".form");
const inputs = document.querySelectorAll(".inputs");
const todosElements = document.querySelectorAll(".todos");

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
const createTodoElement = (text) => {
	const todoElement = document.createElement("li");
	todoElement.classList.add("todo");
	todoElement.dataset.id = todo[todoKeys.id];
	todoElement.innerHTML = `
  <div class="todo-text">${text}</div>
  <div class="todo-actions">
    <button class="button-complete button">&#10004;</button>
    <button class="button-delete button">&#10006;</button>
  </div>
  `;
  return todoElement;
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(text);
  todoElement.prepend(todoElement);
}

forms.addEventListener("submit", event => {
	event.preventDefault();
	const text = inputs.value.trim();
	if (!text) return;
	handleCreateTodo(todos, inputs.value.trim());
	inputs.value = "";
})

todosElement.addEventListener("click", event => {
	const todo = event.target.closest(".todo");
	if (!todo) return;

	if(event.target.matches(".button-complete")) {
		completeTodoById(todos, Number(todo.dataset.id));
		todo.classList.toggle("completed");
	}
	
	if(event.target.matches(".button-delete")) {
		deleteTodoById(todos, Number(todo.dataset.id));
		todo.remove();
	}
})