import React, { Component } from 'react';
import './index.css';

import data from '../../assets/data.json';

import Listhead from '../listhead';
import Listheadmodel from '../listhead/model';
import Listelement from '../listelement';
import Listelementmodel from '../listelement/model';

import Service from './service';

export default class App extends Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div id="list">
                {this.createListheads()}
            </div>
        );
    }

    private createListheads() {
        let list: Array<any> = [];
        for(let i = 0; i != data.elements.length; i++) {
            const head = data.elements[i];
            const elements = this.createListelements(head.title, head.eColor1, head.eColor2)
            const elementsId = head.title + 'Elements';
            if (elements.length !== 0) {
                list.push(
                    <div className="category">
                        <Listhead {...new Listheadmodel(head)}/>
                        <div id={elementsId} className="roundCornerDown collapse show">
                            {elements}
                        </div>
                    </div>
                );
            }
        }

        if (list.length === 0) {
            list.push(
                <div className="category">
                    <Listhead {...new Listheadmodel(data.empty)}/>
                    <div id="EmptyElements" className="roundCornerDown collapse show">
                        {this.createListelements(data.empty.title, data.empty.eColor1, data.empty.eColor2)}
                    </div>
                </div>
            )
        }
        return list;
    }

    private createListelements(title:string, color1:string, color2:string) {
        let list: Array<any> = [];
        let result: Array<any> = [];
        
        result = new Service({}).load(title)

        for(let i = 0; i !== result.length; i++) {
            const element = result[i];
            element.color = this.getColor(i, color1, color2)
            list.push(
                <Listelement {...new Listelementmodel(element)}/>
            );
        }

        return list;
    }

    private getColor(i:number, color1:string, color2:string) {
        return i % 2 === 0 ? color1 : color2;
    }
}
