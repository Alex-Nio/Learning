/*
  Задача 1.
  Напиши функцию создания генератора sequence(start, step).
  Она при вызове возвращает другую функцию-генератор,
  которая при каждом вызове дает число на 1 больше, и так до бесконечности.

  Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.

  Шаг можно не указывать, тогда он будет равен одному.
  Начальное значение по умолчанию равно 0.
  Генераторов можно создать сколько угодно.

  var generator = sequence(10, 3);
  var generator2 = sequence(7, 1);

  console.log(generator()); // 10
  console.log(generator()); // 13
  console.log(generator2()); // 7
  console.log(generator()); // 16
  console.log(generator2()); // 8
*/

function sequence(start = 0, step = 1) {
  let current = start;

  return function() {
    const result = current;
    current += step;
    return result;
  };
};

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

/*
  Задача 2.
  Также, нужна функция take(fn, count) которая вызвает функцию fn заданное число (count) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:

  var gen2 = sequence(0, 2);
  console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
*/

function take(fn, count) {
  const result = [];

  do {
    count = --count;
    result.push(fn());

  } while (count !== 0)

  return result;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

/*
  Задача 3.
  Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

  function square(x) { return x * x; } // возведение в квадрат
  console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
  console.log(map(square, [])); // []

  Обрати внимание: функция не должна изменять переданный ей массив:
  var arr = [1, 2, 3];
  console.log(map(square, arr)); // [1, 4, 9]
  console.log(arr); // [1, 2, 3]
*/

function map(fn, array) {
  let newArr = [];

  array.forEach(element => {
      newArr.push(fn(element));
  });

  return newArr;
}

function square(x) { return x * x; }

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  Задача 4.
  Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример:

  var gen = sequence(1, 1);
  function square(x) { return x * x; }
  var squareGen = fmap(square, gen);

  console.log(squareGen()); // 1
  console.log(squareGen()); // 4
  console.log(squareGen()); // 9
  console.log(squareGen()); // 16

  При этом, необходимо сделать так, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове

  function add(a, b) {
    return a + b;
  }

  Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
  var squareAdd = fmap(square, add);
  console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
  console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

  Эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
*/

// берет следующее значение из gen и пропускает его через функцию a.
// в качестве gen можно было указать функцию с аргументами

//* Решение 1
// function fmap(a, gen) {
//   return function(...args){
//     return a(gen(...args));
//   }
// }
//* Решение 2
const fmap = function(a, gen){
  let x = 0;
  let x1 = 0;

  let generation1 = function(){
      let arr1 = [];

      for(let i = 0; i < arguments.length; i++){
        arr1[i] = arguments[i];
      }

      x = gen.apply(null, arr1);
      x1 = a(x);

      return x1;
    }

    return generation1;
  }

function square(x) { return x * x; }
function add(a, b) { return a + b; }

const squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

/*
  Задача 5.
*/
