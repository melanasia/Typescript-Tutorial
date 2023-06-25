// Interfaces
// If we have a variable in the future that is declaring itself to be an IsPerson, then it must have the following properties and methods.
    // interface IsPerson {
    //     name: string;
    //     age: number;
    //     speak(a: string): void;
    //     spend(a: number): number;
    // }

    // const me: IsPerson = {
    //     name: 'Melanie',
    //     age: 32,
    //     speak(text: string): void {
    //         console.log(text);
    //     },
    //     spend(amount: number): number {
    //         console.log('I spent', amount);
    //         return amount;
    //     }
    // }

    // console.log(me);

import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// instantiate the class and create an object based on it

// const invOne = new Invoice('mario', 'work on the website', 250);
// const invTwo = new Invoice('luigi', 'work on the website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (ev: Event) => {
    ev.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber) 
    }

    list.render(doc, type.value, 'end');

    // console.log(doc
    //     // type.value,
    //     // tofrom.value,
    //     // details.value,
    //     // amount.valueAsNumber,
    // );
})