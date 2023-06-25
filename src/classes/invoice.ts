import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;
    // errors so far because we need to initialize values (in a constructor)

    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // Shorthand below (with use of access modifiers)

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,

    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}