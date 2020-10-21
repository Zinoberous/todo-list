import React, { Component } from 'react';
import './index.css';

// import Banner from '../../assets/banner/overviewBanner.png';

import List from '../list';

export default class App extends Component {
    constructor(props:any) {
        super(props);
    }

    // ToDo: Create login to Google

    render() {
        return (
            <div id="overview">
                <div id="headline">ToDo-Liste</div>
                <List />
                {/* <img src={Banner}/> */}
            </div>
        );
    }
}
