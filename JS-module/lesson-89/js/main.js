import { getTodos } from "./storage.js";
import { renderTodos, initTodoHandlers, } from "./dom.js";

const todos = getTodos() || [];

document.addEventListener("DOMContentLoaded", () => {
	renderTodos(todos);
	initTodoHandlers(todos);
})
