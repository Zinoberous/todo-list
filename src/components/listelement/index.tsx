import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

import Listelementmodel from './model';

export default class App extends Component<Listelementmodel> {
    constructor(props: Listelementmodel) {
        super(props);
    }

    render() {
        const Div = styled.div`
            background-color: ${props => props.theme.backgroundColor};
        `;

        return (
            <Div className="listelement" theme={{backgroundColor: this.props.Color}}>
                {this.props.Description}
                <br/><div className="dateTime">{this.props.DateTime ?? ''}</div>
            </Div>
        );
    }
}
