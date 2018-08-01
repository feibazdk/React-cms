import React from 'react';
import TopNav from '../sidenav/sidenav.jsx'
import SideNav from '../topnav/topnav.jsx'

import './theme.css';

console.log("2222");

export default class layout extends React.Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div id="wrapper">
                <TopNav />
                <SideNav />
                { this.props.children }
            </div>
        )
    }
}