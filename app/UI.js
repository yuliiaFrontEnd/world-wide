import { appSpeed } from "../utils.js";

export class UI {
    #mainBlock = document.getElementById('app');
    #calendarBlock;
    
    constructor() {
        let calendarBlock = document.createElement('DIV');
            calendarBlock.classList.add('js--calendar', 'calendar', 'ui--calendar');
        this.#calendarBlock = calendarBlock;

        this.#mainBlock.append(this.#calendarBlock);

        this.#showSpeed();
    }

    drawCalendar(calendar) {
        this.#drawYear(calendar.year);
        this.#drawSeason(calendar.season);
        this.#drawMonth(calendar.month);
        this.#drawDay(calendar.day);
    }

    drawAnimals(animals)
    {
        animals.forEach(animal => {
            let block = animal.market || this.#creaNewMarker(animal.type);

            block.style.top = animal.coords.y + 'px';
            block.style.left = animal.coords.x + 'px';

            animal.market = block;
        });    
    }

    #creaNewMarker(type) {
        let block = this.#newBlock('animal', 'DIV');
            block.classList.add('css--' + type);
        
        this.#mainBlock.append(block);

        return block;
    }
    
    #drawYear(year) {
        let block = document.querySelector('span.js--year.year');
        if (!block) {
            block = this.#newBlock('year');
        }

        block.innerText = 'YEAR - ' + year;
        this.#calendarBlock.append(block);
    }

    #drawSeason(season) {
        let block = document.querySelector('span.js--season.season');
        if (!block) {
            block = this.#newBlock('season');
        }

        block.innerText = 'SEASON - ' + season;
        this.#calendarBlock.append(block);
    }
    
    #drawMonth(month) {
        let block = document.querySelector('span.js--month.month');
        if (!block) {
            block = this.#newBlock('month');
        }

        block.innerText = 'MONTH - ' + month;
        this.#calendarBlock.append(block);
    }
    
    #drawDay(day) {
        let block = document.querySelector('span.js--day.day');
        if (!block) {
            block = this.#newBlock('day');
        }

        block.innerText = 'DAY - ' + day;
        this.#calendarBlock.append(block);
    }
    
    #showSpeed() {
        let block = this.#newBlock('speed');
            block.innerText = 'speed:' + appSpeed();
        this.#mainBlock.append(block);
    }

    #newBlock(_class, type = 'SPAN') {
        let block = document.createElement(type);
        block.classList.add('js--' + _class, _class, 'ui--' + _class);
        return block;
    }
}