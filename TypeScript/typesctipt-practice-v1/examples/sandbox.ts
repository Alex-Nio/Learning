// https://www.youtube.com/watch?v=0DzDqtcxnz0&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3

//? Types
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

//? Function that not returns something calls void
let greet = (): void => {
  console.log('hello, world!');
}

greet();

//? Function that returns number
const minus = (a: number, b: number):number => {
  return a - b;
};

let result:number = minus(10, 7);

//? Function that includes a specific types
const greet2 = (user: objWithName) => {
  console.log(`Hello user: ${user.name}: ${user.uid}`);
}

greet2({name: 'Alex', uid: 222})

// classes
class Invoice {
  // public client: string;
  // readonly details: string;
  // private amount: number;

  // То, что выше, можно сделать сразу в конструкторе
  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  // Вот так
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
  }


  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.amount = 300;
//! but invOne.details = 'some details'; incorrect (not accessible)

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});


//? Generics

interface UID {
  name: string;
  age: number;
}

const addUID = <T extends UID>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let docOne = addUID({name: 'yoshi', age: 40});

interface Resource<T> {
  uid: number,
  resourceName: string,
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: {name: 'shaun'} // this is object
}
