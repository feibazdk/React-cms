import React from 'react';
import { Link } from 'react-router-dom';

export default class TopNav extends React.Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="index.html"><b>In</b>sight</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" to="#" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i> <span>欢迎，admin</span> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><Link to="#"><i className="fa fa-sign-out fa-fw"></i>退出</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}