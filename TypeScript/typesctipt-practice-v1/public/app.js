import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('yoshi', 'web work', 250);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector('.new-item-form');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
