import { Animal } from "./Animal.js";

export class Predator extends Animal {

    constructor() {
        super('predator');
        console.groupCollapsed('#' + this.id + ' Predator Born');
            console.log('power - ' + this.power);
            console.log('fulness - ' + this.fulness);
            console.log('age - ' + this.age);
            console.table([this.coords]);
        console.groupEnd();
    }

    walk(){
        super.walk();

        console.log('Predator Walk');
    }
}