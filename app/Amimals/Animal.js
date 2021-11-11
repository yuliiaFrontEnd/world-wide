import { getIncrement } from "../../utils.js";

export class Animal{
    #type;
    #idenrifier;
    #power;
    #fulness;
    #age;

    #coords;
    #marker;

    /**
     * @this  {Animal}
     */
    constructor(type = 'animal') {
        this.#type = type;
        this.#power = 100;
        this.#fulness = 100;
        this.#age = 1;
        
        this.#idenrifier = getIncrement();

        this.#generateStartCoords();
    }

    walk() { }
    eat() { }

    get id() {
        return this.#idenrifier;
    }
    get type(){
        return this.#type;
    }
    get power() {
        return this.#power;
    }
    get fulness() {
        return this.#fulness;
    }
    get age() {
        return this.#age;
    }
    get coords() {
        return this.#coords;
    }

    get market() {
        return this.#marker;
    }
    set market(value) {
        if(this.#marker) return;
        this.#marker = value;
    }

    #generateStartCoords() {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        this.#coords = {
            'x': x,
            'y': y,
        }
    }
}