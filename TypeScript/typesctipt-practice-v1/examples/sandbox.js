"use strict";
// https://www.youtube.com/watch?v=0DzDqtcxnz0&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3
//? Function that not returns something calls void
let greet = () => {
    console.log('hello, world!');
};
greet();
//? Function that returns number
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
//? Function that includes a specific types
const greet2 = (user) => {
    console.log(`Hello user: ${user.name}: ${user.uid}`);
};
greet2({ name: 'Alex', uid: 222 });


