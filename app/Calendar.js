import { appSpeed } from "../utils.js";

export class Calendar {
    #year;
    #season;
    #month;
    #day;
    
    #timer;    
    #draw;

    constructor( draw = () => {} ) {
        this.#season = 0;
        this.#year = 1;
        this.#month = 1;
        this.#day = 1;

        this.#draw = draw;
    }
    start() {
        this.#timer = setInterval(() => {
            this.#newDay();
            this.#draw(this.calendar);
        }, appSpeed() );
    }
    stop() {
        clearInterval(this.#timer);
    }

    get season() {
        return this.#seasonsList()[this.#season]; 
    }

    get calendar() {
        return {
            'day' : this.#day,
            'month' : this.#month,
            'season' : this.season,
            'year' : this.#year,
        }
    }

    #newDay() {
        this.#day++;

        if(this.#day % 30 == 0)
            this.#month++;
        
        if(this.#day % 90 == 0)
            this.#changeSeason();
        
        if(this.#day % 360 == 0) {
            this.#day = 1;
            this.#month = 1;
            this.#year++;
        }
    }

    #changeSeason() {
        if (this.#season == 3){
            this.#season = 0;
        } else {
            this.#season++;
        }
    }

    #seasonsList() {
        return [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
}