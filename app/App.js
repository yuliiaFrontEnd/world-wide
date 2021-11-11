import { UI } from "./UI.js";
import { Predator } from "./Amimals/predator.js";
import { Calendar } from "./Calendar.js";


export class App
{
    #animals;
    #ui;
    #calendar;

    constructor() {
        this.#ui = new UI();
        this.#calendar = new Calendar((calendar) => {
            this.#ui.drawCalendar(calendar);
            this.#newDay();
        });
    }

    generateWorld() {
        console.log('--Start generate world');
        
        this.#animals = [];
        this.#generatePredators();

        this.#ui.drawAnimals(this.#animals);

    }
    start() {
        console.log('START');
        this.#calendar.start();

    }

    #newDay() {
        /* this.#animals.push(new Predator());
        this.#ui.drawAnimals(this.#animals); */
    }

    #generatePredators() {
        let count = 1;
        for (let i = 0; i < count; i++) {
            this.#animals.push(new Predator());            
        }
    }
}
