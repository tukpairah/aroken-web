// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push({ name: "Ann", age: 19, isAdmin: false });
users.push({ name: "Jack", age: 43, isAdmin: true });

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = (users) => {
	let sum = 0;

	users.forEach((element) => {
		sum += element.age;
	});

	return sum / users.length;
};

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = (users) => {
	const admins = [];

	users.forEach((element) => {
		if (element.isAdmin === true) {
			admins.push(element.name);
		}
	});

	return admins;
};

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n = 1) {
	const arrLength = arr.length;
	if (arr.length < n) {
		console.error(`n(${n}) не может быть меньше длины массива: ${arrLength}`);
		return;
	} // это я подсмотрел с практики, не знал как реализовать. теперь знаю

	const newArray = [];
	for (let i = 0; i < n; i++) {
		newArray.push([i]);
	}
	return newArray;
}
