import React, { Component } from 'react';

export default class App extends Component {
    constructor(props:any) {
        super(props);
    }

    public load(title:string) {
        switch(title) {
            case 'Termine':
                return this.loadTerms();
            case 'Geburtstage':
                return this.loadBirthdays();
            case 'Feiertage':
                return this.loadHolidays();
            case 'Einkaufsliste':
                return this.loadShoppingList();
            case 'Aufgaben':
                return this.loadWorkList();
            case 'Empty':
                return this.loadEmpty();
            default:
                return [];
        }

        
    }

    private loadTerms() {
        let response: Array<any> = [];
        // ToDo: Request Google-Calendar all terms (to lower) created from me don't like "geburtstag
        response.push({
            "description": "Zahnarzt",
            "dateTime": "01.02.2021 10:15"
        });
        response.push({
            "description": "Copitos",
            "dateTime": "01.11.2020 09:00"
        });
        return response;
    }

    private loadBirthdays() {
        let response: Array<any> = [];
        // ToDo: Request Google-Calendar all terms (to lower) created from me like "geburtstag"
        response.push({
            "description": "Michael",
            "dateTime": "06.07.2020"
        });
        response.push({
            "description": "Alexander",
            "dateTime": "10.03.2021"
        });
        return response;
    }

    private loadHolidays() {
        let response: Array<any> = [];
        // ToDo: Request Google-Calendar all public terms
        response.push({
            "description": "Weihnachten",
            "dateTime": "24.12.2020"
        });
        response.push({
            "description": "1. Weinachtstag",
            "dateTime": "25.12.2020"
        });
        response.push({
            "description": "2. Weihnachtstag",
            "dateTime": "26.12.2020"
        });
        response.push({
            "description": "Silvester",
            "dateTime": "31.12.2020"
        });
        response.push({
            "description": "Neujahr",
            "dateTime": "01.01.2021"
        });
        return response;
    }

    private loadShoppingList() {
        let response: Array<any> = [];
        // ToDo: Request Google-Docs document (to lower) named "einkaufsliste"
        response.push({
            "description": "Wasser"
        });
        response.push({
            "description": "Milch"
        });
        response.push({
            "description": "Fleisch"
        });
        return response;
    }

    private loadWorkList() {
        let response: Array<any> = [];
        // ToDo: Request Google-Docs document (to lower) named "Aufgabenliste"
        response.push({
            "description": "Saugen"
        });
        response.push({
            "description": "Staub wischen"
        });
        response.push({
            "description": "Fenster putzen"
        });
        return response;
    }

    private loadEmpty() {
        let response: Array<any> = [];
        response.push({
            "description": this.getRandomEmptyMessage()
        });
        return response;
    }

    private getRandomEmptyMessage() {
        const list = [
            'Alle Pflichten erfüllt, so muss das!'
            , 'Du fleißiges Bienlein ;)'
            , 'Huch! Gar nichts drin in der ToDo-Liste?'
            , 'Huhu - ich bins! Deine leere ToDo-Liste!'
            , 'I bims 1 leere ToDo-Liste so vong Inhaltness her.'
            , 'zzzZZ - heut wird gepennt! ToDo-Liste leer ^^'
            , 'Jackpot! ToDo-Liste leer!'
            , 'Geil! Nichts zu erledigen!'
            , '<todolist>empty</todolist>'
            , 'Ich brumm wie ein Bär denn die ToDo-Liste ist leer.'
            , 'Hier könnte eine Aufgabe stehen. Tut sie aber nicht.'
            , 'Hier könnte ihre Werbung stehen.'
            , 'Hier könnte ein EasterEgg stehen.'
            , 'Alle Aufgaben abgearbeitet - Knorke!'
            , 'Willkommen in der Lite-Version der ToDo-Liste.'
            , 'Gönn dir mal ne Pause :)'
            , '¯\_(ツ)_/¯'
            , '⊂(◉‿◉)つ'
            , '☜(⌒▽⌒)☞'
            , '( ͡° ᴥ ͡°)'
            , '	(｡◕‿‿◕｡)'
            , '[̲̅$̲̅(̲̅ιο̲̅̅)̲̅$̲̅]'
            , '(ノ ゜Д゜)ノ ︵ ǝןqɐʇ ɐ ǝʞıן ʇxǝʇ dıןɟ'
            , '(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)'
            , '─=≡Σ((( つ◕ل͜◕)つ'
            , '(ʘ‿ʘ)╯'
            , 'ToDo-Liste ist heut leider aus.'
            , 'Heute ist nicht alle Tage, Aufgaben kommen wieder, keine Frage.'
            , 'Du arbeitest zu viel, hier gibt es nix mehr!'
            , 'Nix zu tun, oder was?'
            , 'Warum ist meine ToDo-Liste leer? Nein.'
            , 'Die ToDo-Liste ist erschreckend leer, wenns bloß jeden Tag so wär.'
            , 'Heute gibt es für deinen Fleiß, ToDo-Liste leer für dich als Preis.'
            , 'ToDo-Liste kostet heute extra. :/'
            , 'Denk nicht, dass du jetzt faulenzen kannst! D:<'
            , 'Hmm...'
        ]
        return list[this.getRandomIntInclusive(0, list.length-1)]
    }

    getRandomIntInclusive(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min; 
    }
}