import React, { Component } from 'react';
import './index.scss';
class TamGiacMathuat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menu-wrapper">
                <ul className="ul-menu">
                    <li className="li-menu-item">
                        <div className="parrent">
                            <a href="#menu1">Menu 1</a>
                            <div className="drop-down">
                                <ul>
                                    <li>
                                        <a href="#">Menu Item 1</a>
                                        <div className="mini-zone" />
                                        <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Submenu Item 1.1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Submenu Item 1.2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Menu Item 2</a>
                                        <div className="mini-zone" />
                                        <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Submenu Item 2.1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Submenu Item 2.2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TamGiacMathuat;
