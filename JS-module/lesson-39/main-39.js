// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const me = {
	name: "Rahat",
	age: 19,
	isStudent: true,
	country: "Kazakhstan",
};

console.log(me);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = (object) => {
	for (const key in object) {
		return true;
	}
	return false;
};

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
	title: "Пройти модуль",
	description: "Пройти 10 уроков из модуля по JavaScript",
	isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
	const copy = { ...object, ...modifications };
};

const newTask = cloneAndModify(task, {
	priority: "Высокий",
	isCompleted: true,
});

for (const key in newTask) {
	console.log(key);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const callAllMethods = (object) => {
    for (const key in object) {
        if(typeof object[key === "function"]) {
            object[key]();
        }
    }
}

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);


