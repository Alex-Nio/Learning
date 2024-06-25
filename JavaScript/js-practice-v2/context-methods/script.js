//================================================================
//? call method
// this: Function, thisArg: any, ...argArray: any[]
function foo1() {
  console.log(this.name);
}

const user = {
  name: 'Bob',
  age: 22
};

// Привязываем контекст к функции foo1
foo1.call(user);
//================================================================
//? Передача параметров
function foo2(param1, param2) {
  console.log(`${param1} ${param2} ${this.name}`);
}

const param1 = 'Hello'
const param2 = 'Boss'

// Передача параметров после привязки контекста
foo2.call(user, param1, param2);
//================================================================
//? apply method
// this: Function, thisArg: any, argArray?: any
function foo3(...params) {
  let greetings = params.join(' ').trim();

  console.log(`${greetings} ${this.name}`);
}

const params = ['Hello', 'Boss '];

// Передача параметров после привязки контекста
foo3.apply(user, [...params]);
// Или
foo3.apply(user, ['Hello', 'Boss']);

user.name = 'Alex';
foo3.apply(user, [...params]);

//================================================================
//? bind method
// this: Function, thisArg: any, ...argArray: any[]
function foo4(customArg, functionArg) {
  console.log(`${functionArg}`);
  console.log(`${customArg} ${this.name}`);
}

const bar1 = foo4.bind(user, 'Hi');

bar1('Hey');

// Или
function foo5(a, b) {
  console.log(a * b);
}

const bar2 = foo5.bind(null, 2);

// передаем параметр в качестве b
bar2(2); // 4
bar2(4); // 8
bar2(6); // 12

