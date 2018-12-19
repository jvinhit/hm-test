import React from 'react';
import CountDown from './components/countdown';
import ImageGallery from './components/imagegallery';
import { CustomButton } from './components/common/custombutton';
import { ToggleMenu } from './components/common/togglemenu';
import { Menu } from './components/common/menu';
import axios from 'axios';
import Search from './components/searchbox';
import TamGiacMathuat from './components/tamgiacmathuat';
import Calculator from './components/liftingstateup';
import LazyLoadimageComponent from './components/lazyloadimage';
const currentDate = new Date();
const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
class RouteConfigs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMenuHide: true };
    }
    onToggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ isMenuHide: !this.state.isMenuHide });
        return;
    }
    componentDidMount() {
        this.promiseUseCase()
            .then(response => response.filter(item => item.userId === 1))
            .then(dataUserId1 => console.log(dataUserId1))
            .catch(err => console.log(err));
    }
    promiseUseCase() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return new Promise((resolve, reject) => {
            var a = new XMLHttpRequest();
            a.onreadystatechange = function() {
                if (a.readyState === a.DONE && a.status === 200) {
                    const data = JSON.parse(a.response);
                    resolve(data);
                } else if (a.status === '404') {
                    reject(a.status);
                }
            };
            a.open('GET', url, true);
            a.send();
        });
    }

    callApi(url, method) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                    const data = JSON.parse(xhr.response);
                    resolve(data);
                } else if (xhr.status === '404') {
                    reject(xhr.status);
                }
            };
            xhr.open('GET', url, true);
            xhr.send();
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <CountDown date={`${year}-12-06T00:00:00`} />
                    <ImageGallery infinite={true} autoplay={true} autoplaySpeed={1000}>
                        <img src="https://salt.tikicdn.com/ts/lp/8a/81/e2/4fdaacbe3a3c3fccfd8cdfe29d868f9f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag</span>
                        </div>
                        <img src="https://salt.tikicdn.com/ts/lp/53/c8/9b/22b09f264276653d69c0665ed525830f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag seconds</span>
                        </div>
                        asd
                    </ImageGallery>
                    <div className="common">
                        <div>
                            <CustomButton classname="draw" text="Draw" />
                            <CustomButton classname="meet draw" text="Draw Meet" />
                            <CustomButton classname="meet draw spin" text="Center" />
                            <CustomButton classname="meet draw" text="Spin" />
                            <CustomButton classname="meet draw" text="Draw Meet" />
                        </div>
                    </div>
                    <LazyLoadimageComponent />
                    <div className="menu-container">
                        <ToggleMenu onClick={e => this.onToggleMenu(e)}>
                            <Menu
                                isHide={this.state.isMenuHide}
                                source={[
                                    { link: '#home', text: 'Home' },
                                    { link: '#home', text: 'Home' },
                                    { link: '#home', text: 'Home' },
                                    { link: '#home', text: 'Home' }
                                ]}
                            />
                        </ToggleMenu>
                        <div className="tam-giac">
                            <TamGiacMathuat />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteConfigs;
