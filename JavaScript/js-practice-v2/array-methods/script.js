const arr1 = ['A', 'B', 'C', 'D'];

//? For method
arr1.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

const arr2 = ['A', 'B', 'C', 'D'];
//==================================================================
//? indexOf method
// args: Element to find, start index
// do: Производит поиск индекса элемента в массиве с 0
console.log(arr2.indexOf('C', 2));
//==================================================================
//? lastIndexOf method
// args: Element to find, start index
// do: Производит поиск индекса элемента в массиве с конца массива
/*
*Примечание:
Работает только с примитивами, а так же
Если элемент не найден или не примитив,
то всегда возвращает индекс = -1
*/
console.log(arr2.lastIndexOf('C', 0));
//==================================================================
//? findIndex method | findLastIndex method
// args: callback(element, index, array)
const users1 = [
  {name: 'Alex', age: 24},
  {name: 'Mickle', age: 30},
  {name: 'Bob', age: 30},
  {name: 'John', age: 40},
]

const users2 = [
  {name: 'Alex', age: 24},
  {name: 'Mickle', age: 30},
  {name: 'Bob', age: 30},
  {name: 'John', age: 40},
]

users1.findIndex((element, index, array) => {
  if (element.name === 'Mickle') {
    return true;
  }
});
//==================================================================
//? includes method
// args: element to find, start index
// Returns Boolean flag
/*
*Примечание:
Работает только с примитивами
*/
arr2.includes('B', 0) // true
//==================================================================
//? some method
// args: callback(element, index, array))
users1.some((element, index, array) => {
  console.log('example 1', element.age <= 18);
});

/*
*Примечание:
Один из элементов массива имеет age >= 18
*/
users1.some((user) => user.age >= 18) // true
//==================================================================
//? every method
// args: callback(element, index, array)
// Check all elements in the array
users1.every((element, index, array) => {
  console.log('example 2', element.age >= 18);
});

/*
*Примечание:
Каждый из элементов массива имеет age <= 18
*/
users1.every((user) => user.age <= 18) // false
//==================================================================
//? find method
// args: callback(element, index, array)
/*
*Примечание:
Возвращает первый найденный элемент
*/
users1.find(user => user.age === 30) // { name: "Mickle", age: 30 }
//==================================================================
//? filter method
// args: callback(element, index, array)
/*
*Примечание:
Возвращает все найденные элементы
*/

const newArr1 = users1.filter(user => user.age === 30)
// { name: "Mickle", age: 30 }, { name: "Bob", age: 30 }

/*
!Важно:
Изменяя newArr[0].age, изменяется объект, на который ссылается как newArr[0], так и users1[1].
Поэтому изменение отображается в обоих массивах.
*/
newArr1[0].age = 222
console.log('new arr', newArr1);
console.log('users1 arr', users1);
/*
!Важно:
Для того, что бы создать новый массив с копиями объектов, а не с ссылками на исходные объекты, нужно создать глубокие копии этих объектов. Один из способов сделать это - использовать метод map вместе с деструктуризацией:
*/
const newArr2 = users2
    .filter(user => user.age === 30)
    .map(user => ({ ...user }));

newArr2[0].age = 222;

console.log('new arr', newArr2);
console.log('users2 arr', users2);
//==================================================================
//? map method
// args: callback(element, index, array)
/*
*Примечание:
Возвращает новый измененный массив
*/
const usersFormatted = users2.map(user => {
  if (user.name === 'Mickle') return { name: 'Nick', age: 11};
  else if (user.name === 'Bob') return { name: 'Ann', age: 21};
  return user;
});

console.log(usersFormatted);
//==================================================================
//? reduce method
// args: callback(accumulator, element, index, array), start value
const ageSum1 = users2.reduce((acc, el) => acc + el.age, 0); // 124
const ageSum2 = users2.reduce((acc, el) => acc + el.age, 5); // 129
//==================================================================
//? reverse method
let str1 = 'Мама мыла раму';
str1 = str1.split('').reverse().join(''); // умар алым амаМ
/*
*Примечание:
Мутирует исходный массив
*/
const reversedUsers1 = users1.reverse(); // users2 === reversedUsers1

// ! Как избежать мутации:
const reversedUsers2 = [...users2].reverse(); // users2 !== reversedUsers2
//==================================================================
//? sort method
const names1 = ['Alex', 'Michael', 'Bob']
const names2 = ['Alex', 'Michael', 'Bob']
const numbers = [1, 2, 400, 20, 8];
/*
*Примечание:
Мутирует исходный массив
*/
const sortedNames1 = names1.sort();
const sortedNames2 = [...names2].sort();
const sortedNumbers1 = [...numbers].sort((a, b) => a - b); // По возрастанию
const sortedNumbers2 = [...numbers].sort((a, b) => b - a); // По убыванию
//==================================================================
//==================================================================
//==================================================================
/*
! Методы, возвращающие новый массив (не работают по ссылке):
filter(callback)
map(callback)
slice(begin, end)
concat(value1, value2, ..., valueN)
reduce(callback, initialValue) (если используется для создания массива)
flat(depth)
flatMap(callback)
reduceRight(callback, initialValue) (если используется для создания массива)
Array.from(arrayLike, mapFn, thisArg)
Array.of(element0, element1, ..., elementN)

Эти методы создают новый массив, поэтому изменения в новом массиве не повлияют на исходный массив.

! Методы, модифицирующие исходный массив (работают по ссылке):
push(element1, ..., elementN)
pop()
shift()
unshift(element1, ..., elementN)
splice(start, deleteCount, item1, item2, ..., itemN)
sort(compareFunction)
reverse()
fill(value, start, end)
copyWithin(target, start, end)

Эти методы изменяют исходный массив, поэтому любые изменения будут отражены в исходном массиве.
*/
//==================================================================
