import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

import CollapseImage from '../../assets/icons/collapse.png';
import ExpandImage from '../../assets/icons/expand.png';

import Listheadmodel from './model';

interface IState {
    image:string
}

export default class App extends Component<Listheadmodel, IState> {    
    constructor(props: Listheadmodel) {
        super(props);
        this.state ={image: CollapseImage}

        this.changeImage = this.changeImage.bind(this);
    }

    render() {
        const Div = styled.div`
            background-color: ${props => props.theme.backgroundColor};
        `;

        const buttonId = this.props.Title + 'CollapseButton';
        const elementsId = '#' + this.props.Title + 'Elements';
        const linkId = this.props.Title + 'Source';

        return (
            <Div className="listhead roundCornerUp" theme={{backgroundColor: this.props.Color}}>
                <span className="toggle">
                    <button id={buttonId} className="d-none" data-toggle="collapse" data-target={elementsId} onClick={this.changeImage}></button>
                    <label htmlFor={buttonId}><img className="icon pointer" src={this.state.image}/></label>
                </span>
                <span className="title">{this.props.Title}</span>
                <span className="source">
                    <a id={linkId} className="d-none"></a>
                    <label htmlFor={linkId}><img className="icon pointer" src={require(`../../assets/${this.props.Icon}`)}/></label>
                </span>
            </Div>
        );
    }

    changeImage() {
        if(this.state.image === CollapseImage) {
            this.setState({image: ExpandImage});
        } else {
            this.setState({image: CollapseImage});
        }
    }
}
