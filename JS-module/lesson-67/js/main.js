"use strict";

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const todos = [];

const getNewId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			return Math.max(maxId, todo.id);
		}, 0) + 1
	);
};

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodo = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (todo === undefined) {
		console.error(`Todo with id ${todoId} is not found`);
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodo = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(`Todo with id ${todoId} is not found`);
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
