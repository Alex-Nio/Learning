const user1 = {
  'registration date': new Date()
}
//================================================================
//? Operations with object properties

// user1.registration_date invalid
user1['registration date'] // date of registration
user1.name = 'Alex'; // add new properties
delete user1['registration date'] // delete old properties

const name = 'anonymous';
const age = 22;
const email = 'anonymous' + '1999';

// { name: "anonymous", age: 22, anonymous1999: "its anonymous email address" }
const user2 = {
  name,
  age,
  [email]: 'its anonymous email address'
}
//================================================================
//? Operator 'in'
// Check obj property
console.log('anonymous1999' in user2); // true
//================================================================
//? 'for in'
for (const key in user2) {
  console.log(`Object key = ${key}, Object value = ${user2[key]}`);
}
//================================================================
// Ссылочный тип данных
// (Каждый объект занимает своё место в памяти)
const obj1 = {}
const obj2 = {}

// obj1 == obj2 // false
// obj1 === obj2 // true (Сравнение по типу данных)
//================================================================
//* Same as
const obj3 = { name: 'Alex'}
const obj4 = {}

for (const key in obj3) {
  obj4[key] = obj3[key];
}

obj3.name = 'Bob';

//? Result: obj3 name = Bob, obj4 name = Bob
//================================================================
//* Copy object properties
const obj5 = {name: 'Alex'}
const obj6 = {}

const obj7 = Object.assign(obj6, obj5);

//! But
obj7.name = 'Bob'; // === obj6 name = Bob

//! But
const obj8 = Object.assign({}, obj6);
obj8.name = 'Real Bob';

//? obj8 = 'Real Bob';
//? obj6 = 'Bob'
//? obj5 = 'Alex'
//================================================================
//* Copy object (full copy without link in memory)
const obj9 = {name: 'Alex'}
const obj10 = {}

for (const key in obj9) {
  obj10[key] = obj9[key];
}

obj10.name = 'Real Bob';

//? obj9 = Alex
//? obj10 = Real Bob

//* Same as
const obj11 = {name: 'Alex'}
const obj12 = {...obj11}

obj12.name = 'Real Bob';

//? obj11 = Alex
//? obj12 = Real Bob
//================================================================
//* Copy object (Recursive Deep COPY)

const mainObj = {
  name: 'Alex',
  city: {
    zipcode: '122',
  }
}

const otherObj = {
  age: 22,
  city: {
    name: 'Moscow'
  }
}

const deepCopy = (obj1, obj2) => {
  const isObject = obj => obj && typeof obj === 'object';

/*
  console.log(isObject({}));          // true - это объект
  console.log(isObject([]));          // true - это массив, который тоже является объектом
  console.log(isObject(null));        // false - null не является объектом
  console.log(isObject(42));          // false - число не является объектом
  console.log(isObject('Hello'));     // false - строка не является объектом
  console.log(isObject(undefined));   // false - undefined не является объектом
*/

  const result = {};

  // Копирование свойств из первого объекта
  for (const key in obj1) {
    if (isObject(obj1[key])) {
      result[key] = deepCopy(obj1[key], {});
    } else {
      result[key] = obj1[key];
    }
  }

  // Копирование свойств из второго объекта
  for (const key in obj2) {
    if (isObject(obj2[key])) {
      if (result[key]) {
        result[key] = deepCopy(result[key], obj2[key]);
      } else {
        result[key] = deepCopy({}, obj2[key]);
      }
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
};

console.log(deepCopy(mainObj, otherObj));
//================================================================
